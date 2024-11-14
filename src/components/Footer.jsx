import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Mentionslegales from "./Mentionslegales";
import Realisations from "./Realisations";

const Footer = () => {
  return (
    <div>
      <footer>
        <Routes>
          <Route path="/Mentionslegales" element={<Mentionslegales />}></Route>
        </Routes>
        <section className=" " style={{ backgroundColor: "#EEE" }}>
          <div className="container ">
            <div className="row justify-content-evenly p-5">
              <div className="col-md-6 col-lg-2 ">
                <h5>John Doe</h5>
                <h6>40 rue Laure Sieblod</h6>
                <h6>69009 Lyon, France</h6>
                <h6>Téléphone : 06 20 30 40 50</h6>
                <div className="d-flex justify-content-center">
                  <Link
                    target="blank"
                    to="https://github.com/"
                    className="fa-brands fa-github fa-2xl m-3"
                    style={{ color: "#444444" }}
                  ></Link>
                  <Link
                    target="blank"
                    to="https://twitter.com/"
                    className="fa-brands fa-square-twitter fa-2xl m-3"
                    style={{ color: "#444444" }}
                  ></Link>
                  <Link
                    target="blank"
                    to="https://linkedin.com/"
                    className="fa-brands fa-linkedin fa-2xl m-3"
                    style={{ color: "#444444" }}
                  ></Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <h5>Liens utiles</h5>
                <ul className="list-unstyled">
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Accueil">Accueil</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/A propos">A propos</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Services">Services</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Contact">Me contacter</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Mentionslegales">Mentions légales</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-2 ">
                <h5>Mes dernieres réalisations</h5>
                <ul className="list-unstyled">
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Realisations">Fresh food</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Realisations">Restaurant Akira</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Realisations">Espace bien-être</Link>
                  </li>
                </ul>
              </div>
              <article className="col-md-6 col-lg-2">
                <h5>Mes derniers articles</h5>
                <ul className="list-unstyled">
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Blog">Coder son site en HTML/CSS</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Blog">Vendre ses produits sur le web</Link>
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "#0d6efd" }}
                    ></i>{" "}
                    <Link to="/Blog">Se positionner sur Google</Link>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <div className="text-light " style={{ backgroundColor: "#1e1e1e" }}>
          <p className="text-center p-3">Designed by John Doe</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
