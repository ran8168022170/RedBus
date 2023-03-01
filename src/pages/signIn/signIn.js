import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signIn.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {};
  const [inpval, setInpval] = useState({
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

    const getuserArr = localStorage.getItem("userData");

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Email @ required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length is short");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Invalid Detail or You Have Not SignUp Yet");
        } else {
          alert("User Login Successfully");
          props.SetForChangeState(2);
          navigate("/");

          localStorage.setItem("user_login", JSON.stringify(userlogin));
        }
      } else {
        alert("You Don't Have Account,Please SignUp");
      }
    }
  };

  function cross() {
    navigate("/");
  }
  // updated

  return (
    <div className="auth-form-container">
      <h2 id="login-text">Login</h2>
      <div className="child1">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="cross" onClick={cross}>
            X
          </div>

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
            type="password"
            placeholder="********"
            id="password"
            name="password"
            onChange={getdata}
          />
          <button
            type="submit"
            style={{ background: "yellow" }}
            onClick={addData}
          >
            Log In
          </button>
          <div className="child2" style={{ height: 20 }}>
            <p className="para-color">
              Don't Have An Account ?
              <span>
                <NavLink style={{ background: "#78DC54" }} to="/Register">
                  SignUp
                </NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
