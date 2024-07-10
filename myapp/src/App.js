import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Dashboard,Posts,Board} from '../src/Components/index';
import { useState } from 'react';

function App() {

  const [postheading,setHeading] = useState("");

  return (
  <div className="App">
        <Routes>
          <Route path = '/' element = {<Dashboard postheading = {postheading} setHeading = {setHeading}/>}/>
          <Route path = ':/dashboard' element = {<Posts postheading = {postheading} />}/>
        </Routes>
    </div>
  );
}

export default App;
