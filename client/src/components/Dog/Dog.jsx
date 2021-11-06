import React from "react";
import style from "./Dog.module.css";

import { Link } from "react-router-dom";

const Dog = ({ dog }) => {
  return (
    <div key={dog.id} className={style.card}>
      <Link className={style.link} to={`/home/${dog.id}/dog`}>
        <h4 className={style.title}>{dog.name}</h4>
      </Link>
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
