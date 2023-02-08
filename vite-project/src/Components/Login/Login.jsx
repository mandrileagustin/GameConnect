import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <Link to={"userDetails"}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Conecta
          </Link>
        </form>
      </div>
    </div>
  );
}
