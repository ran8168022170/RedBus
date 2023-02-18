import React, { useState, useEffect } from "react";
import Cards from "../card/card";
import "./busList.css";

const BusList = ({ busList }) => {
  return (
    <div className="bus__list">
      <div class="super">
        <div class="main1">
          <div class="heading ">
            <h1>Sort By:</h1>
          </div>
          <div class="submain1">Departure</div>
          <div class="submain1">Arrival</div>
          <div class="submain1">Rating </div>
          <div class="submain1">Price</div>
        </div>
      </div>
      <div className="list__cards">
        {busList.map((bus) => (
          <Cards bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default BusList;
