import { Link } from "react-router-dom";
import "../Inicio/Detalles.css";

export default function Descripcion_2() {
  return (
    <div>
      <div className="position-relative">
        <section className="segundo">
          <div className="content d-flex">
            <div className="position-absolute top-50 end-0 translate-middle-y col-4 d-grid gap-5">
              <div className="d-flex position-absolute top-100 end-0  me-5 mt-5 col-11">
                <Link
                  className="btn btn-secondary rounded-4  btn-lg"
                  to={"login"}
                >
                  JOIN US
                </Link>
              </div>
              <div>
                <h1>Descubre nuevos juegos y nuevas comunidades</h1>
              </div>
              <div className="col-8">
                <h3>
                  Rétate a ti mismo en una batalla de ingenio y habilidades con
                  amigos en los que contar.
                </h3>
              </div>
            </div>
            <div>
              <div className=" d-flex justify-content-center w-50 position-absolute top-50 start-0 translate-middle-y ms-5 ">
                <img
                  src="../src/assets/Imagenes/eldenring.jpg"
                  className="card-img rounded-4 "
                  id="imagen-second"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
