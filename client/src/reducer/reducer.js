import {
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOGS_CREATE,
  PAG_LEFT,
  PAG_RIGHT,
  ORDER_BY_WEIGHT_ASC,
  ORDER_BY_WEIGHT_DES,
} from "../actions/actions";

const initialState = {
  pInicio: 0,
  pFinal: 8,
  dogs: [],
  temperamentos: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === GET_DOGS) {
    return {
      ...state,
      dogs: action.payload,
    };
  }
  if (action.type === ORDER_BY_WEIGHT_ASC) {
    const dogsByWeightAsc = [...state.dogs];
    return {
      ...state,
      // dogs: action.payload.sort((a, b) => (b.weight > a.weight ? -1 : 1)),
      dogs: dogsByWeightAsc.sort((a, b) => (b.weight > a.weight ? -1 : 1)),
    };
  }
  if (action.type === ORDER_BY_WEIGHT_DES) {
    const dogsByWeightDes = [...state.dogs];
    return {
      ...state,
      // dogs: action.payload.sort((a, b) => (b.weight > a.weight ? -1 : 1)),
      dogs: dogsByWeightDes.sort((a, b) => (b.weight > a.weight ? 1 : -1)),
    };
  }
  if (action.type === GET_DOG_BY_ID) {
    return {
      ...state,
      dogs: [{ ...action.payload }],
    };
  }
  if (action.type === GET_DOGS_CREATE) {
    console.log("dogs creadogs");
    return {
      ...state,
      pInicio: (state.pInicio = 0),
      pFinal: (state.pFinal = 8),
      dogs: state.dogs.filter((dog) => dog.createdInDb === true),
    };
  }
  if (action.type === PAG_LEFT) {
    return {
      ...state,
      pInicio: state.pInicio - 8,
      pFinal: state.pFinal - 8,
    };
  }
  if (action.type === PAG_RIGHT) {
    return {
      ...state,
      pInicio: state.pInicio + 8,
      pFinal: state.pFinal + 8,
    };
  }
  return state;
}
