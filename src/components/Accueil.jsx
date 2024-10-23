const Accueil = () => {
  return (
    <div>
      <section>
        <h1> mettre ma premiere image mais cest la galere</h1>
        <img src="" alt="" />
      </section>
      <section>
        <div class="container">
          <div>
            <h2>A propos</h2>
          </div>
          <div>
            <h2>Mes compétences</h2>
            <div className="reactbar">
              <p>REACT 50%</p>
              <div class="progress">
                <div
                  class="progress-bar w-50 bg-primary"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                aria-label="Success example"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                aria-label="Info example"
                style="width: 50%"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                aria-label="Warning example"
                style="width: 75%"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="progress">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                aria-label="Danger example"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
