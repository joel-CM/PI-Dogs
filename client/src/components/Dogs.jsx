import React, { useState, useEffect } from "react";
import style from "./Dogs.module.css";
import { connect } from "react-redux";

import { pagLeft, pagRight } from "../actions/actions";

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
        <button disabled={pInicio < 1 && true} onClick={() => pagLeft()}>
          ver menos
        </button>
        <button
          disabled={pFinal > dogs.length - 1 && true}
          onClick={() => pagRight()}
        >
          ver más →
        </button>
      </div>

      <div className={style.dogContainer}>
        {myDogs?.map((dog) => (
          <div key={dog.id} className={style.card}>
            <h4 className={style.title}>{dog.name}</h4>
            <div className={style.dogImg}>
              <img src={dog.image} className={style.image} alt={myDogs.name} />
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
        ))}
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  dogs: state.dogs,
  pInicio: state.pInicio,
  pFinal: state.pFinal,
});

export default connect(mapStatetoProps, { pagLeft, pagRight })(Dogs);
// export default connect(estados, acciones)(Dogs);
