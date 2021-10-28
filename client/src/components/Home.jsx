import React, { useEffect } from "react";
import style from "./Home.module.css";
import Search from "./Search";
import Dogs from "./Dogs";
import Operaciones from "./Operaciones";

import { connect } from "react-redux";
import { getDogs } from "../actions/actions";

const Home = ({ getDogs }) => {
  useEffect(() => {
    getDogs();
  }, [getDogs]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className="title-container">
          <h1 className={style.title}>Henry Dogs - Home</h1>
        </div>

        <Operaciones />

        <Search />
      </div>

      {/* //todo: dogs <<------>>*/}
      <Dogs />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dogs: state.dogs,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDogs: (dogs) => dispatch(getDogs(dogs)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
