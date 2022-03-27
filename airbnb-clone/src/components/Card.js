import React from "react";
import Kazie from "../images/image-12.png";
import Star from "../images/Star 1.png";

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={Kazie} alt="kazie" />
      <div className="card-stats">
        <img className="star-logo" src={Star} alt="star lgo" />
        <span>5.0</span>
        <span className="grey">(6) ·</span>
        <span className="grey">USA</span>
        <div>
          <p>Life lessons with Katie Zaferes</p>
          <p>
            <b>From $136</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
