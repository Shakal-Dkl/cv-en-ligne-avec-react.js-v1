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
          <div className="container pt-5 ">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-2 ">
                <h5>John Doe</h5>
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
                <h5>Liens utiles</h5>
                <ul className="list-unstyled">
                  <li className="">
                    <Link to="/Accueil">Accueil</Link>
                  </li>
                  <li>
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
                <h5>Mes dernieres réalisations</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/Realisations">Fresh food</Link>
                  </li>
                  <li>
                    <Link to="/Realisations">Restaurant Akira</Link>
                  </li>
                  <li>
                    <Link to="/Realisations">Espace bien-être</Link>
                  </li>
                </ul>
              </div>
              <article className="col-md-6 col-lg-2">
                <h5>Mes derniers articles</h5>
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
        <div className="text-light " style={{ backgroundColor: "#1e1e1e" }}>
          <p className="text-center p-3">Designed by John Doe</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
