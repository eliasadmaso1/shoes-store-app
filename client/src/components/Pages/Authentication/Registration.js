import "./Form.css";
import Input from "../../Feauters/Input/Input";
import Button from "../../Feauters/Button/Button";
import { useEffect, useState } from "react";
import { addUser } from "../../../Service/user-service";
import { useHistory } from "react-router-dom";

const RegistrasionForm = () => {
  let history = useHistory();
  const [messageFromServer, setMessageFromServer] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (values) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const errors = {};
    if (!values.userName) {
      errors.userName = "User Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  const register = async () => {
    setFormErrors(validate(values));

    const res = await addUser(
      values.firstName,
      values.lastName,
      values.userName,
      values.email,
      values.password
    );
    setMessageFromServer(res.data.message);
    if (res.data.success) {
      history.push("/Login");
    }
  };

  return (
    <div className="login-form-container">
      <div class="login-form">
        <div class="login-form__content">
          <div class="login-form__header">Register With Us</div>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            handleChange={handleChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            handleChange={handleChange}
          />
          <Input
            type="text"
            name="userName"
            placeholder="User Name"
            handleChange={handleChange}
          />
          <span>{formErrors.userName}</span>
          <Input
            type="email"
            name="email"
            placeholder="email"
            handleChange={handleChange}
          />
          <span>{formErrors.email}</span>

          <Input
            type="password"
            name="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          <span>{formErrors.password}</span>

          <Button className="form-button" text="Submit" onClick={register} />
          <div className="message-div">
            <span>{messageFromServer}</span>
          </div>
          <div class="login-form__links"></div>
        </div>
      </div>
    </div>
  );
};

export default RegistrasionForm;
