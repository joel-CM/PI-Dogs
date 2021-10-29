import React, { useEffect, useState } from "react";
import style from "./Formulario.module.css";
import { connect } from "react-redux";

const Formulario = ({ tmps, getTemperaments }) => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/temperaments")
      .then((res) => res.json())
      .then((data) => {
        setstate(data.results);
      });
  }, []);

  const [input, setInput] = useState({
    name: "",
    max_height: null,
    min_height: null,
    max_weight: null,
    min_weight: null,
    max_life_span: "",
    min_life_span: "",
    temperament: [],
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.container}>
      <form className={style.formContainer}>
        <input
          type="text"
          name="name"
          placeholder="Race"
          onChange={handleInput}
        />
        <div className={style.height}>
          <input
            type="number"
            name="min_height"
            placeholder="Min Height"
            onChange={handleInput}
          />
          <input
            type="number"
            name="max_height"
            placeholder="Max Height"
            onChange={handleInput}
          />
        </div>
        <div className={style.weight}>
          <input
            type="number"
            name="min_weight"
            placeholder="Min Weight"
            onChange={handleInput}
          />
          <input
            type="number"
            name="max_weight"
            placeholder="Max Weight"
            onChange={handleInput}
          />
        </div>
        <div className={style.life_span}>
          <input
            type="number"
            name="min_life_span"
            placeholder="Min Life Span"
            onChange={handleInput}
          />
          <input
            type="number"
            name="max_life_span"
            placeholder="Max Life Span"
            onChange={handleInput}
          />
        </div>
        <select>
          {state?.map((tmp) => (
            <option key={tmp.id} value={tmp.name}>
              {" "}
              {tmp.name}{" "}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Formulario;
