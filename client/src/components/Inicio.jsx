import React from "react";
import style from "./Inicio.module.css";
import { NavLink } from "react-router-dom";

import { BsArrowBarRight } from "react-icons/bs";

const Inicio = () => {
  return (
    <div className={style.container}>
      <button className={style.btn_link}>
        <span>
          <BsArrowBarRight className={style.icon} />
        </span>
        <NavLink to="/home" className={style.link}>
          GET START
        </NavLink>
      </button>
    </div>
  );
};

export default Inicio;
