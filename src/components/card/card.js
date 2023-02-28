import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  console.log("inside props", props);
  // updated
  function fun() {
    // console.log("from card");
    // props.setSingleBusVar(1);
    // console.log("after card", singleBusVar);
    // console.log("after card", props.singleBusVar);
  }
  return (
    <>
      <Link
        //onClick={fun}
        // to={`/bus/${bus.id}`}
        to={`/bus/${props.bus.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div class="listSuper" onClick={fun}>
          <div class="listMain">
            <div class="busName">
              {/* <h2>{bus.busName}</h2> */}
              <h2>{props.bus.busName}</h2>
            </div>
            <div class="daparture">
              <div className="departureLabel">Arrival</div>
              <div className="departureName">
                {/* <h3>{bus.arrivalTime}</h3> */}
                <h3>{props.bus.arrivalTime}</h3>
              </div>
            </div>
            <div class="arrival">
              <div className="arrivalLabel">Departure</div>
              <div className="arrivalName">
                {/* <h3>{bus.departureTime}</h3> */}
                <h3>{props.bus.departureTime}</h3>
              </div>
            </div>
            <div class="date">
              <div className="ratingInside">
                {/* <h3>{bus.date}</h3> */}
                <h3>{props.bus.date}</h3>
              </div>
            </div>
            <div class="fare">
              {/* <h3>{bus.ticketPrice} /-</h3> */}
              <h3>{props.bus.ticketPrice} /-</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
