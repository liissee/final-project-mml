import styled from 'styled-components/macro'
import Icon from '@material-ui/core/Icon'

export const Heading = styled.h1`
  border-radius: 15px;
  color: ${props => props.color ? props.color : "#000"};
  font-size: 1.5em;
  font-weight: normal;
  margin: 10px 0;
  text-align: center; 
  font-family: 'Raleway', sans-serif; 
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

// Comments /////////////////////////////////////////////
export const ButtonWrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  width: 300px;
  @media(min-width: 768px) {
    width: 475px;
  }
`
export const CommentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  width: 300px;
   @media(min-width: 680px) {
    width: 640px;
  }   
  @media(min-width: 1000px) {
    width: 960px;
  }
`
export const CommentForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
`
export const CommentText = styled.div`
  font-size: 14px;
  margin: 10px 10px 0 10px;
  overflow: scroll;
  overflow-wrap: break-word;
`
export const CommentTitle = styled.h1`
  color: white;
  margin-top: 0;
`
export const CommentUserName = styled.div`
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  margin: 0;
  padding-right: 5px;
  span {
    background: #fe5426;
    color: #000f3c;
    font-size: 14px;
    padding: 3px 10px;
  }
`
export const CommentWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 3vw 3vw 0 3vw;
  @media(min-width: 768px) {
    margin: 2vw 2vw 0 2vw;
  }
`
export const InsideCards = styled.div`
  background: rgba(29, 43, 49, 0.11); 
  border: solid 1px #ffcf3c;
  color: white;
  display: flex;
  flex-direction: column;
  height: 83px;
  margin: 10px;
  width: 300px;
  word-wrap: break-word;
`
export const NewComment = styled.textarea`
  border: 2px solid #fe5426;
  border-radius: 2px;
  font-size: 14px;
  height: 80px;
  padding: 5px;
  resize: none;
  width: 300px;
  @media(min-width: 768px) {
    font-size: 16px;
    width: 475px;
  }
`
export const TextLength = styled.div`
  color: white;  
  display: flex;
  .red {
    color: red;
}
`
export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`


// Hamburger /////////////////////////////////////////////
export const HamburgerWrap = styled.div`
  display: inline-block;
  @media(min-width: 768px) {
    display: none;
  }
`
export const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  left: 2rem;
  padding: 0;
  position: absolute;
  top: 5%;
  width: 2rem;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    height: 0.25rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 2rem;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
export const StyledMenu = styled.nav`
  background: #ffcf3c;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 1.5rem;
  position: absolute;
  text-align: left;
  top: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  width: 100%;
  a {
    color: #000f3c;
    font-family: 'Raleway',sans-serif;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    padding: 1.3rem 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s linear;
      text-align: center;

    &:hover {
      color: #343078;
    }
  }
`


// Loading /////////////////////////////////////////////
export const LoadingIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1em;
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
  @media(max-width: 500px) {
   max-width: 35vh;
  }
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

// Logout /////////////////////////////////////////////
export const LogoutStaticButton = styled.button`
  background: #ffcf3c;
  border: none;
  color: #000f3c;
  font-family: 'Raleway',sans-serif;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  padding: 1.3rem 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s linear;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
  &:hover {
    color: #343078;
}
}
`


// MovieCards on UserPage and OtherUser components /////////////////////////////////////////////
export const ImageNotFound = styled.img`
  width: 185px;
`
export const MovieCard = styled.div`
  background: rgb(31,33,40);
  background: radial-gradient(circle, rgba(31,33,40,0.9346113445378151) 0%, rgba(23,23,25,0.9878326330532213) 100%);border: 2px solid #f5b333;
  border-radius: 20px;
  color: white;
  height: auto;
  margin: 10px;
  padding-right: 8px;
  @media(min-width: 768px) {
    height: 282px;
    margin: 10px;
    padding-bottom: 5px;
  }
`
export const MovieCardInfo = styled.p`
  color: grey;
  display: inline;
  margin: 0;
  padding: 5px;
  &a{
    text-decoration:none;
  }
`
export const ImdbLink = styled.a`
color: #ffcf3c;
&:hover{
text-decoration: none;
color: black;
background-color: #ffcf3c;
}
`

