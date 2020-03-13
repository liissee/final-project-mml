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
          <Link to={`/users/${searchResult._id}`}>
            <UserName>{searchResult.name}</UserName>
          </Link>
        </UserNames>
      </WrapperWelcomeBox>
    </div>
  );
};