import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkup from "./pages/Checkup";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkup" element={<Checkup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
