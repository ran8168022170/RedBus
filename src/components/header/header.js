import React, { useState, useNavigate, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import icon from "../../images/icon.png";
import logo from "../../images/logo.png";

//import { useState } from "react";

// const Header = () => {
//   const [checked, setChecked] = useState(0);
//   // for toggle login-logout
//   const [state, setState] = useState(1);
//   const changeState = () => {
//     if (state === 2) setState(1);
//     else setState(2);
//   };
//   function toggleMenu() {
//     // subMenu.classNameList.toggle("open-menu");
//     if (checked) setChecked(0);
//     else setChecked(1);

//     console.log("Working");
//   }
//   return (
//     <div className="header">
//       <div className="headerLeft">
//         <Link to="/">
//           <img
//             className="header__icon"
//             src="data:image/png;base64,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"
//           />
//         </Link>

//         <div>
//           <Link style={{ textDecoration: "none" }}>
//             <span>BusTicket</span>
//           </Link>
//           <Link style={{ textDecoration: "none" }}>
//             <span>ryde</span>
//           </Link>
//           <Link style={{ textDecoration: "none" }}>
//             <span>redRail</span>
//           </Link>
//         </div>
//       </div>
//       <div className="headerRight">
//         <div className="headerRight">
//           <Link style={{ textDecoration: "none" }}>
//             <span>Help</span>
//           </Link>
//           <Link style={{ textDecoration: "none" }}>
//             <span>Manage Booking</span>
//           </Link>
//           <Link style={{ textDecoration: "none" }}>
//             <span className="icon">
//               <img className="login__icon" src={icon} onClick={toggleMenu} />
//             </span>
//           </Link>
//         </div>
//         {checked ? (
//           <div className="sub-menu-wrap" id="subMenu">
//             <div className="sub-menu">
//               <div className="user-info">
//                 <h3>This is for demo</h3>
//               </div>
//               <a href="#" className="sub-menu-link">
//                 <p>Edit profile</p>
//                 <span>{">"}</span>
//               </a>
//               <a href="#" className="sub-menu-link">
//                 <p>Settings</p>
//                 <span>{">"}</span>
//               </a>
//               {state == 2 ? (
//                 <Link
//                   onClick={changeState}
//                   to={"/login"}
//                   style={{
//                     textDecoration: "none",
//                     color: "black",
//                     width: 60,
//                     height: 30,
//                   }}
//                 >
//                   <div className="sub-menu-link">
//                     <p>Log in</p>
//                     <span>&gt;</span>
//                   </div>
//                 </Link>
//               ) : (
//                 <Link
//                   onClick={changeState}
//                   to={"/"}
//                   style={{
//                     textDecoration: "none",
//                     color: "black",
//                     width: 60,
//                     height: 30,
//                   }}
//                 >
//                   <div className="sub-menu-link">
//                     <p>Log out</p>
//                     <span>&gt;</span>
//                   </div>
//                 </Link>
//               )}
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React from "react";
// import "../styles/App.css";
// import logo from "../image-folder/redbus_logo.png";
// import profile from "../image-folder/profile.png";
// import toggleMenu from "./App";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Login } from "./Login";
// import { Link } from "react-router-dom";

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

    console.log("Working");
  }

  return (
    <div id="nav-bar">
      <div id="navbar-left">
        <img
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
            <div className="sub-menu">
              <div className="user-info">
                <h3>This is for demo</h3>
              </div>
              <a href="#" className="sub-menu-link">
                <p onClick={openLoginPage}>Edit profile</p>
                <span>{">"}</span>
              </a>
              <a href="#" className="sub-menu-link">
                <p>Settings</p>
                <span>{">"}</span>
              </a>
              {state === 1 ? (
                <Link
                  onClick={changeState}
                  to={"Login"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: 60,
                    height: 30,
                  }}
                >
                  <div className="sub-menu-link">
                    <p>Log in</p>
                    <span>&gt;</span>
                  </div>
                </Link>
              ) : (
                <Link
                  onClick={changeState2}
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: 60,
                    height: 30,
                  }}
                >
                  <div className="sub-menu-link">
                    <p>Log out</p>
                    <span>&gt;</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
