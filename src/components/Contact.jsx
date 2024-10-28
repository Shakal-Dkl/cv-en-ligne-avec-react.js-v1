const Contact = () => {
  return (
    <div className="Contact" backgroundImage="./assets/img/contact-bg.jpg">
      <div className="container">
        <div className="Text_infos text-center">
          <h2 className="text-uppercase">ME CONTACTER</h2>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
        </div>
        <div className="row">
          <article className="col-md-6 col-lg-6 mb-5">
            <h3>Mes coordonnées</h3>

            <address>
              <i className="fas fa-map-marker">
                40 Rue Laure Diebold, 69009 Lyon, France
              </i>
              <br />
              <i className="fas fa-mobile-alt"> 06 20 30 40 50</i>
            </address>
            <iframe
              title="map"
              className="map-fluid"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.313864755457!2d4.799070092087464!3d45.77806522783525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1729716895766!5m2!1sfr!2sfr"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </article>
          <div className="col-md-6 col-lg-6 mb-5">
            <h3>Formulaire de contact</h3>
            {/*Mon formulaire, faire une fonction pour envoyé verifié les champs, trouve comment faire ça,
            evite que la page se recharge ( prevent default) */}
            <form className="container">
              <div className="mb-3">
                <input
                  type="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Votre adresse email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Sujet"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Votre message"
                  rows="7"
                ></textarea>
                {/*Faire le bouton avec le CSS trop moche en bootstrap */}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
