import React, { useState, useEffect } from "react";
import Dog from "./Dog";
import style from "./Dogs.module.css";
import { connect } from "react-redux";

//todo: actions
import { pagLeft, pagRight } from "../actions/actions";

//todo: icons <<--->>
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

//todo: componente <<<<--->>>
const Dogs = ({ dogs, pInicio, pFinal, pagLeft, pagRight }) => {
  //todo: nuevo state de dogs
  const [myDogs, setMyDogs] = useState([]);

  useEffect(() => {
    setMyDogs(dogs.slice(pInicio, pFinal));
  }, [dogs, pInicio, pFinal]);

  return (
    <div className={style.dogs}>
      {/* //todo: paginado <-----------> */}
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
          disabled={pFinal > dogs.length - 1 && true}
          onClick={() => pagRight()}
        >
          <IoIosArrowDroprightCircle className={style.iconRight} />
        </button>
      </div>

      <div className={style.dogContainer}>
        {myDogs.length >= 1 ? (
          myDogs.map((dog) => <Dog key={dog.id} dog={dog} />)
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>

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
          disabled={pFinal > dogs.length - 1 && true}
          onClick={() => pagRight()}
        >
          <IoIosArrowDroprightCircle className={style.iconRight} />
        </button>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  dogs: state.dogs,
  pInicio: state.pInicio,
  pFinal: state.pFinal,
});

// todo: conectamos con la store
export default connect(mapStatetoProps, { pagLeft, pagRight })(Dogs);
// export default connect(estados, acciones)(Dogs);
