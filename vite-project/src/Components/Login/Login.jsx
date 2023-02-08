import "./Login.css";
import { initialValuesLogin } from "./form";
import { LoginSchema } from "./LoginSchema";
import Input from "../ui/Input";
import { Form, Formik } from "formik";
import { useAuthContext } from "../../../Contexts/AuthContext/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuthContext();
  const onSubmit = async (values, actions) => {
    login(values);
    actions.resetForm();
  };

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
                <Link
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
                </Link>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}
