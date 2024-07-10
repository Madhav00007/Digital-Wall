import React, { useState } from 'react'
import {BiEditAlt} from "react-icons/bi"
import {RiDeleteBinLine} from "react-icons/ri";
import "../ComponentStyle/tools.css";

function Tools({id,board,setBoard,edit,setEdit}) {

  function editBoard(id){
    setEdit(!edit)
  }

  function deleteBoard(id){
    // console.log("delete called !");
    // console.log(id);
    setBoard((board)=>board.filter((data)=>data.id !==id));
    console.log(board);
  }

  return (
    <>
    <div className="tools-position">
        <div className="tools-frame">
            <div className="box">
                <button className='tool-buttons'> <span className='tool-font flex ' onClick={editBoard}><BiEditAlt className='tool-icon'/> Edit</span></button>
            </div>
            <div className="box">
                <button className='tool-buttons' onClick={()=>deleteBoard(id)}><span className='tool-font flex '><RiDeleteBinLine className='tool-icon'/>Delete</span></button>
            </div>
        </div>
        </div>
    </>
  )
}

export default Tools