import React from "react";
import style from "./Operaciones.module.css";
import { connect } from "react-redux";

import { getDogsCreated, getDogs } from "../actions/actions";

const Operaciones = ({ getDogsCreated, getDogs }) => {
  const dogsCreated = () => {
    getDogsCreated();
  };

  const allDogs = () => {
    getDogs();
  };

  return (
    <div className={style.operationContainer}>
      <div className="controllerPag">
        <button onClick={dogsCreated}>Dogs Created</button>
        <button onClick={allDogs}>All Dogs</button>
      </div>
    </div>
  );
};

export default connect(null, { getDogsCreated, getDogs })(Operaciones);
