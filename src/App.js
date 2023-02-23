import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Ticket from "./pages/Ticket/ticket";
import Bus from "./pages/busDetail/bus";
import Register from "./pages/signUp/signUp";
import Login from "./pages/signIn/signIn";

function App() {
  const [forChangeState, SetForChangeState] = useState(1);
  //alert(forChangeState);
  return (
    <div className="App">
      <Router>
        <Header
          SetForChangeState={SetForChangeState}
          forChangeState={forChangeState}
        />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="bus/:id" element={<Bus />}></Route>
          <Route path="ticket/:id" element={<Ticket />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route
            path="/login"
            element={
              <Login
                SetForChangeState={SetForChangeState}
                forChangeState={forChangeState}
              />
            }
          ></Route>

          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
