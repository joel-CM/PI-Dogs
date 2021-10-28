import React, { useState } from "react";
import style from "./Search.module.css";

import { connect } from "react-redux";

import { getDogById } from "../actions/actions";

const Formulario = ({ getDogById }) => {
  const [state, setstate] = useState("");

  //todo -> busqueda en "vivo"
  const handleChange = (e) => {
    setstate((prevValue) => (prevValue = e.target.value));
    getDogById(state);
  };

  //todo -> busqueda normal
  const handleSubmit = (e) => {
    e.preventDefault();
    getDogById(state);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={style.flex}>
        <input type="text" placeholder="Buscar" onChange={handleChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default connect(null, { getDogById })(Formulario);