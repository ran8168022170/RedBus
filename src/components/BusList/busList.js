import React, { useState, useEffect } from "react";
import Cards from "../card/card";
import "./busList.css";

const BusList = (props) => {
  const [busList, setBusList] = useState([]);

  useEffect(() => {
    getData();
  }, [props.variable]);
  const getData = () => {
    fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${props.source}&destination=${props.destination}&date=${props.updatedDate}`
    )
      .then((res) => res.json())
      .then((data) => setBusList(data))
      .catch((error) => {
        console.log("error: " + error);
      });
  };

  function compare(a, b) {
    if (a.ticketPrice < b.ticketPrice) {
      return -1;
    }
    if (a.ticketPrice > b.ticketPrice) {
      return 1;
    }

    return 0;
  }
  //alert(a > b);
  const sortByName = () => {
    var tempBusList = [...busList];
    tempBusList.sort(compare);
    setBusList(tempBusList);
  };
  return (
    <div className="bus__list">
      <div class="super">
        <div class="main1">
          <div class="heading ">
            <h1>Sort By:</h1>
          </div>
          <div class="submain1" onClick={sortByName}>
            Name
          </div>
          <div class="submain1">Arrival</div>
          <div class="submain1">Departure</div>
          <div class="submain1">Date</div>
          <div class="submain1">Price</div>
        </div>
      </div>
      <div className="list__cards">
        {busList.map((bus) => (
          <Cards bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default BusList;
