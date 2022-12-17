import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import cryptoRandomString from "crypto-random-string";

import "./style.css";
function Login() {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    fullName: "",
    password: "",
    emailAddress: "",
    metaData: "SignUp",
    id: "",
  });

  const [signIn, setSignIn] = useState({
    password: "",
    emailAddress: "",
    metaData: "SignIn",
    id:localStorage.getItem("user")
  });

  const [auth, setAuth] = useState(localStorage.getItem("user"));
  const AlreadyAMember = () => {
    setAuth(true);
  };

  const SignUpInstead = () => {
    setAuth(false);
  };

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setSignUp(() => {
      return {
        ...signUp,
        [name]: value,
      };
    });
  };

  const handleSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn(() => {
      return {
        ...signIn,
        [name]: value,
      };
    });
  };

  const Registration = async () => {
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr)
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({
        ...signUp,
        // id: cryptoRandomString({ length: 10 }),
        id: arr[0]
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.response === "user Exists") {
      console.log(result.response);
      alert("user already exists");
    } else if (result.response === "unique user") {
      localStorage.setItem("user", result.user);
      console.log(result.response);
      navigate("/mba");
    }
  };

  const SigningIn = async () => {
    let result = await fetch("http://localhost:5000/signin", {
      method: "post",
      body: JSON.stringify(signIn),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.response === "user exists") {
      localStorage.setItem("user", result.user);
      console.log(result.response);
      navigate("/mba");
    } else if (result.response === "user doesnt exist") {
      console.log(result.response);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="body" autoComplete="off">
      <div class="login-wrap">
        <div class="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            class="sign-in"
            autoComplete="off"
            checked={auth? true:false}
          />

          <label for="tab-1" class="tab" onClick={AlreadyAMember}>
            Sign In
          </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              class="sign-up"
              
              autoComplete="off"
              checked={auth?false:true}
            />
          
          <label for="tab-2" class="tab" onClick={SignUpInstead}>
            Sign Up
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="email" class="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  name="emailAddress"
                  value={signIn.emailAddress}
                  onChange={handleSignIn}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  name="password"
                  value={signIn.password}
                  onChange={handleSignIn}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <button class="button" onClick={SigningIn}>
                  Sign In
                </button>
              </div>

              <div class="hr"></div>

              <center>
                <p
                  onClick={SignUpInstead}
                  className="hover:text-blue-700 active:text-black"
                >
                  Sign Up Instead
                </p>
              </center>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Full Name
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  name="fullName"
                  value={signUp.fullName}
                  onChange={handleRegister}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  name="password"
                  value={signUp.password}
                  onChange={handleRegister}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  class="input"
                  name="emailAddress"
                  value={signUp.emailAddress}
                  onChange={handleRegister}
                />
              </div>
              <div class="group">
                <button class="button" onClick={Registration}>
                  Sign Up
                </button>
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label
                  onClick={AlreadyAMember}
                  className="hover:text-blue-700 active:text-black"
                >
                  Already Member?
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
