import "./Detalles.css";

export default function Detalles() {
  return (
    <>
      <div className="position-relative">
        <section className="intro">
          <div className="content position-relative d-flex mt-5">
            <button className="btn btn-secondary rounded-4 position-absolute top-0 end-0 ">
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
      <section>
        <div className="content">
          <h1>Discover new teammates</h1>
        </div>
      </section>

      <section>
        <div className="content">
          <h1>Discover New Games</h1>
        </div>
      </section>

      <section>
        <div className="content">
          <h1>Fast and Easy</h1>
        </div>
      </section>
    </>
  );
}
