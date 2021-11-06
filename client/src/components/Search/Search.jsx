import React, { useState } from "react";
import style from "./Search.module.css";
import { connect } from "react-redux";
// todo. actions
import { getDogByQuery } from "../../actions/actions";

//todo: icons
import { FaSearch } from "react-icons/fa";

const Formulario = ({ getDogByQuery }) => {
  const [state, setstate] = useState("");

  //todo -> busqueda en "vivo"
  const handleChange = (e) => {
    setstate((prevValue) => (prevValue = e.target.value));
    getDogByQuery(state);
  };

  //todo -> busqueda normal
  const handleSubmit = (e) => {
    e.preventDefault();
    getDogByQuery(state);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={style.flex}>
        <input
          type="text"
          placeholder="Ej: Cocker Spaniel..."
          onChange={handleChange}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default connect(null, { getDogByQuery })(Formulario);
