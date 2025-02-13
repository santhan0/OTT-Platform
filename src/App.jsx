import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css';
import Films from "./components/Films";
import Anm from "./components/Anm";
import Delete from "./components/Delete";
import Sign from "./components/Sign";
import Signup from "./components/Signup";
import Series from "./components/Series";
import Mylist from "./components/Mylist";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/films' element={<Films/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/list" element={<Mylist/>}/>
        <Route path='/create' element={<Anm/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Sign/>} />
    //       <Route path='/signup' element={<Signup />} />

    //       <Route path="/nav" element={<>
    //         <Navbar />
    //         <Routes>
    //           <Route path='/' element={<Home />} />
    //         </Routes>
    //       </>} />
    //     </Routes>
    // </BrowserRouter>
  );
}

export default App;
