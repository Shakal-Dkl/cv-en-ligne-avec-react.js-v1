import React from "react";
import "./Accueil.css";
import background from "../assets/img/contact-bg.jpg";
import Header from "./Header";
import Footer from "./Footer";




const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("Formulaire soumis !");
    // Ajoutez ici la logique pour traiter les données du formulaire
  };




  return (
    <div className="Bg_Contact" style={{ position: "relative" }}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${background})`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 105, 255, 0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>
      <Header />
      <div className="container py-5">
        <div className="rounded-3 bg-white pt-5">
          <div className="text-center">
            <h2 className="text-uppercase">ME CONTACTER</h2>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
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
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 mb-5">
                <h3>Formulaire de contact</h3>
                <hr
                  style={{
                    border: "1px solid",
                    width: "100%",
                    margin: "0 auto",
                    color: "#0d6efd",
                    opacity: "100",
                  }}
                ></hr>
                <form id="formulaire" className="container mt-5" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Votre nom" required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Votre adresse email" required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Votre numéro de téléphone" required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Sujet" required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Votre message" required
                      rows="7"
                    ></textarea>
                    <div className="btn justify-content-center">
                      <button
                        className="btn"
                        style={{ background: "#0d6efd" }}
                        type="submit"
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-lg-6 mb-5">
                <h3>Mes coordonnées</h3>
                <hr
                  className="mb-5"
                  style={{
                    border: "1px solid",
                    width: "100%",
                    margin: "0 auto",
                    color: "#0d6efd",
                    opacity: "100",
                  }}
                ></hr>
                <div>
                  <h6>
                    <i className="fas fa-map-marker"></i> 40 Rue Laure Diebold,
                    69009 Lyon, France
                  </h6>
                  <h6>
                    <i className="fas fa-mobile-alt"></i> 06 20 30 40 50
                  </h6>
                </div>
                <div className="container my-4">
                  <iframe
                    title="Google Map"
                    className=""
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619974!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1732003515851!5m2!1sfr!2sfr"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
