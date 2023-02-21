import React, { useState, useEffect } from "react";
import "./home.css";
import BusList from "../../components/BusList/busList";
import {getData} from '../../utils/service'
import bg_image from '../../images/redbus.png'

const Home = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [variable, setVar] = useState(1);
  //const [busList, setBusList] = useState([]);

  

  

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
          
          backgroundImage: `url(${bg_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="mainbox">
        {/* <img src={bg_image} /> */}
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

      <BusList 
      source={source}
      destination={destination}
      date={date}
      variable={variable}

      
       />
    </>
  );
};

export default Home;
