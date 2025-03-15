import React from "react";
import {Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import "./app.css";
import Services from "./components/Services";
import Realisations from "./components/Realisations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Mentionslegales from "./components/Mentionslegales";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App bg-light">
      <Routes>
        <Route path="*" element={<Accueil />} />
        <Route path="/Accueil/*" element={<Accueil />} />
        <Route path="/Services/*" element={<Services/>} />
        <Route path="/Realisations/*" element={<Realisations />} />
        <Route path="/Blog/*" element={<Blog/>} />
        <Route path="/Contact/*" element={<Contact/>} />
        <Route path="/Mentionslegales/*" element={<Mentionslegales />} />
        <Route path="/Profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
