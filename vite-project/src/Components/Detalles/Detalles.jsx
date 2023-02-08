import "./Detalles.css";

export default function Detalles() {
  return (
    <>
      <div className="position-relative">
        <section className="intro">
          <div className="content">
            <button className="btn btn-secondary rounded-4 position-absolute top-0 end-0 mt-3 me-3">
              LOGIN
            </button>
          </div>
          <div className="position-absolute top-0 start-0 mt-5 ms-4">
            <h1>GameConnect</h1>
          </div>
          <div className="position-absolute top-50 start-0 translate-middle-y ms-4 col-5">
            <h1>
              Encuentra rapido y facil a esos compañeros de aventura que tanto
              buscas
            </h1>
          </div>
        </section>
      </div>

      <section className="second position-relative">
        <div className="content d-flex">
          <div className="position-absolute top-50 end-0 translate-middle-y col-5 d-grid gap-5">
            <div>
              <h1>Descubre nuevos juegos y nuevas comunidades</h1>
            </div>
            <div>
              <h3>
                Rétate a ti mismo en una batalla de ingenio y habilidades con
                amigos en los que contar.
              </h3>
            </div>
          </div>
          <div className="imagen-second">
            <div className="w-75 position-absolute top-50 start-0 translate-middle ms-5">
              <img
                src="../src/assets/Imagenes/eldenring.jpg"
                className="card-img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="tercero">
        <div className="content">
          <h1>Discover New Games</h1>
        </div>
      </section>
    </>
  );
}
