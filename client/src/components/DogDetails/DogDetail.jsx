import React, { useEffect, useState } from "react";
import style from "./DogDetail.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

const DogDetail = ({ dogs }) => {
  let params = useParams();

  const [dogDetail, setDogDetail] = useState({});

  useEffect(() => {
    const dogFiltered = dogs.find(
      (dog) => dog.id.toString() === params.id.toString()
    );
    setDogDetail(dogFiltered);
  }, [dogs, params.id]);

  return (
    <div className={style.detailContainer}>
      <button className={style.btn}>
        <NavLink to="/home" className={style.navLink}>
          {" "}
          <span className={style.link}> BACK </span>
        </NavLink>
      </button>

      <div className={style.container}>
        <div className={style.containerImage}>
          <img
            src={dogDetail.image ? dogDetail.image : null}
            className={style.image}
            alt={dogDetail.image ? dogDetail.image : null}
          />
        </div>
        <div className={style.dogInfo}>
          <h4>{dogDetail?.name}</h4>
          <p>
            <b>Height: </b> {dogDetail?.height}{" "}
          </p>
          <p>
            <b>Weight: </b> {dogDetail?.weight}
          </p>
          <p>
            <b>Life Span: </b> {dogDetail?.life_span}
          </p>
          <p>
            <b>Temperament: </b> {dogDetail?.temperament}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dogs: state.dogs,
});

export default connect(mapStateToProps, null)(DogDetail);
