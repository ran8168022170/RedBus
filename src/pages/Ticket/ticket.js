import React, { useState, useEffect } from "react";
import "./ticket.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Ticket = () => {
  const { id } = useParams();
  const [bus, setBus] = useState([]);

  useEffect(() => {
    fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => setBus(data));
  }, []);

  const items = JSON.parse(localStorage.getItem("items"));

  if (bus[0]) {
    var busTicketPrice = bus[0].ticketPrice;
    console.log(bus[0].ticketPrice);
  }

  var price = items.length * busTicketPrice;

  var clearLocalStorage = () => {
    const res = JSON.parse(localStorage.getItem("reserved")) || [];
    localStorage.setItem("reserved", JSON.stringify([...items, ...res]));
    localStorage.removeItem("items");
  };

  return (
    <div className="ticket-body">
      <h1 className="ticket-h" style={{ color: "black" }}>
        You Have Selected Following Seats :{" "}
      </h1>
      {items.map((seat) => (
        <span className="seatNumber"> {seat} </span>
      ))}
      <h1 className="ticket-h">
        Your Total Bill Amount is :
        <span style={{ color: "green" }}>
          {isNaN(price) ? "Calculating ....!!!" : "₹ " + price}
        </span>
      </h1>

      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        <div className="back" onClick={clearLocalStorage}>
          Go to Home
        </div>
      </Link>
    </div>
  );
};

// updated

export default Ticket;
