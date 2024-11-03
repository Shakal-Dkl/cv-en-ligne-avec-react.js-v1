import Banner from "../assets/img/banner.jpg";

const Services = () => {
  return (
    <div>
      <div className="banner" id="banniere">
        <img className="img-fluid" src={Banner} alt="img_banner" />
      </div>
      <div
        className="container justify-content-center text-center p-5"
        id="tittle"
      >
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
      <div className="container px-5 text-center">
        <div className="row m-5">
          <div className="shadow-sm rounded-4 bg-white col-6 col-md-4 col-lg-4">
            <i
              class="fa-solid fa-desktop fa-2xl"
              style={{ color: "#0d6efd" }}
            ></i>
            <h2>UX DESIGN</h2>
            <p>
              L'<strong>UX Design</strong> est une methode de conception centrée
              sur l'utilisateur. Son but est d'offrir une expérience de
              navigation optimale à l'internaute.
            </p>
          </div>
          <div className="shadow-sm rounded-4 bg-white col-6 col-md-4 col-lg-4">
            <i
              class="fa-solid fa-file-code fa-2xl"
              style={{ color: "#0d6efd" }}
            ></i>
            <h2>DÉVELOPPEMENT WEB</h2>
            <p>
              Le<strong>développement de sites web</strong> repose sur
              l'utilisation des langages HTML, CSS, JavaScript et PHP.
            </p>
          </div>
          <div className="shadow-sm rounded-4 bg-white col-6 col-md-4 col-lg-4">
            <i
              class="fa-solid fa-magnifying-glass-dollar fa-2xl"
              style={{ color: "#0d6efd" }}
            ></i>
            <h2>RÉFÉRENCEMENT</h2>
            <p>
              Le <strong>référencement naturel d'un site</strong>, aussi appelé
              SEO, consiste à mettre des teccniques en oeuvre pour améliorer sa
              position dans les résultats des moteurs de recherche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