export const MovieCardOverview = styled.div`
  font-size: 1em;
  overflow: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: none;
  @media(min-width: 768px) {
    display: -webkit-box;
  }
`
export const MovieCardTitle = styled.h1`
  color: white;
  font-size: 16px;
  margin-bottom: 1vh;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Raleway', sans-serif;
  padding: 0 20px 0 0;
  &:hover a{
    text-decoration:none;
  }
  @media(min-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 0;
  }
`
export const MovieImage = styled.img`
  border-radius: 20px 0 0 20px;
  height: 180px;
  width: auto;
  @media(min-width: 768px) {
    width: 185px;
    height: 278px;
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
  flex-direction: row;
  border-radius: 20px 0 0 20px;
  &:hover .white-link:hover {
    color: white;
    text-decoration: underline;
  }
`
export const WrapMovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  padding-bottom: 2vh;
  width: 65%;
  @media(min-width: 768px) {
    width: 70%;
  }
`


// MovieDetail /////////////////////////////////////////////
export const ActorImage = styled.img`
  display: inline;
  height: auto;
  margin: -20% 0 0 0;
  width: 100%;
`
export const ActorImageWrap = styled.div`
  border-radius: 50%;
  height: 100px;
  overflow: hidden;
  padding-bottom: 20px;
  width: 100px;
`
export const ActorList = styled.div`
  color: white;
  display: grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-columns: repeat(2,2fr);
  grid-template-rows: repeat(2,2fr);
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
  text-align: center;
  text-decoration: none;
`
export const ActorWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  & .white-link:hover {
    text-decoration: underline white;
  }
`

export const Genre = styled.div`
  background: #B22222;
  color: white;
  margin: 0;
  margin: 0 1vw 1vw 0;
  padding: 4px;
`
export const MovieBackground = styled.div`
`
export const MovieDetailGenres = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1vh;
`
export const MovieDetailImage = styled.img`
  width: 230px;
  @media(max-width: 400px) {
    width: 100%;
  }
`
export const MovieDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1vh;
`

export const MovieImdb = styled.a`
  background: #FFD700;
  color: black;
  margin: 0;
  margin-left: 5vw;
  padding: 4px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: black;
  }
  @media(min-width: 768px) {
    margin-left: 1vw;
  }
`
export const MovieInfo = styled.h3`
  color: white;
  margin: 0;
  padding-top: 2px;
  text-align: center;
`
export const MovieOverview = styled.div`
  color: white;
  font-size: 16px;
  margin: 0 1vh 2vh 0;
`
export const MovieTitle = styled.h1`
  color: white;
  margin: 0;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  &:hover {
    text-decoration: none;
  }
`

export const RatingMovieWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5px;
width: 350px;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: start;
    width: 300px;
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
export const StarringTitle = styled(MovieInfo)`
  margin-bottom: 3vh;
  margin-left: 2vw;
  margin-top: 3vh;
  width: 5vw;
  @media(min-width: 768px) {
    margin-left: 0;
  }
`
export const WrapMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vw 3vw 0 3vw;
  @media(min-width: 550px) {
    display: flex;
    flex-direction: row;
    margin: 2vw 2vw 0 2vw;
  }
`
export const WrapMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media(min-width: 550px) and (max-width: 1024px) {
    width: 70%;
    margin: 0 2vw;
  }
  @media(min-width: 1025px) {
    width: 50%;
    margin-left: 2vw;
  }
`
export const WrapRating = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  height: 150px;
  margin-top: 6vh;
  padding: 10px;
  padding-right: 50px;
  width: 230px;
  @media(min-width: 768px) {
    margin-left: 2vw;
    margin-top: 0;
  }
`
export const YourRating = styled.h2`
  color: white;
  margin-bottom: 2vh;
  margin-top: 0;
