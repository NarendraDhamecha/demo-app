import { useState, useRef } from "react";
import "./Authentication.css";
import useAuth from "../hooks/useAuth";

const Authentication = ({ setToken }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const sendAuthReq = useAuth();

  const afterLogIn = (data) => {
    localStorage.setItem('token', data.idToken);
    setToken(data.idToken);
  };

  const afterSignUp = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
    alert("User has successfully signed up");
    setIsLogIn(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let URL =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDJpkuP-qKKlMQ4U-VxgZ1L3OLiwWYbTQ";

    if (isLogIn) {
      URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDJpkuP-qKKlMQ4U-VxgZ1L3OLiwWYbTQ";
    }

    sendAuthReq(
      {
        url: URL,
        body: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        },
      },

      isLogIn ? afterLogIn : afterSignUp
    );
  };

  return (
    <div className="container">
      <header>
        <h2>{isLogIn ? "LOG IN" : "SIGN UP"}</h2>
      </header>
      <form onSubmit={onSubmitHandler} className="form">
        <div className="form-control">
          <input type="email" placeholder="Email" ref={emailRef} required />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        {!isLogIn && (
          <div className="form-control">
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
        )}
        <button type="submit">{isLogIn ? "Log In" : "Sign Up"}</button>
      </form>
      <div className="navigate">
        <p>
          {isLogIn ? "Don't have an account ?" : "Already have an account ?"}
        </p>
        <button onClick={() => setIsLogIn(!isLogIn)}>
          {isLogIn ? "Sign Up" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Authentication;
