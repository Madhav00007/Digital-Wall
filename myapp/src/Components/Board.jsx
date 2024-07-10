import React, { useState } from 'react'
import "../ComponentStyle/board.css"
import {RxDotsVertical} from "react-icons/rx"
import Tools from './Tools';
import { HashLink } from 'react-router-hash-link';

function Board({theme,heading,id,board,setBoard,postheading,setHeading}) {
const [update,setUpdate] =  useState(0);
const [edit,setEdit] = useState(0);

function handleInput(e){
  // console.log(e.target.value);
  const newState = board.map(data=>{
    if(data.id === id){
      return {...data,heading:e.target.value};
    }
    return data; 
  });
  setBoard(newState);
}

  return (
    <>
    <div className="board-body flex">
        <div className="board-theme" style={{background : theme}}></div>
        <div className="board-content flex">
          {
            edit ?<input className='board-text invisible-input '  type="text" placeholder={heading} name='heading' autoComplete='off' onChange={handleInput} maxLength={40}/>:<HashLink to = {":/dashboard"} style={{textDecoration:"none" , color:'black'}}><p className='board-text block' onClick={()=>setHeading(heading)} >{heading}</p></HashLink> 
          }
        </div>
        <div className="board-icon flex">
            <button className='undu-button' onClick={()=>setUpdate(!update)}>
            <RxDotsVertical className='dot-icon'/>
            </button>
        </div>
        {
         update ? <Tools id = {id} board = {board} setBoard={setBoard} edit={edit} setEdit ={setEdit}/>:null
        }
    </div>
    </>
  )
}

export default Board