import React from "react";
import style from "./Inicio.module.css";
import { Link } from "react-router-dom";

import { BsArrowBarRight } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GiDogHouse } from "react-icons/gi";

const Inicio = () => {
  return (
    // titulo
    <div className={style.container}>
      <div className={style.titulo}>
        <h1>
          Henry Dogs <GiDogHouse />
        </h1>
      </div>

      {/* tecnologias */}
      <div className={style.techContainer}>
        <h3 className={style.techTitle}>TECH</h3>
        <div className={style.tech}>
          <FaReact className={style.tec_icon_1} />
          <SiRedux className={style.tec_icon_2} />
          <IoLogoJavascript className={style.tec_icon_3} />
        </div>
      </div>

      <button className={style.btn_link}>
        <span>
          <BsArrowBarRight className={style.icon} />
        </span>
        <Link to="/home" className={style.link}>
          GET START
        </Link>
      </button>
    </div>
  );
};

export default Inicio;
