import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import Seat from "../../components/Seat/seat";

const Bus = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [tempArr, setTempArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    if (items) {
      setTempArr(items);
    }
  }, [count]);

  const [upperDetail, setUpper] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);
  const [bottomDetail, setBottom] = useState([
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ]);
  const checkEmptyArr = () => {
    if (tempArr.length === 0) {
      alert("please select atleast one seat");
      return;
    } else {
      navigate(`/ticket/${id}`);
    }
  };
  return (
    <div className="">
      <div>
        <div>
          <h1>Select your seat</h1>
        </div>
        <div
          id="busSeat"
          className="center"
          style={{ border: "4px solid white", margin: 40, top: 85 }}
        >
          <div
            className="center"
            style={{
              border: "1px solid white",
              width: 600,
              height: 200,
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
            }}
          >
            {upperDetail.map((bus) => (
              <Seat
                bus={bus}
                tempArr={tempArr}
                setCount={setCount}
                setTempArr={setTempArr}
              />
            ))}
          </div>
          <div
            className="center"
            style={{
              // border: "1px solid white",
              width: 600,
              height: 200,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {bottomDetail.map((bus) => (
              <Seat
                bus={bus}
                tempArr={tempArr}
                setCount={setCount}
                setTempArr={setTempArr}
              />
            ))}
          </div>
        </div>

        {/* <div style={{ margin: "100px" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzCBKMj119CvHUsr7smFza8mEhGwirUu2bg&usqp=CAU"
            alt="arrow"
            style={{ width: "400px", height: "30px", marginTop: "0px" }}
          />
        </div> */}
        {/* <Link
          to={`/ticket/${id}`}
          style={{ textDecoration: "none", color: "white" }}
        > */}
        <div
          id="submit-button"
          onClick={checkEmptyArr}
          // style={{
          //   width: "150px",
          //   height: "60px",
          //   background: "green",
          //   color: "white",
          //   fontSize: "large",
          //   marginRight: "100px",
          //   display: "flex",
          //   marginLeft: "1700px",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   position: "relative",
          //   top: "220",
          // }}
        >
          Submit
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Bus;
