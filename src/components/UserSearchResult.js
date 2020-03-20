import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { 
} from "./Styling"


export const UserSearchResult = () => {
  const searchResult = useSelector(state => state.users.users)
  console.log(searchResult)
  return (
    <WrapperUserSearch>
      {searchResult.length === 0
        ? <InfoText>Sorry, can't find any users with that name</InfoText>
        : <InfoText>Visit other users and see what movies you both like</InfoText>
      }
      <UserNames>
        {searchResult.map((user) => (
          <UserName key={user._id}><Link to={`/users/${user._id}`}>
            <span>{user.name}</span></Link>
          </UserName>
        ))}
      </UserNames>
    </WrapperUserSearch>
  )
}

const InfoText = styled.h2`
  font-family: 'Raleway', sans-serif;
`

const UserName = styled.div`
  margin: 5px;
  a {
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

const WrapperUserSearch = styled.div`
  background: inherit;
  color: white;
  margin: 60px auto;
  padding: 20px 30px 30px 30px;
  text-align:center;
`