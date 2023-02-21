import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signIn.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  // const [email, setEmail] = useState("");
  //const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(email);
  };
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userData");
    console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("email @ required");
    } else if (password === "") {
      alert("pass field is required");
    } else if (password.length < 5) {
      alert("password length is short");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");
          navigate("/home");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          //history("/details");
        }
      }
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          //value={email}
          // onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={getdata}
        />
        <label htmlFor="password">password</label>
        <input
          // value={pass}
          // onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={getdata}
        />
        <button type="submit" onClick={addData}>
          Log In
        </button>
      </form>
      {/* <button
        className="link-btn"
        style={{ background: "black" }}
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button> */}
      <p className="mt-3" style={{ background: "black" }}>
        Already Have an Account{" "}
        <span>
          <NavLink to="/Register">SignUp</NavLink>
        </span>
      </p>
    </div>
  );
};

export default Login;
