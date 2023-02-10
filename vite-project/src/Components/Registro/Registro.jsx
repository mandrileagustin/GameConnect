import "./Registro.css";
import { Link } from "react-router-dom";
export default function Registro() {
  return (
    <div>
      <div className="registro-box">
        <h2>Registro</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Nombre</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Apellido</label>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Registrate
          </button>
        </form>
      </div>
    </div>
  );
}
