import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  UserName, UserNames, WrapperWelcomeBox
} from "./Styling"


const url = "http://localhost:8080/secrets";

export const UserList = () => {
  const [userList, setUserList] = useState([])
  const userId = useSelector((state) => state.users.userId)

  // All users
  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:8080/users/${userId}/allUsers`)
      .then(res => res.json())
      .then(json => {
        setUserList(json)
        console.log("all users:", json)
      })
  }, [userId])


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