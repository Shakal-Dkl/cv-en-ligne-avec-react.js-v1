import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Mentionslegales from "./Mentionslegales";
import Réalisations from "./Réalisations";

const Footer = () => {
  return (
    <div>
      <footer>
        <Routes>
          <Route path="/Mentionslegales" element={<Mentionslegales />}></Route>
        </Routes>
        <section className=" " style={{ backgroundColor: "#EEE" }}>
          <div className="container pt-5">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-2 ">
                <h4>John Doe</h4>
                <h6>40 rue Laure Sieblod</h6>
                <h6>69009 Lyon, France</h6>
                <h6>Téléphone : 06 20 30 40 50</h6>
                <div className="link d-flex justify-content-evenly m-4">
                  <Link
                    to="https://github.com/"
                    className="fa-brands fa-github fa-2xl"
                    style={{ color: "#444444" }}
                  ></Link>
                  <Link
                    to="https://github.com/"
                    className="fa-brands fa-github fa-2xl"
                    style={{ color: "#444444" }}
                  ></Link>
                  <Link
                    to="https://github.com/"
                    className="fa-brands fa-github fa-2xl"
                    style={{ color: "#444444" }}
                  ></Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <h4>Liens utiles</h4>
                <ul className="list-unstyled">
                  <li className="">
                    <Link to="/Accueil" style={{ color: "#0d6efd" }}>
                      Accueil
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/A propos">A propos</Link>
                  </li>
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Me contacter</Link>
                  </li>
                  <li>
                    <Link to="/Mentionslegales">Mentions légales</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-2 ">
                <h4>Mes dernieres réalisations</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/Réalisations">Fresh food</Link>
                  </li>
                  <li>
                    <Link to="/Réalisations">Restaurant Akira</Link>
                  </li>
                  <li>
                    <Link to="/Réalisations">Espace bien-être</Link>
                  </li>
                </ul>
              </div>
              <article className="col-md-6 col-lg-2">
                <h4>Mes derniers articles</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/Blog">Coder son site en HTML/CSS</Link>
                  </li>
                  <li>
                    <Link to="/Blog">Vendre ses produits sur le web</Link>
                  </li>
                  <li>
                    <Link to="/Blog">Se positionner sur Google</Link>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <div className="text-light" style={{ backgroundColor: "#1e1e1e" }}>
          <p className="text-center">Designed by John Doe</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