`

// MoviesList /////////////////////////////////////////////
export const HoverDetails = styled.div`
  background: #25090183;
  border-radius: 10px;
  bottom: 0;
  display: none;
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
`
export const ListImage = styled.img`
  border-radius: 10px;
  height: 100%;
  width:100%;
  @media (max-width: 600px) {
    border-radius: 10px 0 0 10px;
    height: 98%;
    padding-left: 2px;
    width: auto;
    z-index: 1;
  }
`
export const MobileView = styled.div`
  & .movie-title {
    margin-bottom: 0;
  }
  &:hover .white-link:hover {
    color: white;
    text-decoration: underline;
  }
@media(max-width: 600px) {
  bottom: 0%;
  left: 38%;
  position: absolute;
  right: 0;
  top: 10%;
  & .movie-info {
    font-size: 1.1em;
  }
  & .rating {
    margin-left: 20px;
  }
}
`
export const MovieList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px;
  &:hover {
    &:hover${HoverDetails} .white-link {
      color: white;
      display: block;
      text-decoration: none;
    }
  }
  &:hover${HoverDetails} {
    background: #25090183;
    border-radius: 10px;
    bottom: 0;
    display: none;
    left: 0;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
  }
  
  @media(max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px;
    & .hover-details {
      background: rgb(31,33,40);
      background: radial-gradient(circle, rgba(31,33,40,0.9346113445378151) 0%, rgba(23,23,25,0.9878326330532213) 100%);
      border: 2px solid #f5b333;
      display: block;
      border-radius: 10px;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    & .movie-title {
      margin-bottom: 0;
      margin-top: auto;
      overflow: hidden;
      padding: 0 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  }
`

