// import FormLogin from '../Components/Forms/FormLogin.jsx';
// import FormLoginWithHook from "../Components/Forms/FormLoginWithHook.jsx";
import FormLoginWithMotion from "../Components/Forms/FormLoginWithMotion.jsx";
import React from "react";
import '../screens/Login.css';


const Login = () => {
    return (
      <div className="login-container">
        <div className="login-form">
          <FormLoginWithMotion titleForm="Bienvenido a FullStack"/>
        </div>
      </div>
    );
  };
  
export default Login;