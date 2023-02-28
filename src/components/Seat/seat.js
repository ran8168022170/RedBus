import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./seat.css";
import { Link } from "react-router-dom";

const Seat = (props) => {
  const reserved = JSON.parse(localStorage.getItem("reserved")) || [];

  function checkSeat(e) {
    const c = Number(e.target.id);

    if (reserved.includes(c)) {
      alert("This Seat is Reserved ,Please Select Another Seat");
      return;
    }

    if (props.tempArr.includes(c)) {
      var temp1 = [...props.tempArr];
      var temp1 = props.tempArr.filter((seatID) => seatID !== c);
      localStorage.setItem("items", JSON.stringify(temp1));

      props.setTempArr(temp1);
      props.setCount(2);

      return;
    }

    var temp2 = [...props.tempArr, c];
    localStorage.setItem("items", JSON.stringify(temp2));

    props.setTempArr(temp2);
    props.setCount(1);
  }
  // updated

  return (
    <>
      {reserved.includes(props.bus) ? (
        <div
          id={props.bus}
          style={{
            width: 55,
            height: 30,
            background: "#959595",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={checkSeat}
        >
          {props.bus}
        </div>
      ) : props.tempArr.includes(props.bus) ? (
        <div
          id={props.bus}
          onClick={checkSeat}
          style={{
            width: 55,
            height: 30,
            background: "#454545",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {props.bus}
        </div>
      ) : (
        <div
          id={props.bus}
          onClick={checkSeat}
          style={{
            width: 55,
            height: 30,
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {props.bus}
        </div>
      )}
    </>
  );
};

export default Seat;
