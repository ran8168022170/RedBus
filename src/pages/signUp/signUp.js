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
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

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
      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
      navigate("/login");
    }
  };

  return (
    <div className="auth-form-container">
      <h1 id="form-name">Registration</h1>
      <div className="child1">
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            onChange={getdata}
            id="name"
            placeholder="full Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={getdata}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={getdata}
            type="password"
            placeholder="********"
            id="password"
          />

          <button id="btn" type="submit" onClick={addData}>
            Sign Up
          </button>
          <div className="child2">
            <p className="para-color">
              Already Have an Account.
              <span>
                <NavLink style={{ background: "#78DC54" }} to="/login">
                  SignIn
                </NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
