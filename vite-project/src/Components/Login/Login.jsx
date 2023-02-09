import "./Login.css";
import { initialValuesLogin } from "./form";
import { LoginSchema } from "./LoginSchema";
import Input from "../ui/Input";
import { Form, Formik } from "formik";
import { useAuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="login-box">
        <h2>Login</h2>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmiting }) => (
            <div className="user-box">
              <Form>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                  />
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                  />
                  <label>Password</label>
                </div>
                <button
                  disabled={isSubmiting}
                  type="submit"
                  value="Login"
                  to={"#"}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Conecta
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
