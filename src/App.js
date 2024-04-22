import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import './App.css';
import './Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
       
       {/* <NavScrollExample /> */}
         <Routes>
       <Route path="/" element={<Home />} /> 
       {/* <Route path="*" element={<ErrorPage/>}/> */}
    
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;



    
     
      
 
    
   