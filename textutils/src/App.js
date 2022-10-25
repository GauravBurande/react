import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState('light');    // Whether dark mode is enabled or not
  // const [textMode, setTExtMode] = useState('dark');   // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setTExtMode('light');
      document.body.style.backgroundColor = '#212529';
    } else {
      setMode('light');
      // setTExtMode('dark');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter the text below to analyse" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;