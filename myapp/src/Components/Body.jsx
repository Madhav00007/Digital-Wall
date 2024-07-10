import React, { useState} from 'react'
import {Board , BoardInput,Posts,Tools} from "../Components/index"
import  boardDB  from '../data/boardData'
import { Route} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import '../ComponentStyle/body.css'
function Body({board,setBoard,postheading,setHeading}) {

  const [crud ,setCrud] = useState(0);

  return (
    <>
    <div className="home-body">
    {/* <button onClick={()=>setBoard([])}>delete</button> */}
    {/* <button onClick={()=>console.log(board)}>data</button> */}
      <div className="inner-display">
      {
        board.map((data) => (<Board theme = {data.theme} heading = {data.heading} id={data.id} board={board} setBoard={setBoard} postheading={postheading} setHeading={setHeading}/>))
      }
      </div>
    </div>
    </>
  )
}

export default Body;