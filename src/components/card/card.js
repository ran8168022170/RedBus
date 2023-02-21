import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ bus }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Link
        to={`/bus/${bus.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div class="listSuper">
          <div class="listMain">
            <div class="busName">{bus.busName}</div>
            <div class="daparture">
              <div className="departureLabel">Arrival</div>
              <div className="departureName">{bus.arrivalTime}</div>
            </div>
            <div class="arrival">
              <div className="arrivalLabel">Departure</div>
              <div className="arrivalName">{bus.departureTime}</div>
            </div>
            <div class="date">
              <div className="ratingInside">{bus.date}</div>
            </div>
            <div class="fare">{bus.ticketPrice}/-</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
