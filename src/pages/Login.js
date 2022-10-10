import React, { useState } from "react";
import classes from "../pages/Login.module.css";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useNavigate } from 'react-router';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  
  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      navigate("/", { replace: true });
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if (auth) {
        navigate("/", { replace: true });
      }
    })
    .catch(error => alert(error.message))
    e.preventDefault();
    
  }

  return (
    <div className={classes.login}>
      <Link to="/">
        <img
          className={classes.loginLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon"
        />
      </Link>

      <div className={classes.loginContainer}>
        <h1>Sign-in</h1>

        <form className={classes.loginForm}>
          <div className={classes.inputGroup}>
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={classes.inputGroup}>
            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
          </div>
          <button type="submit" onClick={signIn} className={classes.loginBtn}>Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={register} className={classes.login__registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
