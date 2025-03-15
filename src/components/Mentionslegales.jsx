import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Mentionslegales = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="upper-case text-center text-uppercase mt-5">
          mentions légales
        </h1>
        <hr
          className="mb-5"
          style={{
            border: "2px solid",
            width: "15%",
            margin: "0 auto",
            color: "#0d6efd",
            opacity: "100",
          }}
        ></hr>
      </div>
      <div className="container mb-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="text-semibold accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <address>
                  <h6>
                    <i className="fa-solid fa-location-dot"></i> 40 Rue Laure
                    Diebold
                  </h6>
                  <h6> 69009 Lyon, France</h6>
                  <i className="fas fa-mobile-alt"></i>
                  <a
                    className="text-semibold"
                    href="tel:0620304050"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    06 20 30 40 50
                  </a>

                  <div className="text-semibold text-lowercase">
                    <i className="fa-solid fa-envelope"></i>
                    <Link
                      to="mailto:john.doe@gmail.com"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      john.doe@gmail.com
                    </Link>
                  </div>
                </address>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="text-semibold accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>Always Data</h3>
                <h6>
                  91 rue du Faubourg Saint Honoré <br />
                  75008 Paris
                </h6>
                <i
                  className="fa-solid fa-globe"
                  style={{ color: "#000000" }}
                ></i>
                <Link
                  className="text-semibold"
                  style={{ textDecoration: "none", color: "#0d6efd" }}
                  target="_blank"
                  to="https://www.alwaysdata.com/fr/"
                >
                  {" "}
                  www.alwaysdata.com
                </Link>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="text-semibold accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h2>Crédits</h2>
                <h6>Site développé par John Doe, étudiant du CEF.</h6>
                <h6>
                  Les images libres de droit sont issues du site{" "}
                  <a
                    target="blank"
                    style={{ textDecoration: "none", color: "#0d6efd" }}
                    href="https://pixabay.com/fr/"
                  >
                    Pixabay
                  </a>
                  .
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Mentionslegales;
