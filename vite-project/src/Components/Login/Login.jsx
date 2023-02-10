import "./Login.css";
import { initialValuesLogin } from "./form";
import { LoginSchema } from "./LoginSchema";
import Input from "../ui/Input";
import { Form, Formik } from "formik";
import { useAuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DetallesUsuario from "../DetallesUsuario/DetallesUsuario";

export default function Login() {
  const { login, authorization } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    login(values);
    actions.resetForm();
  };
  useEffect(() => {
    if (authorization.email) {
      navigate("/userDetails");
    }
  }, [authorization]);
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
