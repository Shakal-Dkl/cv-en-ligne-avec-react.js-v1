import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./components/Accueil";
import Services from "./components/Services";
import Réalisations from "./components/Réalisations";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <section>
        <header>
          <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="top">
                John Doe
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/Accueil"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Services">
                      Services
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Réalisations">
                      Realisations
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" To="/Blog">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Contact">
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
    </div>
  );
};

export default App;
