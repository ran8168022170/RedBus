import React, { useState, useEffect } from "react";
import "./home.css";
import BusList from "../../components/BusList/busList";
import {getData} from '../../utils/service'

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [variable, setVar] = useState(1);

  const [busList, setBusList] = useState([]);

  useEffect(() => {
    getData(source,destination,date,setBusList);
  }, [variable]);
   const getData = () => {
  fetch(
    `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}&date=${date}`
  )
    .then((res) => res.json())
    .then((data) => setBusList(data))
    .catch((error) => {
      console.log("error: " + error);
    });
};

  

  const exchange = () => {
    var temp = source;
    setSource(destination);
    setDestination(temp);
  };
  const search = () => {
    setVar(variable + 1);
  };

  return (
    <>
      <div
        className="main"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ad6VFkCoJOIHJFGrSljvfc1LcnYKzCuUkA&usqp=CAU")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="mainbox">
          <div>
            <div>
              <input
                type="text"
                id="source"
                name="source"
                placeholder="From"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqTFeoAjbWn3mlI6UX1UuxdKxX1w40MBHVg&usqp=CAU"
              width="40px"
              onClick={exchange}
              alt="exchange"
            />
          </div>
          <div>
            <div>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="To"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="date"
                id="date"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button class="search" onClick={search}>
              search buses
            </button>
          </div>
        </div>
      </div>

      <BusList busList={busList} />
    </>
  );
};

export default Home;
