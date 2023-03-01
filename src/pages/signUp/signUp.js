import React, { useState } from "react";
import "./signUp.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {};

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
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Email @ required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length is short");
    } else {
      alert("User SignUp successfully");
      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
      navigate("/login");
    }
  };
  function cross() {
    navigate("/");
  }

  return (
    <div className="auth-form-container">
      <h1 id="form-name">Registration</h1>
      <div className="child1">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="cross" onClick={cross}>
            X
          </div>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            onChange={getdata}
            id="name"
            placeholder="Full Name"
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
            placeholder="******"
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
// updated 2
export default Register;
