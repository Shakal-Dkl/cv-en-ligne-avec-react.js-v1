import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./app.css";
import Accueil from "./components/Accueil";
import Services from "./components/Services";
import Réalisations from "./components/Réalisations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App bg-light">
      <section>
        <header>
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div className="container-fluid ">
              <Link className="navbar-brand" href="top">
                John Doe
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <Link
                      className="nav-link "
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
                    <Link className="nav-link" to="/Réalisations">
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
            <Route path="/Réalisations" element={<Réalisations />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </header>
      </section>
      <Footer />
    </div>
  );
};

export default App;
