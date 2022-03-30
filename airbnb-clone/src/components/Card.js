import React from "react";

import Star from "../images/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
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
          <p className="card-title">{props.title}</p>
          <p className="card-price">
            <b>From ${props.price}</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
