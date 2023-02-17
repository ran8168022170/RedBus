import React, { useState, useEffect } from "react";
import "./home.css";
import BusList from "../../components/BusList/busList";

const Home = () => {
  const [source, setSource] = useState("delhi");
  const [destination, setDestination] = useState("jaipur");
  const [date, setDate] = useState("");
  const [variable, setVar] = useState(1);

  const [busList, setBusList] = useState([
    // {
    //   id: "1",
    //   busName: "zing Bus",
    //   ticketPrice: "480",
    //   arrivalTime: "12:09AM",
    //   departureTime: "6:00PM",
    //   source: "jaipur",
    //   destination: "delhi",
    //   date: "2023-01-21",
    // },
  ]);
  console.log("source " + source);
  console.log("destination " + destination);

  useEffect(() => {
    getData();
  }, [variable]);

  const getData = () => {
    fetch(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}`
    )
      .then((res) => res.json())
      .then((data) => setBusList(data));
    // .catch((error) => {
    //   console.log("error: " + error);
    // });
  };

  const exchange = () => {
    console.log("hello");
    var temp = source;
    setSource(destination);
    setDestination(temp);
  };
  const search = () => {
    setVar(variable + 1);
  };

  // console.log(busList[0]);
  console.log(variable);

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
              <input type="date" id="date" placeholder="Date" />
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
