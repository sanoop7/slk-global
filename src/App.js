import "./App.css";
import Landing from "./pages/home/Landing";
import Header from "./components/header/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import WhatWeDo from "./pages/whatWeDo/whatWeDo";
// import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Define your routes here */}
          <Route exact path="/" element={<Landing />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/contact" component={Contact} /> */}
          {/* You can add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
