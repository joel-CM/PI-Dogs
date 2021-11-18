// import axios from "axios";

//todo: Actioms Types -------------------<>>>
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_QUERY = "GET_DOG_BY_QUERY";
export const GET_DOGS_CREATE = "GET_DOGS_CREATE";
export const PAG_LEFT = "PAG_LEFT";
export const PAG_RIGHT = "PAG_RIGHT";
export const ORDER_BY_WEIGHT_ASC = "ORDER_BY_WEIGHT_ASC";
export const ORDER_BY_WEIGHT_DES = "ORDER_BY_WEIGHT_DES";
export const ORDER_BY_TEMPERAMENT_ASC = "ORDER_BY_TEMPERAMENT_ASC";
export const ORDER_BY_TEMPERAMENT_DES = "ORDER_BY_TEMPERAMENT_DES";
export const ORDER_BY_BREED_ASC = "ORDER_BY_BREED_ASC";
export const ORDER_BY_BREED_DES = "ORDER_BY_BREED_DES";
export const FILTER_BY_SELECT = "FILTER_BY_SELECT";
export const GET_TMPS = "GET_TMPS";
export const GET_ONLY_DOGS_BD = "GET_ONLY_DOGS_BD";
export const NEW_FILTER = "NEW_FILTER";

//todo ->>> Actiosn <<----------------->>
export function getDogs() {
  return function (dispatch) {
    return fetch("http://pi-dog-back.herokuapp.com/api/dogs")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_DOGS,
          payload: data,
        });
      });
  };
}

export function getDogByQuery(breed) {
  return function (dispatch) {
    if (breed) {
      return fetch("http://pi-dog-back.herokuapp.com/api/dogs?name=" + breed)
        .then((res) => res.json())
        .then((breed) => {
          dispatch({
            type: GET_DOG_BY_QUERY,
            payload: breed,
          });
        });
    } else {
      return fetch("http://pi-dog-back.herokuapp.com/api/dogs")
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

export function orderByBreedAsc() {
  return {
    type: ORDER_BY_BREED_ASC,
  };
}

export function orderByBreedDes() {
  return {
    type: ORDER_BY_BREED_DES,
  };
}

export function filterBySelect(breed) {
  return {
    type: FILTER_BY_SELECT,
    payload: { breed: breed },
  };
}

export function getTmps() {
  return async function (dispatch) {
    await fetch("http://pi-dog-back.herokuapp.com/api/temperaments")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_TMPS,
          payload: data.results,
        });
      });
  };
}

export function getDogsOnlyDb() {
  return {
    type: GET_ONLY_DOGS_BD,
  };
}

export function newFilter() {
  return {
    type: NEW_FILTER,
  };
}
