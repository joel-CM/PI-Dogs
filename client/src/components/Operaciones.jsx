import React from "react";
import style from "./Operaciones.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  getDogsCreated,
  getDogs,
  orderByWeightAsc,
  orderByWeightDes,
  orderByTemperamentAsc,
  orderByTemperamentDes,
} from "../actions/actions";

const Operaciones = ({
  getDogsCreated,
  getDogs,
  orderByWeightAsc,
  orderByWeightDes,
  orderByTemperamentAsc,
  orderByTemperamentDes,
}) => {
  const handleOperations = (e) => {
    if (e.target.value === "all_dogs") {
      return getDogs();
    } else if (e.target.value === "dogs_created") {
      return getDogsCreated();
    } else if (e.target.value === "order_by_weight_asc") {
      //todo -> order
      return orderByWeightAsc();
    } else if (e.target.value === "order_by_weight_des") {
      //todo -> order
      return orderByWeightDes();
    } else if (e.target.value === "order_by_tmp_asc") {
      return orderByTemperamentAsc();
    } else if (e.target.value === "order_by_tmp_des") {
      return orderByTemperamentDes();
    }
  };

  return (
    <div className={style.operationContainer}>
      <div className="getDogs">
        <b>Get Dogs: </b>
        <select onChange={handleOperations}>
          <option value="all_dogs">All Dogs</option>
          <option value="dogs_created">Dogs Created</option>
        </select>
      </div>

      <div className="orderBy">
        <b>order by: </b>
        <select onChange={handleOperations}>
          <option value="order_by_weight_asc">Order By Weight ASC</option>
          <option value="order_by_weight_des">Order By Weight DES</option>
          <option value="order_by_tmp_asc">Order By Temperament ASC</option>
          <option value="order_by_tmp_des">Order By Temperament DES</option>
        </select>
      </div>

      <div className={style.createDog}>
        <button className={style.btn_createDog}>
          <NavLink to="/create" className={style.link}>
            Ceate Dog
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default connect(null, {
  getDogsCreated,
  getDogs,
  orderByWeightAsc,
  orderByWeightDes,
  orderByTemperamentAsc,
  orderByTemperamentDes,
})(Operaciones);
