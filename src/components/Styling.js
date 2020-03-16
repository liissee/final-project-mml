import styled from 'styled-components/macro'

// FÄRGER:
// TOMATORÖD: #fe5426
// GUL: #ffcf3c
// MIDNIGHTBLUE: #000f3c
//MÖRKGRÅ: #293140

export const Main = styled.main`
`
export const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.5;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;  
`

// NAVBAR
export const ButtonSearchUser = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 2vw;
  padding-top: 0;
  text-transform: uppercase;
  color: white;
    &:hover {
    color:#fe5426;
  }
`
export const HeaderStartContainer = styled.div`
  background: #ffcf3c;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: 700;
  align-items: center;
  padding: 15px;
`
export const HeaderTitle = styled.h1`
  /* font-family: 'Muli', sans-serif; */
  display: flex;
  flex-direction: column;
  line-height: 0.7;
  margin-left: 10px;
  font-family: 'Raleway', sans-serif;
  /* color: white; */
  a {
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 1.5px;
    /* text-shadow: 2px 2px 0px #000f3c, 5px 4px 0px rgba(0,0,0,0.15); */
    color: #000f3c;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`
export const SubNavbar = styled.div`
  color: white;
  background: #1e2026;
  /* background: #000f3c; BLÅ */
  /* background: radial-gradient(circle, rgba(0,0,0,0.2539390756302521) 100%, rgba(148,187,233,1) 100%);   */
  display: flex;
  height: 50px;
  align-items: baseline;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`
export const MainStartContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const NavRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: baseline;
`
export const SignInButton = styled(ButtonSearchUser)`
  background: inherit;
      &:hover {
    transform: scale(1.2);
    color:#fe5426;
  }
  
`
export const SignOutButton = styled(ButtonSearchUser)`
  background: inherit;
  text-align: none;
  align-items: start;
      &:hover {
    transform: scale(1.2);
    color:#fe5426;
  }
`

export const UserNameNav = styled.div`
  color: white;
  transform: uppercase;
  font-size: 16px;
  text-decoration: none;
    &:hover {
    color:#fe5426;
  }
`
export const WatchListLink = styled.div`
  color: white;
  font-size: 16px;
  margin-left: 2vw;
  margin-top: 2vh;
  text-decoration: none;
  &:hover {
    color:#fe5426;
  }
`

// Searchbar 
export const FormSearch = styled.form`
  margin: 10px;
  margin-left: 4vw;
  display: block;
  /* padding: 20px 30px 30px 30px; */
  max-width: 480px;
  background: none;
  border-radius: 8px;
  `


// export const UserName = styled.p`
// color: white;
// font-weight: bold;
// padding: 5px;
// `


//REGISTER AND LOGIN 
export const FieldContainer = styled.div`
  &.-focused label {
    font-size: 11px;
    line-height: 12px;
    color: #888;
    bottom: auto;
    top: 8px;
    font-weight: bold;
  }
  &.-focused input {
    line-height: 62px;
  }
`

//Var används denna? I Login.js och register.js
export const Form = styled.form`
  margin: 60px auto;
  display: block;
  padding: 20px 30px 30px 30px;
  max-width: 480px;
  background: #ededed;
  border-radius: 8px;
`

export const Input = styled.input`
  width: 100%;
  transition: border-color $standard-transition;
  z-index: 2;
  display: block;
  background: transparent;
  line-height: 54px;
  margin: 10px 0px;
  padding: 0 10px;
  font-size: 15px;
  border: none;
  color: #333;
  border-radius: 3px;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  &:focus, &:active {
    outline: none;
    border-color: #ededed;
    border-bottom: 2px solid black;
  }
`

export const Wrapper = styled.div`
  margin: 60px auto;
  display: block;
  padding: 20px 30px 30px 30px;
  max-width: 480px;
  background: #ededed;
  border-radius: 8px;
  &.link-text {
    text-decoration: none;
  }
`


// USERPAGE COMPONENT
export const ButtonRating = styled.button`
  background-color: #B22222;
  border-radius: 2em;
  box-sizing: border-box;
  color: #FFFFFF;
  display:inline-block;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  margin:0 0.3em 0.3em 0;
  padding:0.3em 1.2em;
  text-align:center;
  text-decoration:none;
  transition: all 0.2s;
  &:hover, &:active {
    background: #CD5C5C;
    cursor: pointer;
  }
`
export const ButtonWatch = styled(ButtonRating)`
 padding:0.3em 1.2em;
 margin:0 0.2em 0.2em 0;
 border-radius:1em;
 background-color: #FFA500;
 &:hover, &:active {
   background: #FF6347;
}
`
export const RatingButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 4vh;
  margin-left: 0; */
`
export const WrapperWelcome = styled(Wrapper)`
  border: 1px solid gray;
  box-shadow: 5px 10px;
  background: #F5F5F5;
  max-width: 800px;
