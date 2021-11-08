import React from "react";
import style from "./BtnPaginado.module.css"

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const BtnPaginado = ({dogs, pInicio, pFinal, pagRight, pagLeft }) => {
  return (
    <div className={style.paginations}>
      {/* //todo: pag left */}
      <button
        className={style.btn}
        disabled={pInicio < 1 && true}
        onClick={() => pagLeft()}
      >
        <IoIosArrowDropleftCircle className={style.iconLeft} />
      </button>

      {/* //todo: pag right */}
      <button
        className={style.btn}
        disabled={pFinal > dogs?.length - 1 && true}
        onClick={() => pagRight()}
      >
        <IoIosArrowDroprightCircle className={style.iconRight} />
      </button>
    </div>
  );
};

export default BtnPaginado;
