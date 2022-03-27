import React from "react";
import Pics from "../images/Group-77.png";
export default function Hero() {
  return (
    <section className="hero">
      <img className="pics-group" src={Pics} alt="Group pic" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
