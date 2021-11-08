import React, { useState, useEffect } from "react";
import Dog from "../Dog/Dog";
import Btn from "../BtnPaginado/BtnPaginado";
import style from "./Dogs.module.css";
import { connect } from "react-redux";

//todo: actions
import { pagLeft, pagRight } from "../../actions/actions";

//todo: componente <<<<--->>>
const Dogs = ({ dogs, pInicio, pFinal, pagLeft, pagRight }) => {
  //todo: nuevo state de dogs
  const [myDogs, setMyDogs] = useState([]);

  useEffect(() => {
    setMyDogs(dogs?.slice(pInicio, pFinal));
  }, [dogs, pInicio, pFinal]);

  return (
    <div className={style.dogs}>
      {/* //todo: paginado superior <-----------> */}
      <Btn
        dogs={dogs}
        pInicio={pInicio}
        pFinal={pFinal}
        pagRight={pagRight}
        pagLeft={pagLeft}
      />

      <div className={style.dogContainer}>
        {myDogs?.length >= 1 ? (
          myDogs.map((dog) => <Dog key={dog.id} dog={dog} />)
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>

      {/* //todo: paginado inferior <-----------> */}
      <Btn
        dogs={dogs}
        pInicio={pInicio}
        pFinal={pFinal}
        pagRight={pagRight}
        pagLeft={pagLeft}
      />
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
