import React, { useState } from 'react'
import { Login } from './Login'
import { Registration } from './Registration'
import { Searchbar } from './Searchbar'
import { ButtonStart, HeadingStart, HeaderStartContainer, MainStartContainer, 
  StartButtonContainer } from "./Styling";
// Import what we need to use

// Include Login and Registration here
// One idea is in App.js to make a route to this page, e.g.
// <Route path="/" exact> <StartPage /></Route> or
// <Route exact path="/start" component={StartPage}/> 


export const StartPage = () => {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

// Use flexbox with flex-direction row for header-container
// Try to make "Movie Selector", searchbar and the buttons on the same row
  return (
    <MainStartContainer>
      <HeaderStartContainer>
        <HeadingStart>🍿 Movie Selector 🍿</HeadingStart>
        <Searchbar />
        <StartButtonContainer>
          <ButtonStart
            onClick={showRegister}
          >
            Register
          </ButtonStart>
          <ButtonStart
            onClick={showLogin}
          >
            Log-in
          </ButtonStart>
        </StartButtonContainer>
      </HeaderStartContainer>
    </MainStartContainer>
  )
}


// <div 
// className="background-container"
// style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)`}}
// >
// </div>