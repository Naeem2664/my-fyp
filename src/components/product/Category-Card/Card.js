import React from "react";
import './Card.css'
import { Men_Category } from "../../../assets/images/images";

export default function Card({image,title}) {
  return (
    <>
      <div className="card text-white">
        <img src={image} class="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            reiciendis nostrum expedita voluptatum dolorem, placeat tempore esse
            dolor nam quaerat!
          </p>
        </div>
      </div>
    </>
  );
}
