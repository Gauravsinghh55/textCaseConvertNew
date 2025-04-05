import React, { useState } from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  const [mode,setMode]=useState("light")
  const [text,setText]=useState("dark")
  const togglebutton=()=>{
    if(mode==='dark')
      {
        setMode('light')
        setText('Dark')
        document.body.style.backgroundColor='white'
      }
    else{

      setMode('dark')
      setText('Light')
      document.body.style.backgroundColor='black'
    }
   


  }
  return (  
    <>
      <Navbar mode={mode} heading="Text Case Converter" toggle={togglebutton} text={text}/>
      <div className='container'>
        <TextForm title="Enter Your Text Below" mode={mode}/>
      </div>
      <div className="container">
        <Footer co="reserve" mode={mode} />
      </div>
    </>
  );
}
export default App;
