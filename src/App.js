import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./modules/authentication/login/components";
import Register from "./modules/authentication/register/container";
import Profile from "./modules/profile/container";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Register />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
