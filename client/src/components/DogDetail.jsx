import React, { useEffect, useState } from "react";
import style from "./DogDetail.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const DogDetail = ({ dogs }) => {
  let params = useParams();

  const [dogDetail, setDogDetail] = useState({});

  useEffect(() => {
    const dogFiltered = dogs.find((dog) => dog.id == params.id);
    setDogDetail(dogFiltered);
  }, [dogs, params.id]);

  return (
    <div className={style.detailContainer}>
      <div className={style.container}>
        <div className={style.containerImage}>
          <img
            src={dogDetail?.image}
            className={style.image}
            alt={dogDetail.image}
          />
        </div>
        <div className="dogInfo">
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