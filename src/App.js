import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Login />
        <Routes>
          <Route path="/login" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
