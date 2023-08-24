import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./userContext";

function App() {
  return (
    <div className="flex justify-center p-6">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