export const MovieWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.568);
  color: #fff;
  margin: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 250px;
  &:hover .white-link:hover {
    display: block;
    color: white;
    text-decoration: none;
    transform: scale(1.1);
  @media (max-width: 600px) {
      transform: none;
  }
  }
  &:hover .hover-details {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  @media (max-width: 600px) {
    align-items: center;
    border-radius: 10px;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
    color: #fff;
    display: flex;
    height: 25vh;
    justify-content: flex-start;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }
`

export const RatingBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 15%;
`
export const StyledLink = styled(Link)`
`

// From actors component
export const ActorTitle = styled(MovieTitle)`
  margin: 50px 0 0 50px;
`


// MoviesMatched /////////////////////////////////////////////
export const RatingsText = styled.p`
  margin-top: 4px;
`
export const StyledRatings = styled.div`
  display: flex;
  margin-bottom: 16px;
`
export const StyledMovieImage = styled(MovieImage)`
  height: 200px;
  width: auto;
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
    justify-content: space-between;
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
  }
`
export const NavRightContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  & .white-link:hover{
    text-decoration: none;
  }
  @media(max-width: 600px) {
    display: flex;  
    margin-right: 10px;
    padding: 0; 
  }
`
export const SignInButton = styled.button`
  background: inherit;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 1.5em;
  margin-left: 2vw;
  /* margin-right: 60px; */
  text-transform: uppercase;
  &:hover {
    color:#fe5426;
    transform: scale(1.2);
  }
   @media(max-width: 600px) {
     display: none;
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
    border-bottom: 1px solid tomato;
    padding-bottom: 1.5px;
  }
  @media(min-width: 768px) {
    display: inline-block;
  }
`


// OtherUser Page /////////////////////////////////////////////
export const HeaderOtherUser = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const OthersRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  left: 155px;
  position: absolute;
  top: 74px;
  @media(min-width: 768px) {
    left: 216px;
  }
  @media(min-width: 1024px) {
    left: 220px;
  }
`
export const OtherUserMain = styled.section`
`
export const Rated = styled.section`
  background: transparent;
  border-radius: 8px;
  display: block;
  margin: 60px auto;
  margin-top: 10px;
  max-width: 900px;
  &.link-text {
    text-decoration: none;
  }
  @media(min-width: 768px) {
    padding: 20px 30px 30px 30px;
  }
`
export const RatedCard = styled.div`
  position: relative;
`
export const RatedSpan = styled.span`
  padding: 4px 2px 0 0;
`
export const UserName2 = styled.div`
  text-transform: uppercase;
  span {
    background: #fe5426;
    color: #000f3c;
    display: inline-block;
    font-size: 24px;
    margin: 20px;
    padding: 3px 20px;
  }
}
`
export const UserNames2 = styled.div`
  color: #000f3c;
  font-size: 1.5em;
  font-weight: normal;
  margin-bottom: 2vh;
  margin-top: 6vh;
  padding: 20px;
  text-align: center;
`
export const UserName3 = styled(UserName2)`
  background: transparent;
  color: #fe5426;
  font-size: 24px;
  margin: 0;
  padding: 20px;
  text-align: center;
`
export const Wrapper2 = styled.div`
  background: inherit;
  color: white;
  margin: 60px auto;
  padding: 20px 30px 30px 30px;
  text-align: center;
`
export const WrapperOtherUser = styled.div`
  color: white;
`


// Searchbar /////////////////////////////////////////////
export const FormSearch = styled.form`
  background: none;
  border-radius: 8px;
  display: block;
  margin: 10px;
  margin-bottom: 20px;
  margin-left: 4vw;
  max-width: 480px;
  @media(min-width: 768px) {
    margin-bottom: 10px;
  }
`
export const SearchLine = styled.input`
  background: transparent;
  border: none;
  color: white;
  border-bottom: 2px solid #fe5426;
  font-size: 16px;
  width: 200px;
  &::placeholder {
    color: white;
    font-family: "Raleway", sans-serif;
  }
  @media(min-width: 768px) {
    width: 250px;
  }
`


// UserList /////////////////////////////////////////////
export const InfoText = styled.h2`
  font-family: 'Raleway', sans-serif;
`
export const ListUserName = styled.div`
  margin: 5px;
  a {
    text-decoration: none;
  }
  span {
    background: #fe5426;
    color: #000f3c;
    padding: 3px 20px;
  &:hover {
    background: #000f3c;
    color:  #fe5426;
  }
}
`
export const ListUserNames = styled.div`
  color: #000f3c;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 2vh;
  margin-top: 6vh;
`
export const ListWrapper = styled.div`
  background: inherit;
  color: white;
  margin: 60px auto;
  padding: 20px 30px 30px 30px;
  text-align: center;
`



// UserPage /////////////////////////////////////////////
export const ButtonContainer = styled.div`
  display:flex;
  justify-content: center;
`
export const ButtonWatch = styled(Button)`
  background: inherit;
  border: #fff solid 1px;
  border-radius: 2px;
  font-weight: 400;
  padding: 2px 4px;
  &:hover, 
  &:active {
    background: #ffcf3c;
    border: #ffcf3c solid 1px;
    color: #1c1a21;
  }
  @media(max-width: 600px) {
    width: 120px;
  }
`
export const ButtonMore = styled(ButtonWatch)`
  background: #fff;
  border: #1c1a21 solid 2px;
  color: #1c1a21;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 10px;
  &:hover, 
  &:active {
  background: inherit;
  border: #fff solid 2px;
  color: white;
  font-weight: 600;
  }
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
`
export const RatingStars = styled.div`
  align-items: center;
  margin-left: auto;
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
  margin-bottom: 2vh;
  text-transform: uppercase;
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
  &.link-text {
    text-decoration: none;
  }
  @media(min-width: 768px) {
    padding: 20px 30px 30px 30px;
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

export const Number = styled.p`
color: black;
font-weight: bold;
left: 27px;
position: absolute;
top: 23px;
z-index: 2;
`
export const OtherButtonMore = styled(ButtonMore)`
margin: 10px 0 0 5px;
/* margin-bottom: 0;
margin-left: 5px; */
`
export const Sort = styled.div`
align-items: center;
display: flex;
`
export const Yellow = styled(Icon)`
color: #ffb402;
left: 5px;
position: absolute;
top: 5px;
z-index: 1;
`
export const YellowButtonMore = styled.button`
background-color: transparent;
border: none;
height: 50px;
position: relative;
width: 50px;
cursor: pointer;
`


// Other /////////////////////////////////////////////
export const SearchContainer = styled.div`
`