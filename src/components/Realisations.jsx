import React from "react";
import rea1 from "../assets/img/portfolio/fresh-food.jpg";
import rea2 from "../assets/img/portfolio/restaurant-japonais.jpg";
import rea3 from "../assets/img/portfolio/espace-bien-etre.jpg";

const Réalisation = () => {
  return (
    <div>
      <div className="title_rea text-center mb-5 mt-5">
        {/*mettre la bar bleu, trouve comment faire */}
        <h1 className="text-semibold text-uppercase">Portfolio</h1>
        <p>Voici quelques-une de mes réalisations.</p>
        <hr
          className=""
          style={{
            border: "2px solid",
            width: "15%",
            margin: "0 auto",
            color: "#0d6efd",
            opacity: "100",
          }}
        ></hr>
      </div>
      <div className="container text-center mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={rea1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title text-semibold">Fresh food</h2>
                <p className="card-text">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <button type="button" className="btn btn-outline-primary">
                  Voir
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec PHP et MySQL
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={rea2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="text-semibold card-title">Restaurant Akira</h2>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <button type="button" className="btn btn-outline-primary">
                  Voir
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec WordPress
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={rea3} className="card-img-top" alt="espace_bien_être" />
              <div className="card-body">
                <h2 className="text-semibold card-title">Espace bien-être</h2>
                <p className="card-text">
                  Réalisation d'un site vitrine pour un patricien de bien-être.
                </p>
                <button type="button" className="btn btn-outline-primary">
                  Voir
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Site réalisé en HTML/CSS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Réalisation;