`
export const WrapperWelcomeBox = styled(Wrapper)`
  background: transparent;
  margin-top: 10px;
  max-width: 900px;
`
export const WelcomeMovieRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

// MovieDetail component
export const ActorList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3vh;
  justify-content: start;
  color: white;
`
export const ActorListWrap = styled.div`
  margin-left: 2vw;
`
export const ActorName = styled.div`
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-align:center;
  font-weight: 600;
`
export const ActorWrap = styled.div`
padding: 10px;
display: flex;
justify-content: center;
`

export const ActorImage = styled.img`
object-fit: cover;
border-radius: 50%;
height: 100px;
width: 100px;
/* display:inline;
height: auto; */
margin: 0;
/* width: 50px;
height: auto; */
`
export const Genre = styled.div`
  background: #B22222;
  color: white;
  margin-right: 1vw;
  padding: 4px;
`

export const MovieBackground = styled.div`
  /* background: white; */
`
export const MovieDetailGenres = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3vh;
`
export const MovieDetailRow = styled(WelcomeMovieRow)`
  margin-top: 1vh;
`
export const MovieInfo = styled.h3`
  margin-top: 1.5vh;
  margin-bottom: 2vh;
  color:white;
`
export const MovieImdb = styled(MovieInfo)`
  background: #FFD700;
  color: black;
  margin-left: 1vw;
  width: 3.5vw;
`
export const MovieOverview = styled.div`
  font-size: 16px;
  margin-bottom: 2vh;
  color:white;
`
export const MovieTitle = styled.h1`
  color: white;
  margin-top: 0;
  text-decoration: none;
`
export const MovieRating = styled.h3`
color:white;
`
export const RatingButtonContainerDetail = styled(RatingButtonContainer)`
  margin-left: 18.5vw;
`
export const RatingMovieWrap = styled.div`
  margin-left: 18.5vw;
`
export const ShowSimilar = styled.div`
  color: white;
 
  `

export const YourRating = styled.h3`
  margin-bottom: 2vh;
  margin-left: 18.5vw;
  margin-top: 0;
  color: white;
`
export const SimilarMovies = styled.div`
width: 50%;

`
export const WrapMovie = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vw;
`
export const WrapMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  width: 50%;
`


export const ErrorMessage = styled.p`
color:red;
font-size: 14px;
`

export const Label = styled.label`
  display:block;
  line-height: 1px;
  color: #666;
  font-size: 13px;
  padding: 10px;  
`

export const Button = styled.button`
 cursor: pointer;
  text-transform: uppercase;
  padding: 10px;
  margin: 2px;
  background: #000f3c;
  border-radius: 3px;
  border-color: transparent;
  font-size: 1em;
  font-weight: bold;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
&:hover {
    background: #fe5426;
    color: #000f3c;
    transform: scale(1.01);
    transition: 
    box-shadow 0.4s, 
    transform 0.4s;
}
`

export const Link = styled.link`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  transition: background $standard-transition;
  &:hover {
    background: lighten(#33cc77,10%);
    cursor: pointer;
  }
`
export const SearchContainer = styled.div`
`
// UserPage
export const MoviesRatedParagraph = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: white;
`
export const MovieRatedRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2vh;
`

export const RatingStars = styled.div`
  margin-left: auto;
`
export const UserName = styled.p`
  margin-bottom: 1vh;
`
export const UserNames = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2vh;
  color: white;
  margin-top: 6vh;
`
export const WrapperUserPage = styled.div`
`


//MOVIEDETAIL2 ON USERPAGE
export const MovieCard = styled.div`
background: white;
/* background: rgb(248,255,238);
background: linear-gradient(90deg, rgba(248,255,238,0.542454481792717) 0%, rgba(255,141,111,0.7665441176470589) 100%);  border-radius: 20px; */
  /* padding: 20px 0 0; */
  margin: 10px;
  height: 200px;
  padding-bottom: 5px;
  border-radius: 20px;
`
export const MovieCardInfo = styled.p`
display: inline;
padding: 5px;
margin: 0;
/* margin-top: 1.5vh;
margin-bottom: 2vh; */
color: grey;
`
export const MovieCardOverview = styled.div`
  font-size: 1em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* margin-bottom: 5px; */
`
export const MovieCardTitle = styled.h1`
  color: black;
  margin-bottom: 0;
  text-decoration: none;
  font-size: 1.5em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const MovieImage = styled.img`
  border-radius: 20px 0 0 20px;
  height: 200px;
  width: 185px;
`
export const ImageNotFound = styled.img`
width: 185px;
`
export const MovieTags = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  font-weight: 600;
`
export const WrapMovieCard = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 2vw; */
`
export const WrapMovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  width: 70%;
`

