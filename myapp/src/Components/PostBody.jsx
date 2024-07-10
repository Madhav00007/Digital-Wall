import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import logo from "../assets/empty logo.png"
import {PostInput} from "../Components/index";

function PostBody({click,setClick,postHeading}) {

  return (
    <div style={{backgroundColor:"#eaf6ff" , height:"100vh"}}>
    
        <div className="header-text out flex">
        <div className="heading">
        <h1>Your posts</h1>
        </div>
        <div className="picture-position flex-column">
        <img src={logo} height={240} />
        <div><h4>Nothing here yet</h4></div>
        <div><p>Create your first profile bt clicking on the '+' button above</p></div>
        </div>
        <div className="post-btn-position">
        <button onClick={()=>setClick(!click)}><p className='button-font flex button-params'><AiOutlinePlus className='icon-size'/> Create new post</p></button>
        </div>
        </div>  

        {
          click === true ?
          <div className=""><PostInput click= {click} setClick = {setClick} postHeading={postHeading}/></div> : 
          null
        }

    </div>
  )
}

export default PostBody