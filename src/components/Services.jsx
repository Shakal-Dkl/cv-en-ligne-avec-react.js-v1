import React from "react";
import Banner from "../assets/img/banner.jpg";
import Header from "./Header";
import Footer from "./Footer";
import "../Custom.css";



const Services = () => {
  return (
    <div className="bg-light">
      <Header />
      <div className="banner" id="banniere">
        <img className="img-fluid" src={Banner} alt="img_banner" />
      </div>
      <div className="container mb-5">
        <div className="text-center mt-5">
          <h1>MON OFFRE DE SERVICES</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <hr
            className=""
            style={{
              border: "2px solid",
              width: "25%",
              margin: "0 auto",
              color: "#0d6efd",
              opacity: "100",
            }}
          ></hr>
        </div>
      </div>
      <div className="container text-center ">
        <div className="row ">
          <div className="col-md-4 mb-5 icon-hover">
            <div className="shadow-sm rounded-4 bg-white p-5">
              <i
                className="fa-solid fa-desktop fa-2xl pb-4 "
                style={{ color: "#0d6efd" }}
              ></i>
              <h2 className="text-nowrap">UX DESIGN</h2>
              <p>
                L'<strong>UX Design</strong> est une methode de conception
                centrée sur l'utilisateur. Son but est d'offrir une expérience
                de navigation optimale à l'internaute.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5 icon-hover">
            <div className="shadow-sm rounded-4 bg-white p-5">
              <i
                className="fa-solid fa-file-code fa-2xl pb-4"
                style={{ color: "#0d6efd" }}
              ></i>
              <h2 className="text-nowrap">DÉVELOPPEMENT WEB</h2>
              <p>
                Le<strong> développement de sites web</strong> repose sur
                l'utilisation des langages HTML, CSS, JavaScript et PHP.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-5 icon-hover">
            <div className="shadow-sm rounded-4 bg-white p-5">
              <i
                className="fa-solid fa-magnifying-glass-dollar fa-2xl pb-4"
                style={{ color: "#0d6efd" }}
              ></i>
              <h2 className="">RÉFÉRENCEMENT</h2>
              <p className="">
                Le <strong>référencement naturel d'un site</strong>, aussi
                appelé SEO, consiste à mettre des teccniques en oeuvre pour
                améliorer sa position dans les résultats des moteurs de
                recherche.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
