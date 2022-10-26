import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');    // Whether dark mode is enabled or not
  // const [textMode, setTExtMode] = useState('dark');   // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setTExtMode('light');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      // setTExtMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
    }
  }

  const router = createBrowserRouter([
    {
      path: "/about",
      element: (
        <>
          <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
          <div className="container my-3">
          <About/>
          </div>
        </>
      )
    },
    {
      path: "/",
      element: (
        <>
          <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>,
          <TextForm showAlert={showAlert} heading='Enter the text below' mode={mode}/>
        </>
      )
    },
  ]);
  

      return (
      <>
      <RouterProvider router={router} />
      <div className="container my-3">
      <Alert alert={alert}/>
      </div>
    </>
  );
}

export default App;