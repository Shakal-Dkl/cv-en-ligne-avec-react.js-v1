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
            <Link className="navbar-brand text-white" to="/accueil">
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
                    to="/accueil"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/realisations">
                    Realisations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Me contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/accueil" element={<Accueil />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/realisations" element={<Realisations />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </header>
    </div>
  );
};

export default Header;
