import React, { useState } from 'react'
import logo from "../assets/toddle-logo-mini.png";
import '../ComponentStyle/header.css'
import {GrPrevious} from "react-icons/gr"
import{CiSearch} from 'react-icons/ci'
import{FaGripLinesVertical} from 'react-icons/fa'
import {BsBookmark} from 'react-icons/bs';

import { HashLink } from 'react-router-hash-link';

function PostHeader({postheading}){

  return (
    <>
    <div className='navbar-body out'>
        <div className="navbar-inner adjust-length out space">
          <div className="left-content combine">
          <div className="reverse-btn">
                <HashLink to={"/"}>
                <GrPrevious/></HashLink>
          </div>

                <div className="left-content out"><img src={logo} height={55}/>
                </div>

                <div className="heading out" style={{color:"black" , fontWeight:"bold"}}><h3>{postheading}</h3></div>
          </div>
          <div className="right-content combine space in">
            <div className="search-icon"><CiSearch/></div>
            <div className="vertical-icon">
              <FaGripLinesVertical/>
            </div>
            <div className="bookmark-icon"><BsBookmark/></div>

          </div>   
            </div>
    </div>
    </>
  )
}

export default PostHeader;