import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
      <Header />
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
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src={blog1} className ="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="text-semibold card-title">
                    Coder sont site en HTML/CSS
                  </h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati inventore commodi odio repellendus velit, dolore
                    quidem perferendis repellat labore iusto ipsa veniam nobis
                    modi adipisci voluptas vero quod maxime! Praesentium?
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Publié le 13 novembre 2024
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={blog2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h2 className="text-semibold card-title">
                    Vendre ses produits sur le web
                  </h2>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae corporis quis et repellendus exercitationem,
                    iste alias mollitia sunt deserunt sit illum officia rem
                    consequatur earum sequi nulla nam, repellat eos.$
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Publié le 13 novembre 2024
                  </small>
                </div>
              </div>
            </div>
            <div className ="col">
              <div className ="card h-100">
                <img
                  src={blog3}
                  className="card-img-top"
                  alt="espace_bien_être"
                />
                <div className="card-body">
                  <h2 className="text-semibold card-title">
                    Se positionner sur Google
                  </h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum error laboriosam ipsum id libero eius fugiat dolor
                    culpa quas rem, quam deserunt autem, cumque exercitationem
                    qui debitis consectetur nostrum sint.
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Publié le 13 novembre 2024
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={blog4}
                  className="card-img-top"
                  alt="espace_bien_être"
                />
                <div className="card-body">
                  <h2 className="text-semibold card-title">
                    Coder en responsive design
                  </h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    cum repudiandae vel soluta esse incidunt officiis
                    accusantium, veritatis velit itaque dolor aperiam dolorem
                    consequatur impedit recusandae, architecto nisi modi est.
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Publié le 13 novembre 2024
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={blog5}
                  className="card-img-top"
                  alt="espace_bien_être"
                />
                <div className="card-body">
                  <h2 className="text-semibold card-title">
                    Technique de référencement
                  </h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia fugiat delectus consectetur facilis eos voluptatibus.
                    At, aliquid sit. Nostrum tempore voluptate blanditiis animi
                    odit itaque deleniti fugit dolor saepe enim?
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Publié le 13 novembre 2024
                  </small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={blog6}
                  className="card-img-top"
                  alt="espace_bien_être"
                />
                <div className="card-body">
                  <h2 className="text-semibold card-title">
                    Apprendre à coder
                  </h2>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatum praesentium illum, repellat placeat corporis,
                    aliquam ipsa recusandae reiciendis nostrum rem hic quam cum
                    pariatur nemo! In non officiis eos minima?
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    Voir
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Publié le 13 novembre 2024
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
