import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import Chat from "./pages/Chat";
import ExamplePage from "./pages/ExamplePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/features" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
