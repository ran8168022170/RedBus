import React, { useState, useNavigate, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import icon from "../../images/icon.png";
import logo from "../../images/logo.png";

export default function Header(props) {
  // for toggle login-logout
  const [state, setState] = useState(1);

  // for profile icon toggle
  const [checked, setChecked] = useState(0);
  const openLoginPage = () => {
    //navigate("Login");
  };

  const forTest = () => {
    console.log("forTest");
  };

  useEffect(() => {
    if (props.forChangeState === 2) {
      setState(2);
    } else {
      setState(1);
    }
  }, [props.forChangeState]);
  const changeState = () => {
    if (state === 2) setState(1);
    toggleMenu();
  };

  const changeState2 = () => {
    props.SetForChangeState(1);
    toggleMenu();
  };

  let subMenu = document.getElementById("subMenu");

  function toggleMenu() {
    if (checked) setChecked(0);
    else setChecked(1);
  }
  // updated

  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img
          id="logo"
          src={logo}
          alt="redbus"
          style={{ width: 100, height: 50, borderRadius: 20 }}
        />
      </div>
      <div id="navbar-right">
        <a id="home" href="/">
          Home
        </a>
        <a id="help" href="#">
          Help
        </a>

        <img src={icon} id="profile" onClick={toggleMenu} />

        {checked ? (
          <div className="sub-menu-wrap" id="subMenu">
            {state === 1 ? (
              <Link className="login-anchor" onClick={changeState} to={"Login"}>
                Login
              </Link>
            ) : (
              <Link className="logout-anchor" onClick={changeState2} to={"/"}>
                Logout
              </Link>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
