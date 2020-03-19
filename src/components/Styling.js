import styled from 'styled-components/macro'


export const Heading = styled.h1`
  font-size: 1.5em;
  font-weight: normal;
  margin: 10px 0;
  text-align: center;  
  color: ${props => props.color ? props.color : "#000"};
  border-radius: 15px;
`
export const Link = styled.link`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  transition: background $standard-transition;
  &:hover {
    background: lighten(#33cc77,10%);
    cursor: pointer;
  }
`
export const Main = styled.main`
`

// Login and Registration /////////////////////////////////////////////
export const Button = styled.button`
  background: #0a2e4e;
  border-color: transparent;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  margin: 2px;
  padding: 10px;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  text-transform: uppercase;
  &:hover {
    transform: scale(1.01);
    transition: 
      box-shadow 0.4s, 
      transform 0.4s;
  }
`
export const ErrorMessage = styled.p`
    color: ${props => props.color ? props.color : "#fe5426"};
/* color:#fe5426; */
  font-size: 14px;
  
`

export const FieldContainer = styled.div`
  &.-focused label {
    bottom: auto;
    color: #888;
    font-size: 11px;
    font-weight: bold;
    line-height: 12px;
    top: 8px;
  }
  &.-focused input {
    line-height: 62px;
  }
`
export const Form = styled.form`
  background: #ededed;
  border-radius: 8px;
  display: block;
  margin: 60px auto;
  max-width: 480px;
  padding: 20px 30px 30px 30px;
`
export const Input = styled.input`
  background: transparent;
  border: none;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 15px;
  line-height: 54px;
  margin: 10px 0px;
  padding: 0 10px;
  transition: border-color $standard-transition;
  width: 100%;
  z-index: 2;
  &:focus, &:active {
    border-bottom: 2px solid black;
    border-color: #ededed;
    outline: none;
  }
`
export const Label = styled.label`
  color: #666;
  display: block;
  font-size: 13px;
  line-height: 1px;
  padding: 10px;  
`


// MovieCards on Userpage and Otheruser page /////////////////////////////////////////////
export const ImageNotFound = styled.img`
  width: 185px;
`
export const MovieCard = styled.div`
  background: rgb(31,33,40);
  background: radial-gradient(circle, rgba(31,33,40,0.9346113445378151) 0%, rgba(23,23,25,0.9878326330532213) 100%);border: 2px solid #f5b333;
  color:white;
  border-radius: 20px;
  height: 350px;
  margin: 10px;
  padding-bottom: 5px;

  @media(min-width: 768px) {
    height: 30vh;
    margin: 10px;
    padding-bottom: 5px;
  }
`
export const MovieCardInfo = styled.p`
  color: grey;
  display: inline;
  margin: 0;
  padding: 5px;
  /* margin-top: 1.5vh;
  margin-bottom: 2vh; */
`
export const MovieCardOverview = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 1em;
  overflow: hidden;
  /* margin-bottom: 5px; */
`
export const MovieCardTitle = styled.h1`
  color: white;
  font-size: 16px;
  margin-bottom: 1vh;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media(min-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 0;
  }
`
export const MovieImage = styled.img`
  border-radius: 20px 0 0 0;
  height: 150px;
  width: 135px;
  @media(min-width: 768px) {
    border-radius: 20px 0 0 20px;
    height: 29.5vh;
    width: 185px;
  }
`
export const MovieTags = styled.div`
  align-items:center;
  display: flex;
  flex-direction:row;
  font-weight: 600;
`
export const WrapMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
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



// MovieDetail /////////////////////////////////////////////
export const ActorImage = styled.img`
  border-radius: 50%;
  height: auto;
  margin: 0;
  // object-fit: cover;
  width: 100px;
  /* display: inline;
  height: auto; */
  /* width: 50px;
  height: auto; */
`
export const ActorList = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(2,2fr);
  grid-template-rows: repeat(2,2fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-bottom: 3vh;
  }
`
export const ActorListWrap = styled.div`
  margin-left: 2vw;
  margin-top: 6vh;
  @media(min-width: 768px) {
    margin-top: 0;
  }
`
export const ActorName = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2vh;
  text-align:center;
  text-decoration: none;
`
export const ActorWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
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
export const MovieDetailImage = styled.img`
  margin-top: 2vh;
  width: 230px;
  @media(min-width: 768px) {
    margin-top: 0;
    width: 185px;
  }
`
export const MovieDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1vh;
`
export const MovieImdb = styled.h3`
  background: #FFD700;
  color: black;
  margin-bottom: 2vh;
  margin-left: 5vw;
  margin-top: 1.5vh;
  @media(min-width: 768px) {
    margin-left: 1vw;
  }
`
export const MovieInfo = styled.h3`
  color: white;
  margin-bottom: 2vh;
  margin-top: 1.5vh;
`
export const MovieOverview = styled.div`
  color: white;
  font-size: 16px;
  margin-bottom: 2vh;
`
export const MovieRating = styled.h3`
  color:white;
`
export const MovieTitle = styled.h1`
  color: white;
  margin-top: 2vh;
  text-decoration: none;
  @media(min-width: 768px) {
    margin-top: 0;
  }
`
export const RatingButtonContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18.5vw;
  /* margin-bottom: 4vh;
  margin-left: 0; */
`
export const RatingMovieWrap = styled.div`
  margin-left: 3vw;
  @media(min-width: 768px) {
    margin-left: 18.5vw;
  }
`
export const ShowSimilar = styled.div`
  color: white;
