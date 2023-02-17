import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Ticket from "./pages/Ticket/ticket";
import Bus from "./pages/busDetail/bus";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="bus/:id" element={<Bus />}></Route>
          <Route path="ticket/:id" element={<Ticket />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
