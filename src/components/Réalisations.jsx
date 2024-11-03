import rea1 from "../assets/img/portfolio/fresh-food.jpg";
import rea2 from "../assets/img/portfolio/restaurant-japonais.jpg";
import rea3 from "../assets/img/portfolio/espace-bien-etre.jpg";

const Réalisation = () => {
  return (
    <div>
      <div className="title_rea text-center">
        {/*mettre la bar bleu, trouve comment faire */}
        <h1 className=" text-uppercase">Portfolio</h1>
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
      <div className="container text-center">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={rea1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Fresh food</h2>
                <p class="card-text">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <button type="button" class="btn btn-outline-primary">
                  Voir
                </button>
              </div>
              <div class="card-footer">
                <small class="text-muted">Site réalisé avec PHP et MySQL</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={rea2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Restaurant Akira</h2>
                <p class="card-text">Réalisation d'un site vitrine.</p>
                <button type="button" class="btn btn-outline-primary">
                  Voir
                </button>
              </div>
              <div class="card-footer">
                <small class="text-muted">Site réalisé avec WordPress</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={rea3} class="card-img-top" alt="espace_bien_être" />
              <div class="card-body">
                <h2 class="card-title">Espace bien-être</h2>
                <p class="card-text">
                  Réalisation d'un site vitrine pour un patricien de bien-être.
                </p>
                <button type="button" class="btn btn-outline-primary">
                  Voir
                </button>
              </div>
              <div class="card-footer">
                <small class="text-muted">Site réalisé en HTML/CSS</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Réalisation;
