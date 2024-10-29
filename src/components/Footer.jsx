import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="row p-4">
          <div className="container">
            <div className="row justify-content-between">
              <article className="adresse col-md-6 col-lg-2 mb-5">
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
              </article>
              <article className="lienutile col-md-6 col-lg-2 mb-5">
                <h3>Liens utiles</h3>
                <Link
                  to=""
                  className="fa-solid fa-chevron-right"
                  style={{ color: "#0d6efd" }}
                >
                  Accueil
                </Link>
                <Link href="">facebood</Link>
                <Link href="">linkeded</Link>
                <Link href="">linkeded</Link>
                <Link href="">linkeded</Link>
              </article>
              <article className="col-md-6 col-lg-2 mb-5">
                <h3>Mes dernieres réalisations</h3>
                <h4>40 rue Laure Sieblod</h4>
                <h4>69009 Lyon, France</h4>
                <h4>Téléphone : 06 20 30 40 50</h4>
                <Link href="">github</Link>
                <Link href="">facebood</Link>
                <Link href="">linkeded</Link>
              </article>
              <article className="col-md-6 col-lg-2 mb-5">
                <h3>Mes derniers articles</h3>
                <h4>40 rue Laure Sieblod</h4>
                <h4>69009 Lyon, France</h4>
                <h4>Téléphone : 06 20 30 40 50</h4>
                <Link href="">github</Link>
                <Link href="">facebood</Link>
                <Link href="">linkeded</Link>
              </article>
            </div>
          </div>
        </section>

        <div className="">
          <p className="text-center m-0 text-bg-dark p-3">
            Designed by John Doe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
