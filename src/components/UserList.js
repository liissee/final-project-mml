import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  // UserName, UserNames, WrapperWelcomeBox
} from "./Styling"
import styled from 'styled-components/macro'



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
    <Wrapper>
      <InfoText>Other users - compare ratings and watchlists</InfoText>
      <UserNames>
        {userList.map((user) => (
          userId !== user._id &&
          <UserName>
            <Link to={`/users/${user._id}`} key={user._id}>
              <span>{user.name}: {user.movies.length} saved movies</span>
            </Link></UserName>
        ))}
      </UserNames>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  text-align:center;
  margin: 60px auto;
  color: white;
  padding: 20px 30px 30px 30px;
  background: inherit;
`
const InfoText = styled.h2`
  font-family: 'Raleway', sans-serif;
`
export const UserNames = styled.div`
  font-size: 18px;
  margin-bottom: 2vh;
  color: #000f3c;
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  margin: 5px;
  a{
  text-decoration: none;}
  span {
    background: #fe5426;
    padding: 3px 20px;
    color: #000f3c;
  &:hover {
    color:  #fe5426;
    background: #000f3c;
  }
}
`