import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/john-doe-about.jpg";
import "./Accueil.css";
import Header from "./Header";
import Footer from "./Footer";


const Accueil = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="bgimage">
          <div className="container text-white text-center ">
            <h1 className="fontsize" style={{ fontSize: "4.5rem" }}>
              Bonjour, je suis John Doe
            </h1>
            <h2>Développeur web full stack</h2>
            {/*Faire le bouton avec le CSS trop moche en bootstrap */}
            <Link className="btn btn-primary" to="#" role="button">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
      <section className=" m-5">
        <div className="container shadow  rounded-3 p-1 bg-white ">
          <div className="row m-5 ">
            <div className="col-md-6 mb-5">
              <h2 className="pb-2">A propos</h2>
              <hr
                className=""
                style={{
                  border: "1px solid",
                  width: "100%",
                  margin: "0 auto",
                  color: "#0d6efd",
                  opacity: "100",
                }}
              ></hr>
              <p className="pt-5">
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web </strong> 
                au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                solides pour travailler dans le domaine du{" "}
                <strong> développement web</strong>.
              </p>
              <p>
                Basé à lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de
                <strong> développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je recherche les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src={img1} alt="img John Doe" />
              <h2>Mes compétences</h2>
              <div className="Htmltbar">
                <p className="m-1">HTML 90%</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    aria-label="Danger example"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="Cssbar">
                <p className="m-1">CSS3 80%</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    aria-label="Info example"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="javascriptbar">
                <p className="m-1">JAVASCRIPT 70%</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    aria-label="Warning example"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="phpbar">
                <p className="m-1">PHP 60%</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    aria-label="Success example"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="reactbar">
                <p className="m-1">REACT 50%</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-label="Success example"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    
    </div>
  );
};

export default Accueil;
