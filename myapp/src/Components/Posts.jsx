import React from 'react'
import {PostHeader,PostBody} from "../Components/index";
import { useState } from 'react';

function Posts({postheading}) {
 
  const [click,setClick] = useState(0);

 
  return (
    <div>
        <PostHeader postheading={postheading}/>
        <PostBody click={click} setClick={setClick} postheading={postheading}/>
    </div>
  )
}

export default Posts;