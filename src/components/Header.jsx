import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../app.css";
import Accueil from "./Accueil";
import Services from "./Services";
import Realisations from "./Realisations";
import Blog from "./Blog";
import Contact from "./Contact";

const Header = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-dark navbar-expand-lg text-uppercase "
          style={{ backgroundColor: "#1e1e1e" }}
        >
          <div className="container-fluid ">
            <Link className="navbar-brand text-white" to="/Accueil">
              John Doe
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent "
              aria-expanded="false"
              aria-label="Toggle navigation "
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/Accueil"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Realisations">
                    Realisations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Me contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/Accueil" element={<Accueil />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Realisations" element={<Realisations />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </header>
    </div>
  );
};

export default Header;
