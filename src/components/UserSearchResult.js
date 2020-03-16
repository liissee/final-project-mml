import React from 'react'
import styled from 'styled-components/macro'
import {

} from "./Styling"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const UserSearchResult = () => {
  const searchResult = useSelector(state => state.users.users)

  return (

    <Wrapper>
      <InfoText>Visit other users and see what movies you both like</InfoText>
      <UserNames>
        {searchResult.map((user) => (
          <UserName key={user._id} to={`/users/${user._id}`}>
            <span>{user.name}</span>
          </UserName>
        ))}
      </UserNames>
    </Wrapper>
  )
}

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

const UserName = styled(Link)`
  margin: 5px;
  span {
    background: #fe5426;
    padding: 3px 6px;
    color: #000f3c;
  &:hover {
    color:  #fe5426;
    background: #000f3c;
  }
}
`