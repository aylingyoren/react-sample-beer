import React, { useState } from "react";
import { Beer } from "../../API/interface";
import "./BeerCard.css";

// specify the props!!!!!

function BeerCard(props: any): JSX.Element {
  return <div className="beer-card">{props.children}</div>;
}

export default BeerCard;
