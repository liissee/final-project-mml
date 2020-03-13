import React from 'react'
import {
  UserName, UserNames, WrapperWelcomeBox
} from "./Styling"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const UserSearchResult = () => {
  const searchResult = useSelector(state => state.users.users)

  console.log(searchResult)

  return (
    <div>
      <WrapperWelcomeBox>
        <UserNames>Search result:
             {searchResult.map((user) => (
          <Link to={`/users/${user._id}`}>
            <UserName>{user.name}</UserName>
          </Link>
        ))}
        </UserNames>
      </WrapperWelcomeBox>
    </div>
  );
};