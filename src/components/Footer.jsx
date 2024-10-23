import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="row text-center p-4">
          <div className="container">
            <div className="row justify-content-between">
              <article className="col-md-6 col-lg-auto mb-5">
                <h3>John Doe</h3>
                <h4>40 rue Laure Sieblod</h4>
                <h4>69009 Lyon, France</h4>
                <h4>Téléphone : 06 20 30 40 50</h4>
                <Link to="" FontAwesomeIcon icon="fa-brands fa-github">
                  github
                </Link>
                <Link href="">facebood</Link>
                <Link href="">linkeded</Link>
              </article>
              <article className="col-md-6 col-lg-auto mb-5">
                <h3>Liens utiles</h3>
                <Link href="">Accueil</Link>
                <Link href="">facebood</Link>
                <Link href="">linkeded</Link>
                <Link href="">linkeded</Link>
                <Link href="">linkeded</Link>
              </article>
              <article className="col-md-6 col-lg-auto mb-5">
                <h3>Mes dernieres réalisations</h3>
                <h4>40 rue Laure Sieblod</h4>
                <h4>69009 Lyon, France</h4>
                <h4>Téléphone : 06 20 30 40 50</h4>
                <Link href="">github</Link>
                <Link href="">facebood</Link>
                <Link href="">linkeded</Link>
              </article>
              <article className="col-md-6 col-lg-auto mb-5">
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