`
export const SimilarMovies = styled.div`
  width: 50%;
`
export const SimilarTitle = styled.h3`
  margin-left: 2vw;
`
export const WrapMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 3vw;
  @media(min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 2vw;
  }
`
export const WrapMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  width: 90%;
  @media(min-width: 768px) {
    width: 50%;
  }
`
export const YourRating = styled.h3`
  color: white;
  margin-bottom: 2vh;
  margin-left: 3vw;
  margin-top: 0;
  @media(min-width: 768px) {
    margin-left: 18.5vw;
  }
`



// Navbar /////////////////////////////////////////////
export const ButtonSearchUser = styled.button`
  background: inherit;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-left: 2vw;
  padding-top: 0;
  text-transform: uppercase;
  &:hover {
    color:#fe5426;
  }
`
export const HeaderStartContainer = styled.div`
  align-items: center;
  background: #ffcf3c;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: center;
  padding: 15px;
  padding-left: 50px;
  @media(min-width: 768px) {
    flex-direction: row;
    padding-left: 15px;
  }
`
export const HeaderTitle = styled.h1`
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  line-height: 0.7;
  margin-left: 10px;
  a {
    color: #000f3c;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-decoration: none;
    transition: color 0.3s linear;
    /* text-shadow: 2px 2px 0px #000f3c, 5px 4px 0px rgba(0,0,0,0.15); */
  }
  /* font-family: 'Muli', sans-serif; */
`
export const MainStartContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const NavRightContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
export const SignInButton = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 2em;
  margin-left: 2vw;
  background: inherit;
  font-family: 'Raleway', sans-serif;
  margin-right: 60px;
  &:hover {
    color:#fe5426;
    transform: scale(1.2);
  }
`
export const SignOutButton = styled(SignInButton)`
`
export const SubNavbar = styled.div`
  align-items: baseline;
  background: #1e2026;
  color: white;
  display: flex;
  height: 50px;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
    @media(max-width: 768px) {
    align-items: center;
  }
  /* background: radial-gradient(circle, rgba(0,0,0,0.2539390756302521) 100%, rgba(148,187,233,1) 100%);   */
`
export const UserNameNav = styled.div`
  color: white;
  font-size: 16px;
  text-decoration: none;
  transform: uppercase;
  &:hover {
    color:#fe5426;
  }
`
export const WatchListLink = styled.div`
  color: white;
  display: none;
  font-size: 16px;
  margin-left: 2vw;
  margin-top: 2vh;
  text-decoration: none;
  &:hover {
    color:#fe5426;
  }
  &.active {
    /* text-decoration: underline tomato; */
    border-bottom: 1px solid tomato;
    padding-bottom: 1.5px;
  }
  @media(min-width: 768px) {
    display: inline-block;
  }
`

// Otheruser /////////////////////////////////////////////
// export const OtherUserMain = styled.section`
//   /* background: black;
//   height: 100%;
//   margin: 0; */
// `

// Searchbar /////////////////////////////////////////////
export const FormSearch = styled.form`
  background: none;
  border-radius: 8px;
  display: block;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 4vw;
  max-width: 480px;
  /* padding: 20px 30px 30px 30px; */
  @media(min-width: 768px) {
    margin-bottom: 10px;
  }
`

export const SearchLine = styled.input`
border: none;
border-bottom: 2px solid black;
background: transparent;
font-size: 16px;
`


// UserPage /////////////////////////////////////////////
export const ButtonRating = styled.button`
/*   background-color: #B22222;
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
    cursor: pointer; */
  }
`
export const ButtonWatch = styled(Button)`
  border: #fff solid 2px;
  background: inherit;
  border-radius: 0.6em;
  padding: 3px;
  font-weight: 400;
  &:hover, 
  &:active {
    color: #1c1a21;
    border: #1c1a21 solid 2px;
    background: #Fff;
    font-weight: 600;
  }
`
export const ButtonMore = styled(ButtonWatch)`
  color: #1c1a21;
  border: #1c1a21 solid 2px;
  background: #fff;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 20px;
  &:hover, 
  &:active {
  border: #fff solid 2px;
  background: inherit;
  font-weight: 600;
  color: white;
  }
`
export const ButtonContainer = styled.div`
display:flex;
justify-content: center;
`

export const MoviesRatedParagraph = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: bold;
`
export const MovieRatedRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2vh;
`
export const RatingButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 4vh;
  margin-left: 0; */
`
export const RatingStars = styled.div`
  margin-left: auto;
  align-items:center;
  text-align:center;
`
export const UserName = styled.div`
  color: white;
  font-size: 16px;
  margin-bottom: 2vh;
  text-decoration: none;
`
export const UserNames = styled.h1`
  color: white;
  text-transform: uppercase;
  margin-bottom: 2vh;
`
export const WelcomeMovieRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Wrapper = styled.div`
  background: #ededed;
  border-radius: 8px;
  display: block;
  margin: 60px auto;
  // max-width: 480px;
  padding: 20px 30px 30px 30px;
  &.link-text {
    text-decoration: none;
  }
`
export const WrapperUserPage = styled.div`
`
export const WrapperWelcome = styled(Wrapper)`
  background: #F5F5F5;
  border: 1px solid gray;
  box-shadow: 5px 10px;
  max-width: 800px;
`
export const WrapperWelcomeBox = styled(Wrapper)`
  background: transparent;
  margin-top: 10px;
  max-width: 900px;
`

//Var används denna? 
export const SearchContainer = styled.div`
`