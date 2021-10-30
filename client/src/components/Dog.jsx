import React from "react";
import style from "./Dog.module.css";

const Dog = ({ dog }) => {
  return (
    <div key={dog.id} className={style.card}>
      <h4 className={style.title}>{dog.name}</h4>
      <div className={style.dogImg}>
        <img src={dog.image} className={style.image} alt={dog.name} />
      </div>
      <div className={style.temp}>
        <p>
          {" "}
          <span> Temperament: </span>
          {dog.temperament}
        </p>
      </div>
      <div className={style.weight}>
        <p>
          <span>Weight: </span>
          {dog.weight}
        </p>
      </div>
    </div>
  );
};

export default Dog;
