import React from "react"
import { useDispatch, useSelector } from "react-redux";
import "components/dropdownlist.css"
import { movies } from "../reducers/movies"

export const DropDownList = () => {
  const dispatch = useDispatch()

  return (
    <div className="category-dropdown">
      <label>
        <h3>Select category</h3>
        <select className="select-css"
          onChange={(event) => {
            dispatch(movies.actions.setSearchTerm(""))
            dispatch(movies.actions.setCategory(event.target.value))
          }}
        >
          <option value="top_rated">Top rated movies</option>
          <option value="popular">Most popular movies</option>
          <option value="upcoming">Upcoming movies</option>
          <option value="now_playing">Now playing movies</option>
        </select>
      </label>
    </div >
  )
}