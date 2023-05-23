import "./App.css";
// import { BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>E-Commerce</h1>
      <Router>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/faq"/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
