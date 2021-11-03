import React, { useEffect } from "react";
import style from "./Home.module.css";
import Dogs from "./Dogs";
import Operaciones from "./Operaciones";
import Search from "./Search";

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
      </div>

      {/* //todo: Search input */}
      <Search />

      {/* //todo: dogs <<------>>*/}
      <Dogs />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   dogs: state.dogs,
// });

const mapDispatchToProps = (dispatch) => {
  return {
    getDogs: (dogs) => dispatch(getDogs(dogs)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
