import "./Form.css";
import Input from "../../Feauters/Input/Input";
import Button from "../../Feauters/Button/Button";
import { useEffect, useState } from "react";
import { addUser } from "../../../Service/user-service";
import { useHistory } from "react-router-dom";

const RegistrasionForm = () => {
  let history = useHistory();
  const [messageFromServer, setMessageFromServer] = useState("");
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

  const register = async () => {
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
          <Input
            type="email"
            name="email"
            placeholder="email"
            handleChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            handleChange={handleChange}
          />

          <Button
            className="form-button"
            text="Submit"
            onClick={register}
          />
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
