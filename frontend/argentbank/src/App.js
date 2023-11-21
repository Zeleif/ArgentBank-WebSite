import React from "react";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";


function App() {
  return (
        
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}
export default App