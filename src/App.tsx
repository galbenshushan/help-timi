import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/UI/Navbar/Nav";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chart" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;
