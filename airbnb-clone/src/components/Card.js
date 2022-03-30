import React from "react";

import Star from "../images/Star 1.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={`images/${props.coverImg}`}
        alt="kazie"
      />
      <div className="card-stats">
        <img className="star-logo" src={Star} alt="star lgo" />
        <span> {props.stats.rating}</span>
        <span className="grey"> ({props.stats.reviewCount}) · </span>
        <span className="grey">{props.location}</span>
        <div>
          <p>{props.title}</p>
          <p>
            <b>From ${props.price}</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
