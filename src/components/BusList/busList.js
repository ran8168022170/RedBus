import React, { useState, useEffect } from "react";
import Cards from "../card/card";
import "./busList.css";

const BusList = (props) => {
  const [busList, setBusList] = useState([]);
  // updated
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
    if (a.busName < b.busName) {
      return -1;
    }
    if (a.busName > b.busName) {
      return 1;
    }

    return 0;
  }
  function compareByArrival(a, b) {
    if (a.arrivalTime < b.arrivalTime) {
      return -1;
    }
    if (a.arrivalTime > b.arrivalTime) {
      return 1;
    }

    return 0;
  }
  function compareByDeparture(a, b) {
    if (a.departureTime < b.departureTime) {
      return -1;
    }
    if (a.departureTime > b.departureTime) {
      return 1;
    }

    return 0;
  }
  function compareByDate(a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }

    return 0;
  }
  function compareByPrice(a, b) {
    if (a.ticketPrice < b.ticketPrice) {
      return -1;
    }
    if (a.ticketPrice > b.ticketPrice) {
      return 1;
    }

    return 0;
  }

  const sortByName = () => {
    var tempBusList = [...busList];
    tempBusList.sort(compare);
    setBusList(tempBusList);
  };
  const sortByArrival = () => {
    var tempBusList = [...busList];
    tempBusList.sort(compareByArrival);
    setBusList(tempBusList);
  };
  const sortByDeparture = () => {
    var tempBusList = [...busList];
    tempBusList.sort(compareByDeparture);
    setBusList(tempBusList);
  };

  const sortByDate = () => {
    var tempBusList = [...busList];
    tempBusList.sort(compareByDate);
    setBusList(tempBusList);
  };

  const sortByPrice = () => {
    var tempBusList = [...busList];
    tempBusList.sort(compareByPrice);
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
          <div class="submain1" onClick={sortByArrival}>
            Arrival
          </div>
          <div class="submain1" onClick={sortByDeparture}>
            Departure
          </div>
          <div class="submain1" onClick={sortByDate}>
            Date
          </div>
          <div class="submain1" onClick={sortByPrice}>
            Price
          </div>
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
