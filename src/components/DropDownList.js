import React from "react"
import { useDispatch } from "react-redux"
import { movies } from "../reducers/movies"
import "components/dropdownlist.css"


export const DropDownList = () => {
  const dispatch = useDispatch()


  return (
    <div className="category-dropdown">
      <label>
        <select className="select-css"
          onChange={(event) => {
            dispatch(movies.actions.setSearchTerm(""))
            dispatch(movies.actions.setCategory(event.target.value))
          }}
        >
          <option value="popular">Most popular movies</option>
          <option value="top_rated">Top rated movies</option>
          <option value="upcoming">Upcoming movies</option>
          <option value="now_playing">Now playing movies</option>
        </select>
      </label>
    </div >
  )
}