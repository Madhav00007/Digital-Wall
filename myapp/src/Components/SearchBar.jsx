import React from 'react'
import {CiSearch} from "react-icons/ci"
import '../ComponentStyle/searchbox.css' 

function SearchBar() {
  return (
    <>
    <div className="search-box-body flex">
    <CiSearch className='search-icon'/>
      <form>
        <input  className = "search-field font-size" type="text" placeholder = "Search...."/>
      </form>
    </div>
    </>
  )
}

export default SearchBar;