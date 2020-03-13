import React from "react";
import { Link } from 'react-router-dom'
import { Searchbar } from './Searchbar'
import { SearchUser } from './SearchUser'
import { Logout } from './Logout'
import { Hamburger } from 'components/Hamburger'
import { PopoverLogin } from 'components/PopoverLogin'
import { PopoverUserSearch } from 'components/PopoverUserSearch'
import Button from '@material-ui/core/Button';

import {
  HeadingStart, HeaderStartContainer, MainStartContainer
} from "./Styling";
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  // const [errorMessage, setErrorMessage] = useState("");

  const accessToken = useSelector((state) => state.users.accessToken)
  const userName = useSelector((state) => state.users.userName)


  return (
    <MainStartContainer>
      <Hamburger />
      <HeaderStartContainer>
        <HeadingStart><Link to={`/`}>MATCH ❤️ MOVIES</Link></HeadingStart>
        <Searchbar />
        {/* <SearchUser /> */}

      </HeaderStartContainer>
      <SubNavbar>
        <Button variant="contained" color="secondary">
          <Link to="/users/:id/movies">
            Watchlist
        </Link>
        </Button>
        <PopoverUserSearch />
        <SubNavbarLeft>
          <UserName>
            {userName}
          </UserName>
        </SubNavbarLeft>
        <SubNavbarRight>
          {!accessToken &&
            <PopoverLogin />
          }
          {accessToken &&
            <Logout />
          }
        </SubNavbarRight>
      </SubNavbar>

    </MainStartContainer >

  )
}
const SubNavbar = styled.div`
height: 50px;
background-color: firebrick;
display: flex;
justify-content: space-between;
`
const SubNavbarLeft = styled.div`
`
const UserName = styled.p`
color: white;
font-weight: bold;
padding: 5px;
`
const SubNavbarRight = styled.div`
`

  // const NavbarButton = styled.button`
  // width:70px;
  // color: white;
  // background-color: transparent;
  // font-size: 16px;
  // font-weight: bold;
  // border:none;
  // &:hover {
  //   transform: scale(1,1);
  //   cursor: pointer;
  // `}
