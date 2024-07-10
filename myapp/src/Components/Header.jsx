import React, { useState } from 'react'
import {SearchBar,BoardInput} from './index'
import '../ComponentStyle/header.css'
import '../ComponentStyle/button.css'
import {AiOutlinePlus} from "react-icons/ai"
import logo from "../assets/toddle-logo.png"; 

function Header({board,setBoard}) {

  const [click,setClick] = useState(0);
  // const [board , setBoard] = useState(boardDB);
  
  return (
    <>
    <div className='navbar-body flex'>
        <div className="navbar-inner flex">
                <div className="left-content"><img src={logo} height={35} /></div>
                <div className="right-content flex">
                <SearchBar/>
                <button onClick={()=>{setClick(!click)}}><p className='button-font flex button-params'><AiOutlinePlus className='icon-size'/> Create new board</p></button>
                </div>
            </div>
    </div>
    <div className="header-text flex">
        <div className="heading">
        <h1>My boards</h1>
        </div>
        {
          click ? <BoardInput click = {click} setClick = {setClick} board = {board} setBoard = {setBoard} />: null
        }
    </div>
    </>
  )
}

export default Header;