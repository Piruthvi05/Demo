import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Useeffect from "./Pages/Useeffect";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/useeffect" element={<Useeffect/>}/>
      </Routes>
    </Router>
  )
}

export default App;