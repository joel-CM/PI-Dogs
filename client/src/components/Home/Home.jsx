import React, { useEffect } from "react";
import style from "./Home.module.css";
import Dogs from "../Dogs/Dogs";
import Operaciones from "../Operaciones/Operaciones";
import Search from "../Search/Search";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../../actions/actions"; //actions
import { GiDogHouse } from "react-icons/gi"; // icons

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
        <Link to="/" className={style.linkInicio}>
          <GiDogHouse className={style.inicio} />
        </Link>
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
