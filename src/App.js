import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./componenets/NavBar";
// import Project from "./componenets/Project";
// import Banner from "./componenets/Banner";
// import Skills from "./componenets/Skills";
// import Contact from "./componenets/Contact";
// import Footer from "./componenets/Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./componenets/Dashboard";
import { Home } from "./componenets/Home";

function App() {
  return (
    <>
     
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
