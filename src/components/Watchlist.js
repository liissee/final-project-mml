import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MovieCards } from './MovieCards'
import { UserList } from './UserList'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import {
  Button, ButtonMore, ErrorMessage, WrapperWelcomeBox 
} from "./Styling"


// Tabs
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography >
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#faf5e4",
  },
  tabs: {
    backgroundColor: "#004445",
    color: "white",
    fontWeight: "700"
  },
  tabPanel: {
    lineHeight: 1
  }
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffcf3c',
    },
    secondary: {
      main: '#fe5426',
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: "#FFCF3C",
      }
    }
  }
})


// USER-PAGE
const url = 'https://final-movie-match.herokuapp.com/secrets'
// const url = "http://localhost:8080/secrets";

// Fetch data with a GET request to our MongoDB database for an individual user 
export const UserPage = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [moviesRated, setMoviesRated] = useState()
  const [movieStatus, setMovieStatus] = useState()
  const [chosenRating, setChosenRating] = useState("")
  const [page, setPage] = useState(1)
  const [chosenList, setChosenList] = useState("watch")

  const accessToken = useSelector((state) => state.users.accessToken)
  const userId = useSelector((state) => state.users.userId)


  // Logged in or not?
  useEffect(() => {
    setErrorMessage("");
    fetch(url, {
      method: "GET",
      headers: { Authorization: accessToken }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else if (!res.ok) {
          throw new Error("You need to sign in to view this page", JSON);
        }
      })
      .then(json => {
        setMessage(json.secret)
        setErrorMessage('');
      })
      .catch(err => {
        setErrorMessage(err.message);
      });
  }, [accessToken]);


  let query = ""
  if (chosenList === "watch") {
    query = `?watchStatus=${true}&page=${page}`
  }
  else if (!chosenRating && chosenList === "rating") {
    query = `?page=${page}`
  } else if (chosenRating) {
    query = `?rating=${chosenRating}&page=${page}`
  }

  // Movies with rating
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/movies${query}`)
      // fetch(`http://localhost:8080/users/${userId}/movies${query}`)
      .then(res => res.json())
      .then(json => {
        if (chosenList === "rating") {
          setMoviesRated(json)
        }
        console.log("ratedmovies:", json)
      })
  }, [chosenRating, page, chosenList])
  console.log(moviesRated)

  // Watchstatus
  useEffect(() => {
    if (!userId) return;
    fetch(`https://final-movie-match.herokuapp.com/users/${userId}/movies?watchStatus=${true}`)
      // fetch(`http://localhost:8080/users/${userId}/movies?watchStatus=${true}`)
      .then(res => res.json())
      .then(json => {
        setMovieStatus(json)
        console.log("watchstatus:", json)

      })
  }, [userId, page, chosenList])
  console.log(movieStatus)

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <WrapperWelcomeBox>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
              className={classes.tabs} indicatorColor="primary"
            >
              <Tab label="Watchlist" {...a11yProps(0)} onClick={(e) => setChosenList("watch")} />
              <Tab label="All rated" {...a11yProps(1)} onClick={(e) => setChosenList("rating")} />
              <Tab label="Other users" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.tabPanel}>
            {movieStatus && !movieStatus.message && (
              movieStatus.map((movie) => (
                <MovieCards key={movie.movieId} id={movie.movieId} />
              ))
            )}
            {movieStatus && movieStatus.message && (
              <ErrorMessage>`No movies in your watchlist yet`</ErrorMessage>
            )}
            <Button onClick={(e) => setPage(page + 1)}>Show more</Button>

          </TabPanel>
          <TabPanel className={classes.tabPanel} value={value} index={1}>
            <Button onClick={(e) => setChosenRating(1)}> 1 </Button>
            <Button onClick={(e) => setChosenRating(2)}> 2 </Button>
            <Button onClick={(e) => setChosenRating(3)}> 3 </Button>
            <Button onClick={(e) => setChosenRating(4)}> 4 </Button>
            <Button onClick={(e) => setChosenRating(5)}> 5 </Button>
            {moviesRated && !moviesRated.message && chosenList === "rating" && (
              moviesRated.map((movie) => (
                movie.rating && (
                  <MovieCards key={movie.movieId} id={movie.movieId} />
                ))
              ))}
            {moviesRated && moviesRated.message && (
              `${moviesRated.message} with this score`
            )}
            <ButtonMore onClick={(e) => setPage(page + 1)}>Show more</ButtonMore>

          </TabPanel>
          <TabPanel className={classes.tabPanel} value={value} index={2}>
            <UserList />
          </TabPanel>
        </div>
      </MuiThemeProvider>
    </WrapperWelcomeBox>
  )
};