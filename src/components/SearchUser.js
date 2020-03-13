import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchResult } from "../reducers/users";
import { FormSearch } from "./Styling";
import { Icon, InputGroup } from "@blueprintjs/core";
import { useHistory } from "react-router-dom";

export const SearchUser = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory()


  const handleSubmit = event => {
    event.preventDefault();
    if (userName.length > 0) {
      dispatch(searchResult(userName));
      setUserName("")
      history.push(`/`)
    }
  };

  return (
    <div>
      <FormSearch onSubmit={handleSubmit}>
        <InputGroup
          value={userName}
          onChange={event => setUserName(event.target.value)}
          disabled={false}
          large={true}
          placeholder="Search user..."
          rightElement={<Icon icon="icon-arrow" />}
          leftIcon={<Icon icon="search" />}
          small={false}
          type="search"
        />
      </FormSearch>
    </div>
  );
};









// import React, { useState, useEffect } from 'react'
// import { SearchContainer, FormSearch } from "./Styling";
// import { Icon, InputGroup } from "@blueprintjs/core";

// // Import what we need to use

// const API_KEY = process.env.REACT_APP_MOVIE_API_KEY


// export const Searchbar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState([]);


//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=harry&page=1&include_adult=false`)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log("array", json)
//         setResults(json.results)
//         console.log("result:", results)
//       })
//   }, [searchTerm])


//   const handleSubmit = event => {
//     event.preventDefault();
//     if (searchTerm.length > 0) {
//       setSearchTerm("");
//       //("") set to empty searchfield
//     }
//   };

//   return (
//     <SearchContainer>
//       <FormSearch onSubmit={handleSubmit}>
//         <InputGroup
//           value={searchTerm}
//           onChange={event => setSearchTerm(event.target.value)}
//           disabled={false}
//           large={true}
//           placeholder="Search movie"
//           rightElement={<Icon icon="icon-arrow" />}
//           leftIcon={<Icon icon="search" />}
//           small={false}
//           type="search"
//         />
//       </FormSearch>

//       <ul>
//         {results.map(item => (     ///Why is this mapping not working?
//           <li>{item.title}</li>
//         ))}
//       </ul>
//     </SearchContainer>
//   );
// }