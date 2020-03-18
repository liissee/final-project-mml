import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  UserName, UserNames, WrapperWelcomeBox
} from "./Styling"


// const url = "http://localhost:8080/secrets";
const url = 'https://final-movie-match.herokuapp.com/secrets'

export const UserList = () => {
  const [userList, setUserList] = useState([])
  const userId = useSelector((state) => state.users.userId)
  const [watchList, setWatchList] = useState([])

  // All users
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/allUsers`)
      // fetch(`http://localhost:8080/users/${userId}/allUsers`)
      .then(res => res.json())
      .then(json => {
        setUserList(json)
        console.log("all users:", json)
      })
  }, [userId])


  // useEffect(() => {
  //   fetch(`https://final-movie-match.herokuapp.com/movies/${user._id}?friend=${userId}`)
  //     // fetch(`http://localhost:8080/movies/${myId}?friend=${userId}`)
  //     .then(res => res.json())
  //     .then(json => {
  //       setWatchList(json)
  //     })
  // }, [userId])
  // console.log(watchList)

  return (
    <WrapperWelcomeBox>
      <UserNames>Other users - compare ratings and watchlists</UserNames>
      {userList.map((user) => (
        <div
          key={user._id}
        >
          <Link to={`/users/${user._id}`}>
            <UserName>{user.name}</UserName>
          </Link>
        </div>
      ))}
    </WrapperWelcomeBox>
  );
};