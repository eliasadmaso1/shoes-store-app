import "./Form.css";
import Input from "../Input/Input";
import Button from '../Button/Button'
import { useEffect, useState } from "react";
import passwordValidator from 'password-validator';
import { pick } from 'lodash';
import {addUser} from '../../../Service/user-service';



const schema = new passwordValidator();
 

schema
.is().min(6)                              
.is().max(99)                             
.has().uppercase()                            
.has().lowercase()                            

const errorsMessages = {
  min: 'password should contain 6 char or more',
  max: 'password should contain at least 99 char',
  uppercase: 'password should contain uppercase letters',
  lowercase: 'password should contain lowercase letters'
}

const RegistrasionForm = () => {

  const [passwordError, setPasswordError] = useState([]);
  
  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
      setValues({
      ...values,
      [e.target.name] : e.target.value
    })
   
}

const register = ()=>{
  addUser(values.firstName,values.lastName,values.userName,values.email,values.password)
}


  useEffect(()=>{
    const errors = schema.validate(values.password, { list: true }); 
    if(errors.length > 0){
      const newErrors = pick(errorsMessages, errors);
      const errorMessagesArray = Object.values(newErrors)
      setPasswordError(errorMessagesArray)
    }else{
      setPasswordError({})
    }
  },[values.password])

  return (
    <div class="login-form" >
      <div class="login-form__content">
        <div class="login-form__header">Registration</div>
        <Input type="text" name="firstName" placeholder="First Name"  handleChange={handleChange}/>
        <Input type="text" name="lastName" placeholder="Last Name"  handleChange={handleChange}/>
        <Input type="text" name="userName" placeholder="User Name"  handleChange={handleChange}/>
        <Input type="email" name="email" placeholder="email"  handleChange={handleChange}/>
        <Input type="password" name="password" placeholder="Password"  handleChange={handleChange}/>
        { passwordError.length > 0 && passwordError.map(errorMessage => <div style={{color:"red",fontSize:12}}>{errorMessage}</div>)}


        <Button className="form-button"  text="Registration" onClick={register}/>
        <div class="login-form__links">
        </div>
      </div>
     </div>
  );
};

export default RegistrasionForm;