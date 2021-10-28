// import axios from "axios";

//todo: Actioms Types -------------------<>>>
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_BY_ID = "GET_DOG_BY_ID";
export const GET_DOGS_CREATE = "GET_DOGS_CREATE";
export const PAG_LEFT = "PAG_LEFT";
export const PAG_RIGHT = "PAG_RIGHT";

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
