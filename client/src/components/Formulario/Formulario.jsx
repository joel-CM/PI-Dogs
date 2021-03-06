import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Formulario.module.css";
import axios from "axios";

const Formulario = ({ tmps, getTemperaments }) => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch("http://pi-dog-back.herokuapp.com/api/temperaments")
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
    image: "",
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
      height: input.min_height + " - " + input.max_height,
      weight: input.min_weight + " - " + input.max_weight,
      life_span: input.min_life_span + " - " + input.max_life_span,
      image: input.image,
      temperament: Array.from(new Set([...input.temperament])),
    };
    await axios.post("http://pi-dog-back.herokuapp.com/api/dogs", newDog);
    setInput({
      name: "",
      max_height: 0,
      min_height: 0,
      max_weight: 0,
      min_weight: 0,
      max_life_span: 0,
      min_life_span: 0,
      image: "",
      temperament: [],
    });
    alert("perro creado (creo...)");
  };

  let tmpSelected = Array.from(new Set([...input.temperament]))

  return (
    <div className={style.container}>
      <div className={style.back}>
        <button className={style.btnBack}>
          <NavLink to="/home" className={style.linkBack}>
            BACK
          </NavLink>{" "}
        </button>
      </div>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.dogName}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Breed"
            onChange={handleInput}
            value={input.name}
            required={true}
          />
        </div>
        <div className={style.height}>
          <div className={style.minHeight}>
            <label htmlFor="minHeight">Min Height</label>
            <input
              id="minHeight"
              type="number"
              name="min_height"
              placeholder="Min Height"
              onChange={handleInput}
              value={input.min_height}
              min={0}
              required={true}
            />
          </div>
          <div className={style.maxHeight}>
            <label htmlFor="maxHeight">Max Height</label>
            <input
              id="maxHeight"
              type="number"
              name="max_height"
              placeholder="Max Height"
              onChange={handleInput}
              value={input.max_height}
              min={0}
              required={true}
            />
          </div>
        </div>

        <div className={style.weight}>
          <div className={style.minWeight}>
            <label htmlFor="minWeight">Min Weight</label>
            <input
              id="minWeight"
              type="number"
              name="min_weight"
              placeholder="Min Weight"
              onChange={handleInput}
              value={input.min_weight}
              min={0}
              required={true}
            />
          </div>
          <div className={style.maxHeight}>
            <label htmlFor="maxWeight">Max Weight</label>
            <input
              id="maxWeight"
              type="number"
              name="max_weight"
              placeholder="Max Weight"
              onChange={handleInput}
              value={input.max_weight}
              min={0}
              required={true}
            />
          </div>
        </div>

        <div className={style.lifeSpan}>
          <div className={style.minLifeSpan}>
            <label htmlFor="minLifeSpan">Min Life span</label>
            <input
              id="minLifeSpan"
              type="number"
              name="min_life_span"
              placeholder="Min Life Span"
              onChange={handleInput}
              min={0}
              value={input.min_life_span}
            />
          </div>
          <div className={style.maxLifeSpan}>
            <label htmlFor="maxLifeSpan">Max Life Soan</label>
            <input
              id="maxLifeSpan"
              type="number"
              name="max_life_span"
              placeholder="Max Life Span"
              onChange={handleInput}
              min={0}
              value={input.max_life_span}
            />
          </div>
        </div>

        <div className={style.dogImage}>
          <label htmlFor="image">Paste URL</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="https://example/image.jpg"
            value={input.image}
            onChange={handleInput}
          />
        </div>

        <div className={style.dogSelectTmps}>
          <label htmlFor="selectTmps">Select Temperaments</label>
          <select
            id="selectTmps"
            name="temperament"
            value={input.temperament}
            onChange={handleInput}
            multiple={false}
          >
            {state?.map((tmp) => (
              <option key={tmp.id} value={tmp.name}>
                {tmp.name}
              </option>
            ))}
          </select>
        </div>

        {/* temps seleccionados */}
        <div>
          <select className={style.dogSelectTmps}>
            {
              tmpSelected?.map(tmp => (
                <option value={tmp}>{tmp}</option>
              ))
            }
          </select>
        </div>

        <div className={style.submit}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
