import {React } from 'react'
import {RxCross2} from "react-icons/rx"
import '../ComponentStyle/boardInput.css';
import { useState } from "react";

function PostInput({click,setClick,postHeading}) {

  const [subject, setSubject] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("");
  const[currPost,setCurrpost] = useState({});
  const[postDB , setPostDb] = useState([]);

  function handleSubmit(){
    setPostDb(postDB => [{...postDB , currPost}]);
    // console.log(postDB);
    console.log(currPost);
    setClick(!click);
  }

  function handleChange(e){

    console.log(e.target.name ,e.target.value);
    console.log(e.target.name , e.target.value);
    console.log(selectedFile);
        // setNewBoard({
        // id : board.length +1,
        // [e.target.name ]: e.target.value,
        // theme : newColor})

        setCurrpost({
          id:postHeading ,
          posts : [{
            pic: selectedFile,
            content: content,
          }]
        })
  }

  return (
    <>
    <div className="popup">
    <div className="formbody inc-height shrink-width">
        <div className="wrapper-text flex-column out">
        <div className="heading-box out" style={{width:"436px" ,height:"fit-content", display:"flex" , justifyContent:"space-between"}}>
            <div className="input-heading flex heading-font out reducer-heading">
            Create a post
            </div>
            <div className="cross-icon out">
            <button onClick={()=>{setClick(!click); console.log(click)}}className='undu-button'><RxCross2 className='icon'/></button>
            </div>
        </div>
        <div className="lift-text flex bottom-margin">  <p>Write something for your post</p></div>
        </div>
        <div className="input-box flex-column">
            <label className='out subject '><b>Subject</b> </label>
            <input className='style-inputField lift-text' type="text" autoComplete='off' maxLength={40} onChange={handleChange} name='subject'/>

            <input type="file" placeholder={'Add your image'} onChange={(e)=> setSelectedFile(e.target.files[0])} />
        </div>
        <div style={{background: 'rgba(0,0,0,0.2)',height: '1px',}} className='top-margin bottom-margin'/>
        <div className="input-box flex-column">
            <label className='out subject '><b>What's on your mind?</b> </label>
            <input className='style-inputField lift-text' type="text" autoComplete='off' maxLength={40} onChange={handleChange} name='content'/>
        </div>
        <div className="container flex out place-end">
        <button onClick={handleSubmit} className='red-width out'><p className='button-font flex button-params right-position'> Publish</p></button>
        </div>
        </div>
        </div>        
    </>
  )
}

export default PostInput;