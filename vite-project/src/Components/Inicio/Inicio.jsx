import { Link } from "react-router-dom";

export default function Detalles() {
  return (
    <div>
      <div className="position-relative">
        <section className="intro " id="primero">
          <div className="content">
            <h2 id="titulo2" className="col-6 mt-5">
              Encuentra rapido y facil a esos compañeros de aventura que tanto
              buscas
            </h2>
            <Link
              className="btn btn-primary position-absolute top-0 end-0 mt-4 me-4 col-2"
              to={"/login"}
            >
              Login
            </Link>
            <h1
              id="titulo"
              className="position-absolute top-0 start-0 mt-2 ms-4 "
            >
              GameConnect
            </h1>
            <p id="parrafo">Una comunidad sana</p>
          </div>
        </section>
      </div>
      <div className="position-relative">
        <section className="" id="segundo">
          <div className="content">
            <h2
              id="titulo2"
              className="col-4 position-absolute top-0 end-0 mt-5 me-5 "
            >
              Descubre nuevos juegos y nuevas comunidades.
            </h2>
            <h3
              id="titulo3"
              className="col-4 position-absolute top-50 end-0 ms-5"
            >
              Rétate a ti mismo en una batalla de ingenio y habilidades con
              amigos en los que contar.
            </h3>
            <Link
              className="btn btn-primary position-absolute bottom-0 end-0 mb-5 me-4 col-2 "
              to={"/login"}
            >
              {" "}
              Join Us
            </Link>
            <img
              src="src/assets/Imagenes/eldenring.jpg "
              alt="..."
              className="position-absolute"
              id="imagen"
            />
          </div>
        </section>
      </div>
      <div className="position-relative">
        <section id="tercero" className="">
          <div className="content ">
            <h2
              id="titulo2"
              className="col-8 position-absolute top-0 start-50 translate-middle-x mt-4"
            >
              Comparte tus aventuras a tus amigos.
            </h2>
            <div className="row justify-content-start mb-5 me-5 p-2">
              <div className="col-4">
                <h3 id="titulo3">Unete a chats de tus juegos favoritos</h3>
              </div>
              <div className="col-4">
                <h3 id="titulo3">Sube las fotos de tus aventuras</h3>
              </div>
            </div>

            <imagen
              src="src/assets/Imagenes/background2.jgp"
              id="imagen2"
              alt="..."
              className="position-absolute"
            />
          </div>
        </section>
      </div>
      <div className="position-relative" id="footer-div">
        <footer id="footer">
          <div className=" ">
            <h3 id="titulo3">GameConnect</h3>

            <Link
              className="btn btn-primary position-absolute top-0 end-0 col-2 mt-3 me-4"
              to={"/login"}
            >
              Get Started
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
