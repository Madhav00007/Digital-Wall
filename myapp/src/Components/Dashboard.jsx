
import {React, useState } from 'react';
import {Header , Body } from "../Components/index";
import boardDB from '../data/boardData'

function Dashboard({postheading , setHeading}) {   
const [board , setBoard] = useState(boardDB);

  return (
    <div>
         <Header board = {board} setBoard = {setBoard}/>
         <Body board = {board} setBoard = {setBoard} postheading = {postheading} setHeading = {setHeading}/>
    </div>
  )
}

export default Dashboard;