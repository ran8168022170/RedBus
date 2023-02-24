import React, { useEffect, useState } from "react";
import "./bus.css";
import { useNavigate } from "react-router-dom";
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
          <div className="center" id="upperSeat">
            {upperDetail.map((bus) => (
              <Seat
                bus={bus}
                tempArr={tempArr}
                setCount={setCount}
                setTempArr={setTempArr}
              />
            ))}
          </div>
          <div className="center" id="lowerSeat">
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

        <div className="seatIntro">
          <div id="reserved" className="childSeatIntro"></div>
          <div id="reserved-text" className="childSeatIntro">
            Reserved Seat
          </div>
          <div id="empty" className="childSeatIntro"></div>
          <div id="empty-text" className="childSeatIntro">
            Empty Seat
          </div>
        </div>
        <div className="direction">
          <img
            style={{
              width: 100,
              height: 100,
              border: "1px solid red ",
              borderRadius: "50%",
            }}
            src="data:image/png;base64,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"
            alt="tells_direction "
          />
        </div>
        <div id="submit-button" onClick={checkEmptyArr}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Bus;
