import "../Detalles/Detalles.css";
import { Link } from "react-router-dom";
export default function Detalles() {
  return (
    <div className="position-relative">
      <section className="primero">
        <div className="content">
          <Link
            className="btn btn-secondary rounded-4 position-absolute top-0 end-0 mt-5 me-3 btn-lg"
            to={"/login"}
          >
            LOGIN
          </Link>
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
  );
}
