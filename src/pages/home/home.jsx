import React, { useState, useEffect } from "react";
import "./home.css";
import BusList from "../../components/BusList/busList";
import { getData } from "../../utils/service";
import bg_image from "../../images/background.jpg";

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [variable, setVar] = useState(1);
  const [updatedDate, setupdatedDate] = useState("");

  const d = new Date();
  let day = d.getDate();
  day = String(day);
  let month = d.getMonth() + 1;
  var monthStr = String(month);

  if (month < 10) {
    monthStr = "0" + monthStr;
  }
  let year = d.getFullYear();
  year = String(year);

  var currDate = year + "-" + monthStr + "-" + day;

  const exchange = () => {
    var temp = source;
    setSource(destination);
    setDestination(temp);
  };
  const search = () => {
    setVar(variable + 1);

    if (date) {
      if (date >= currDate) {
        setupdatedDate(date);
      } else {
        alert("You Have Selected Past Date,Select Current or Future Date");
      }
    }
  };

  return (
    <div className="super-main">
      <div className="main">
        <div class="mainbox">
          <input
            type="text"
            id="source"
            name="source"
            placeholder="From"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />

          <img
            id="exchange"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqTFeoAjbWn3mlI6UX1UuxdKxX1w40MBHVg&usqp=CAU"
            width="40px"
            onClick={exchange}
            alt="exchange"
          />

          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="To"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <input
            type="date"
            id="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />

          <button class="search" onClick={search}>
            search
          </button>
        </div>
      </div>

      <BusList
        source={source}
        destination={destination}
        updatedDate={updatedDate}
        variable={variable}
      />
    </div>
  );
};

export default Home;
