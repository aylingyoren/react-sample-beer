import React from "react";
import { Beer } from "../../interface";
import "./BeerCard.css";

// specify the props!!!!!

function BeerCard(props: any): JSX.Element {
  return <div>{props.children}</div>;
}

export default BeerCard;
