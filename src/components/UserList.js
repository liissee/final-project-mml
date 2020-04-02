import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { InfoText, ListUserName, ListUserNames, ListWrapper } from "./Styling.js"


export const UserList = () => {
  const [userList, setUserList] = useState([])
  const userId = useSelector((state) => state.users.userId)

  // All users
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/allUsers`)
      .then(res => res.json())
      .then(json => {
        setUserList(json)
        console.log("all users:", json)
      })
  }, [userId])


  return (
    <ListWrapper>
      <InfoText>Other users - compare ratings and watchlists</InfoText>
      <ListUserNames>
        {userList.map((user) => (
          userId !== user._id &&
          <ListUserName>
            <Link to={`/users/${user._id}`} key={user._id}>
              <span>{user.name}: {user.movies.length} saved movies</span>
            </Link></ListUserName>
        ))}
      </ListUserNames>
    </ListWrapper>
  )
}