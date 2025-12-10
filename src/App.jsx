import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Receiver from "./pages/Receiver";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Receiver />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
