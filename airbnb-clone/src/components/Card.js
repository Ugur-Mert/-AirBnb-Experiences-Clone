import React from "react";

import Star from "../images/Star 1.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={`images/${props.img}`} alt="kazie" />
      <div className="card-stats">
        <img className="star-logo" src={Star} alt="star lgo" />
        <span>{props.rating}</span>
        <span className="grey">{props.reviewCount} · </span>
        <span className="grey">{props.country}</span>
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
