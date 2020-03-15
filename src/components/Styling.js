import styled from 'styled-components/macro'


export const Main = styled.main`
`
export const Heading = styled.h1`
  font-size: 36px;
  line-height: 1.5;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;  
`

// NAVBAR
export const ButtonSearchUser = styled.button`
  background: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-left: 2vw;
  padding-top: 0;
`
export const HeaderStartContainer = styled.div`
  background: #004f4f;
  display: flex;
  // justify-content: center;
  flex-direction: row;
  /* font-family: 'Noto Sans JP', sans-serif; */
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font-size: 3em;
/* font-family: 'Cabin', sans-serif;  */
`
export const HeadingStart = styled(Heading)`
  color: white;
  /*Byt margin 80 till 10 för ipad och desktop*/
  margin: 10px 0 0 80px;
  /* margin-top: 60px; */
  a {
    font-size: 2rem;
    text-transform: uppercase;
    /* padding: 2rem 0; */
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
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
`
export const SignInButton = styled(ButtonSearchUser)`
  background: #004f4f;
`
export const SignOutButton = styled(ButtonSearchUser)`
  background: #004f4f;
`
export const SubNavbar = styled.div`
  background: teal;
  display: flex;
  height: 50px;
`
export const SubNavbarLeft = styled.div`
`
export const SubNavbarRight = styled.div`
`
export const UserNameNav = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 4vh;
  text-decoration: none;
`
export const WatchListLink = styled.div`
  color: white;
  font-size: 16px;
  margin-left: 2vw;
  margin-top: 2vh;
  text-decoration: none;
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



export const FieldContainer = styled.div`
  position: relative;
  display: block;
  margin: 10px 0;
  height: 54px;
  width: 100%;
  background: white;
  border: #f0f;
  border-radius: 3px;
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

//Var används denna?
export const Form = styled.form`
  margin: 60px auto;
  display: block;
  padding: 20px 30px 30px 30px;
  max-width: 480px;
  background: #ededed;
  border-radius: 8px;
`

export const Input = styled.input`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
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


// Welcome component
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
  background: #F5F5F5;
  margin-top: 10px;
  max-width: 900px;
`
export const WelcomeMovieRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

// Movie detail component
export const ActorList = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3vh;
  justify-content: start;
  
`
export const ActorListWrap = styled.div`
  margin-left: 2vw;
`
export const ActorName = styled.div`
  color: black;
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
`
export const MovieTitle = styled.h1`
  color: black;
  margin-top: 0;
  text-decoration: none;
`
export const MovieRating = styled.h3`
`
export const RatingButtonContainerDetail = styled(RatingButtonContainer)`
  margin-left: 18.5vw;
`
export const RatingMovieWrap = styled.div`
  margin-left: 18.5vw;
`
export const ShowSimilar = styled(MovieInfo)`
  color: black;
  margin-left: 2vw;
  text-decoration: none;
`
export const YourRating = styled.h3`
  margin-bottom: 2vh;
  margin-left: 18.5vw;
  margin-top: 0;
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
// export const YourRating = styled.h3`
//   margin-bottom: 2vh;
//   margin-left: 18.5vw;
//   margin-top: 0;
// `



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
  display: block;
  margin: 30px 0;
  height: 54px;
  width: 100%;
  background: #33cc77;
  border: 1px solid darken(#33cc77,0.1);
  border-top-color: transparent;
  border-radius: 3px;
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
`
export const MovieRatedRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2vh;
`
export const MovieTitleRated = styled.div`
  color: black;
  font-size: 16px;
  text-decoration: none;
`
export const RatingStars = styled.div`
  margin-left: auto;
`
export const UserName = styled(MovieTitleRated)`
  margin-bottom: 1vh;
`
export const UserNames = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2vh;
  margin-top: 6vh;
`
export const WrapperUserPage = styled.div`
`


// export const MovieWrapper = styled.div`
//   display:flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
// `
// export const MovieList = styled.a`
//   width: 25%;
//   position: relative;
//   text-decoration: none;
//   color: #fff;
//   box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
// `
// export const MovieListHover = styled.a`
// `


//SWIPER
export const NEXT = "HEJ";
export const PREV = "HEJDÅ";

export const AppContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const Item = styled.div`
  text-align: center;
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))";
    if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
  }};
`;

export const WrapperSwipe = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%; /* Decides how many cards on one row */
  flex-basis: 80%; /* Decides how many cards on one row */
  margin-right: 20px;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  padding: 10px;
  background-color: #f66f3e;
  border: 1px solid white;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  /* float: ${props => props.float}; */

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

//MOVIE CARD ON USERPAGE
export const MovieCard = styled.div`
background: rgb(248,255,238);
background: linear-gradient(90deg, rgba(248,255,238,0.542454481792717) 0%, rgba(255,141,111,0.7665441176470589) 100%);  border-radius: 20px;
  /* padding: 20px 0 0; */
  margin: 10px;
  height: 200px;
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
  /* margin-bottom: 2vh; */
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  /* height: 60px;
  line-height: 20px; */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
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


// Movie List
// export const MovieList = styled.section`
//   display:flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   margin: 25px;
// `

// .movie-list:hover .hover-details a{
//   display:block;
// }


// .movie-list .hover-details h1 {
//   margin-top: auto;
//   margin-bottom: 0;
// }
