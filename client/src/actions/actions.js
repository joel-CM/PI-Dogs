// import axios from "axios";

//todo: Actioms Types -------------------<>>>
export const GET_DOGS = "temperament,weight";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_DOGS_CREATE = "GET_DOGS_CREATE";
export const PAG_LEFT = "PAG_LEFT";
export const PAG_RIGHT = "PAG_RIGHT";
export const ORDER_BY_WEIGHT_ASC = "ORDER_BY_WEIGHT_ASC";
export const ORDER_BY_WEIGHT_DES = "ORDER_BY_WEIGHT_DES";
export const ORDER_BY_TEMPERAMENT_ASC = "ORDER_BY_TEMPERAMENT_ASC";
export const ORDER_BY_TEMPERAMENT_DES = "ORDER_BY_TEMPERAMENT_DES";

//todo ->>> Actiosn <<----------------->>
export function getDogs() {
  return function (dispatch) {
    return fetch("http://localhost:3001/api/dogs")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_DOGS,
          payload: data,
        });
      });
  };
}

export function getDogById(race) {
  return function (dispatch) {
    if (race) {
      return fetch("http://localhost:3001/api/dogs?name=" + race)
        .then((res) => res.json())
        .then((race) => {
          dispatch({
            type: GET_DOG_BY_ID,
            payload: race,
          });
        });
    } else {
      return fetch("http://localhost:3001/api/dogs")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: GET_DOGS,
            payload: data,
          });
        });
    }
  };
}

export function getDogsCreated() {
  return {
    type: GET_DOGS_CREATE,
  };
}

export function pagLeft() {
  return {
    type: PAG_LEFT,
  };
}

export function pagRight() {
  return {
    type: PAG_RIGHT,
  };
}

export function orderByWeightAsc() {
  return {
    type: ORDER_BY_WEIGHT_ASC,
  };
}

export function orderByWeightDes() {
  return {
    type: ORDER_BY_WEIGHT_DES,
  };
}

export function orderByTemperamentAsc() {
  return {
    type: ORDER_BY_TEMPERAMENT_ASC,
  };
}

export function orderByTemperamentDes() {
  return {
    type: ORDER_BY_TEMPERAMENT_DES,
  };
}
