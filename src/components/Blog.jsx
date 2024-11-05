import Banner from "../assets/img/banner.jpg";
import blog1 from "../assets/img/blog/coder.jpg";
import blog2 from "../assets/img/blog/croissance.jpg";
import blog3 from "../assets/img/blog/google.jpg";
import blog4 from "../assets/img/blog/screens.jpg";
import blog5 from "../assets/img/blog/seo.jpg";
import blog6 from "../assets/img/blog/technos.png";

const Blog = () => {
  return (
    <div>
      <div className="banner" id="banniere">
        <img className="img-fluid" src={Banner} alt="img_banner" />
      </div>
      <div className="container-justify-center text-center">
        {/*trouve moi cette barre bleu, peut etre en css */}
        <h1 className="text-uppercase mt-5">Blog</h1>
        <p>Retrouvez ici quelques articles sur le developpement web.</p>
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
      <div className="container mt-5 mb-5">
        <div className="container text-center">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={blog1} class="card-img-top" alt="..." />
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
                  <small class="text-muted">
                    Site réalisé avec PHP et MySQL
                  </small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={blog2} class="card-img-top" alt="..." />
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
                <img src={blog3} class="card-img-top" alt="espace_bien_être" />
                <div class="card-body">
                  <h2 class="card-title">Espace bien-être</h2>
                  <p class="card-text">
                    Réalisation d'un site vitrine pour un patricien de
                    bien-être.
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
            <div class="col">
              <div class="card h-100">
                <img src={blog4} class="card-img-top" alt="espace_bien_être" />
                <div class="card-body">
                  <h2 class="card-title">Espace bien-être</h2>
                  <p class="card-text">
                    Réalisation d'un site vitrine pour un patricien de
                    bien-être.
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
            <div class="col">
              <div class="card h-100">
                <img src={blog5} class="card-img-top" alt="espace_bien_être" />
                <div class="card-body">
                  <h2 class="card-title">Espace bien-être</h2>
                  <p class="card-text">
                    Réalisation d'un site vitrine pour un patricien de
                    bien-être.
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
            <div class="col">
              <div class="card h-100">
                <img src={blog6} class="card-img-top" alt="espace_bien_être" />
                <div class="card-body">
                  <h2 class="card-title">Espace bien-être</h2>
                  <p class="card-text">
                    Réalisation d'un site vitrine pour un patricien de
                    bien-être.
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
    </div>
  );
};

export default Blog;
