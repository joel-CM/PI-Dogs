import React, { useState } from "react";
import style from "./Operaciones.module.css";
import { connect } from "react-redux";

import { getDogsCreated, getDogs, orderByWeight } from "../actions/actions";

const Operaciones = ({ getDogsCreated, getDogs, orderByWeight }) => {
  const dogsCreated = () => {
    getDogsCreated();
  };

  const allDogs = () => {
    getDogs();
  };

  const orderWeight = () => {
    orderByWeight();
  };

  return (
    <div className={style.operationContainer}>
      <div className="controllerPag">
        <button onClick={dogsCreated}>Dogs Created</button>
        <button onClick={allDogs}>All Dogs</button>
        <button onClick={orderWeight}>Order By Weight</button>
      </div>
    </div>
  );
};

export default connect(null, { getDogsCreated, getDogs, orderByWeight })(
  Operaciones
);
