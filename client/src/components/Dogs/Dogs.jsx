import React, { useState, useEffect } from "react";
import Dog from "../Dog/Dog";
import Btn from "../BtnPaginado/BtnPaginado";
import style from "./Dogs.module.css";
import load from "../../gifs/loading.gif";
import notFound from "../../gifs/dogNotFound-2.gif"
import { connect } from "react-redux";

//todo: actions
import { getDogs, pagLeft, pagRight } from "../../actions/actions";

//todo: componente <<<<--->>>
const Dogs = ({ getDogs, dogs, pInicio, pFinal, pagLeft, pagRight }) => {
  //todo: nuevo state de dogs
  const [myDogs, setMyDogs] = useState([]);

  useEffect(() => {
    getDogs()
  }, [getDogs])

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
        {myDogs[0]?.message && (
          <div className={style.notFoundContainer}>
            <h2> {myDogs[0].message} </h2>
            <img className={style.notFound} src={notFound} alt="NotFound" />
          </div>
        )}
        {
          myDogs?.length >= 1 && !myDogs[0]?.message ? (
            myDogs.map((dog) => <Dog key={dog.id} dog={dog} />)
          ) : myDogs?.length === 0 && (<div className={style.loadContainer}>
            <img className={style.loading} src={load} alt="cargando..." />
          </div>)
        }
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
  dogs_filtered: state.dogs_filtered,
  pInicio: state.pInicio,
  pFinal: state.pFinal,
});

// todo: conectamos con la store
export default connect(mapStatetoProps, { getDogs, pagLeft, pagRight })(Dogs);
// export default connect(estados, acciones)(Dogs);
