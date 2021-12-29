import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logedUser } from "../../../Service/user-service";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = () => {
    logedUser(values.email, values.password)
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data);
          window.location.replace("/");
        } else {
          setError("Incorrect Email or Password , Resgister below");
        }
      });
  };

  return (
    <div class="login-form">
      <div class="login-form__content">
        <div class="login-form__header">Login</div>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          handleChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          handleChange={handleChange}
        />
        

        {error && <div style={{ color: "red", fontSize: 13.5 }}>{error}</div>}

        <Button
          className="form-button"
          type="submit"
          text="Login"
          onClick={loginUser}
        />
        <div class="login-form__links">
          <Link to="/Registration" className="a">
            Registration Here
          </Link>
          <br></br>
          <br></br>
          <Link to="/ForgotPasssword" className="a">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
