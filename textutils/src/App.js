import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="textUtils"/>
      <div className="container my-3">
      <TextForm heading="Enter the text below to analyse"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;