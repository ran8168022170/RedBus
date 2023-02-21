import React, { useState } from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  //const [pass, setPass] = useState("");
  //const [name, setName] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    //console.log(email);
    //console.log(name);
  };

  const [inpval, setInpval] = useState({
    name: "",
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

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("email @ required");
    } else if (password === "") {
      alert("pass field is required");
    } else if (password.length < 5) {
      alert("password length is short");
    } else {
      console.log("data added succesfully");
      //navigate("/login");
      //history("/login");
      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div className="auth-form-container">
      <h1>Registration</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          //value={name}
          name="name"
          onChange={getdata}
          id="name"
          placeholder="full Name"
        />
        <label htmlFor="email">email</label>
        <input
          //value={email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={getdata}
        />
        <label htmlFor="password">password</label>
        <input
          //value={pass}
          name="password"
          onChange={getdata}
          type="password"
          placeholder="********"
          id="password"
        />

        <button type="submit" onClick={addData} style={{ background: "red" }}>
          Sign Up
        </button>
      </form>
      {/* <button
        style={{ background: "black" }}
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have an account? Login here.
      </button> */}

      <p className="mt-3" style={{ background: "black" }}>
        Already Have an Account
        <span>
          <NavLink to="/login">SignIn</NavLink>
        </span>
      </p>
    </div>
  );
};

export default Register;
