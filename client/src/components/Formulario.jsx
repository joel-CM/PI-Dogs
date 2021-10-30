import React, { useEffect, useState } from "react";
import style from "./Formulario.module.css";
import axios from "axios";

const Formulario = ({ tmps, getTemperaments }) => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/temperaments")
      .then((res) => res.json())
      .then((data) => {
        setstate(data.results);
      });
  }, []);

  // todo. temperamentos <<<------->>>
  // const [temps, setTmps] = useState([]);

  // const handleTemps = (e) => {
  //   setTmps((prev) => prev.push(e.target.value));
  // };

  const [input, setInput] = useState({
    name: "",
    max_height: 0,
    min_height: 0,
    max_weight: 0,
    min_weight: 0,
    max_life_span: 0,
    min_life_span: 0,
    temperament: [],
  });

  const handleInput = (e) => {
    setInput(() => {
      if (e.target.name !== "temperament") {
        console.log(e.target.name);
        return {
          ...input,
          [e.target.name]: e.target.value,
        };
      } else {
        console.log(e.target.value);
        return {
          ...input,
          [e.target.name]: [...input.temperament, e.target.value],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = {
      name: input.name,
      height: parseInt(input.min_height) + parseInt(input.max_height) / 2,
      weight: parseInt(input.min_weight) + parseInt(input.max_weight) / 2,
      life_span:
        parseInt(input.min_life_span) + parseInt(input.max_life_span) / 2,
      temperament: input.temperament,
    };
    await axios.post("http://localhost:3001/api/dogs", newDog);
    alert("perro creado (creo...)");
  };

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Race"
          onChange={handleInput}
          value={input.name}
        />
        <div className={style.height}>
          <input
            type="number"
            name="min_height"
            placeholder="Min Height"
            onChange={handleInput}
            value={input.min_height}
          />
          <input
            type="number"
            name="max_height"
            placeholder="Max Height"
            onChange={handleInput}
            value={input.max_height}
          />
        </div>
        <div className={style.weight}>
          <input
            type="number"
            name="min_weight"
            placeholder="Min Weight"
            onChange={handleInput}
            value={input.min_weight}
          />
          <input
            type="number"
            name="max_weight"
            placeholder="Max Weight"
            onChange={handleInput}
            value={input.max_weight}
          />
        </div>
        <div className={style.life_span}>
          <input
            type="number"
            name="min_life_span"
            placeholder="Min Life Span"
            onChange={handleInput}
            value={input.min_life_span}
          />
          <input
            type="number"
            name="max_life_span"
            placeholder="Max Life Span"
            onChange={handleInput}
            value={input.max_life_span}
          />
        </div>
        <select name="temperament" onChange={handleInput}>
          {state?.map((tmp) => (
            <option key={tmp.id} value={tmp.name}>
              {" "}
              {tmp.name}{" "}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Formulario;
