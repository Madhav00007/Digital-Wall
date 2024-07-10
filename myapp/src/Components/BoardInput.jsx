import {React , useState} from 'react'
import '../ComponentStyle/boardInput.css'
import '../ComponentStyle/button.css'
import {RxCross2} from "react-icons/rx"
import boardDB from '../data/boardData';

function BoardInput({click ,setClick , board , setBoard}) {

const colours = ["#bdb2ff" , "#90e0ef" , "#fcbf49" , "#ffc8dd"];
const [newColor , setColor] = useState("#bdb2ff");
const [newBoard , setNewBoard] = useState({});

function handleSubmit(){
    setBoard(board => [...board, newBoard]);
    // console.log(board);
    // console.log(newBoard);
    setClick(!click); 
}

function handleChange(e){
// console.log(e.target.name ,e.target.value);
    setNewBoard({
    id : board.length +1,
    [e.target.name ]: e.target.value,
    theme : newColor})
}
    // console.log(newBoard);

  return (
    <>
    <div className="popup">
    <div className="formbody">
        <div className="heading-box">
            <div className="input-heading flex heading-font">
            Add a name for your board
            </div>
            <div className="cross-icon">
            <button className='undu-button' onClick={()=>setClick(!click)}><RxCross2 className='icon'/></button>
            </div>
        </div>
        <div className="input-box">
            <input className='style-inputField' type="text" placeholder='Enter board name here' name='heading' onChange={handleChange} autoComplete='off' maxLength={40}/>
        </div>
        <div className="heading-box-2 align-left">
            <div className="input-heading  flex heading-font">
            <p>Select post colour</p>
            </div>
        </div>
        <div className="input-heading   flex align-left"> <p>Here are some templates to help you get started</p></div>
        <div className="colour-select">
        <div className="color-pannel flex">
            {
                colours.map(color=>
                    <button key = {color}className="circle" style={color === newColor ? { border : `1px solid black` , backgroundColor : color} :{ backgroundColor:color}} onClick={()=>setColor(color)}></button>   
                )
            }
        </div>
        </div>
        <div className="position-button flex">
        <button className='create-button button-params' onClick={handleSubmit}> Create board</button>
        {/* <button onClick={()=>console.log(boardDB)}>Data</button> */}
        </div>
    </div>
    </div>
    </>
  )
}

export default BoardInput;