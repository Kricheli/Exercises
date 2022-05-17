import React, { Component } from "react";
import ReactDom from "react-dom/client";
import Buttons from "./buttons";
import CardContent from "./CardContent";
import Faker from "@faker-js/faker";
import Counter from './counter'
import HideAndSeek from './HideAndSeek'
import RangeCounter from './RangeCounter';

class App extends React.Component{
  render(){
  return (
    <div className="page">
      {/* ========================================== buttons ============================== */}
      <div className="buttons">
        <Buttons />
        {/* ========================================= cards ================================ */}
        <div className="cards">
          <CardContent img={Faker.image.abstract()}
            header="Tel Aviv"
            text="sunny"
            firstLink="share"
            secondLink="exit"
          />

            <CardContent
            img={Faker.image.animals()}
            header="Animal"
            text="cute"
            firstLink="share"
            secondLink="exit"
          />

            <CardContent
            img={Faker.image.fashion()}
            header="Clothes"
            text="Fashionable"
            firstLink="share"
            secondLink="exit"
          />
          <Counter/>
          
          <HideAndSeek />

          <RangeCounter />

        </div>
      </div>
    </div>
  );
  };
};


const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
