import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import New from "./component/New";

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/New" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
