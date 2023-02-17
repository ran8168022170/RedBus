import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./seat.css";
import { Link } from "react-router-dom";

const Seat = (props) => {
  const [reserved, setReserved] = useState([1, 6]);
  const [temp, setTemp] = useState([]);
  function fun(e) {
    const c = Number(e.target.id);

    if (reserved.includes(c)) {
      alert("reserved");
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

  return (
    <>
      {reserved.includes(props.bus) ? (
        <div
          id={props.bus}
          style={{ width: 110, height: 30, background: "grey" }}
          onClick={fun}
        ></div>
      ) : props.tempArr.includes(props.bus) ? (
        <div
          id={props.bus}
          onClick={fun}
          style={{ width: 110, height: 30, background: "green" }}
        ></div>
      ) : (
        <div
          id={props.bus}
          onClick={fun}
          style={{ width: 110, height: 30, background: "blue" }}
        ></div>
      )}
    </>
  );
};

export default Seat;
