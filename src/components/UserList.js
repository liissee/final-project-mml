import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'


export const UserList = () => {
  const [userList, setUserList] = useState([])
  const userId = useSelector((state) => state.users.userId)

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


const InfoText = styled.h2`
  font-family: 'Raleway', sans-serif;
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
export const UserNames = styled.div`
  color: #000f3c;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 2vh;
  margin-top: 6vh;
`

const Wrapper = styled.div`
  background: inherit;
  color: white;
  margin: 60px auto;
  padding: 20px 30px 30px 30px;
  text-align: center;
`