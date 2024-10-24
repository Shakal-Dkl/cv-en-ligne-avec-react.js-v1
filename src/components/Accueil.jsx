import { Link } from "react-router-dom";
import img1 from "../assets/img/john-doe-about.jpg";
import "./Accueil.css";

const Accueil = () => {
  return (
    <div>
      <section className="bg-image d-flex justify-content-center align-item-center img-fluid">
        <div className="container text-white text-center px-3 ">
          <h1 className="">Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          {/*Faire le bouton avec le CSS trop moche en bootstrap */}
          <Link className="btn btn-primary" to="#" role="button">
            En savoir plus
          </Link>
        </div>
      </section>
      <section>
        <div className="container " style={{ backgroundColor: "#fff" }}>
          <div className="row row-cols-2">
            <div className="col">
              <h2>A propos</h2>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web</strong>
                au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                solides pour travailler dans le domaine du
                <strong>développement web</strong>.
              </p>
              <p>
                Basé à lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de
                <strong>développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je recherche les bonnes pratiques du web.
              </p>
            </div>
            <div className="col">
              <img className="img-fluid" src={img1} alt="img John Doe" />
              <h2>Mes compétences</h2>
              <div className="reactbar">
                <p>HTML 90%</p>
                <div className="progress">
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
                <p>CSS3 80%</p>
                <div className="progress">
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
                <p>JAVASCRIPT 70%</p>
                <div className="progress">
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
                <p>PHP 60%</p>
                <div className="progress">
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
                <p>REACT 50%</p>
                <div className="progress">
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
    </div>
  );
};

export default Accueil;
