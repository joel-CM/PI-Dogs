import {
  GET_DOGS,
  GET_DOG_BY_QUERY,
  GET_DOGS_CREATE,
  PAG_LEFT,
  PAG_RIGHT,
  ORDER_BY_WEIGHT_ASC,
  ORDER_BY_WEIGHT_DES,
  ORDER_BY_TEMPERAMENT_ASC,
  ORDER_BY_TEMPERAMENT_DES,
  ORDER_BY_BREED_ASC,
  ORDER_BY_BREED_DES,
  FILTER_BY_SELECT,
  GET_TMPS,
  GET_ONLY_DOGS_BD,
  NEW_FILTER,
} from "../actions/actions";

const initialState = {
  pInicio: 0,
  pFinal: 8,
  dogs: [],
  dogs_loaded: [],
  tmps: [],
};

export default function reducer(state = initialState, action) {
  //todo: traigo los perros ##########################################
  if (action.type === GET_DOGS) {
    return {
      ...state,
      dogs_loaded: action.payload,
      dogs: [...state.dogs_loaded],
    };
  }

  //todo: traigo los temperamentos ###################################
  if (action.type === GET_TMPS) {
    return {
      ...state,
      tmps: action.payload,
    };
  }

  //todo: traigo los perros creados (de mi base de datos) ##############
  if (action.type === GET_DOGS_CREATE) {
    console.log("dogs creadogs");
    return {
      ...state,
      pInicio: (state.pInicio = 0),
      pFinal: (state.pFinal = 8),
      dogs: state.dogs_loaded?.filter((dog) => dog.createdInDb === true),
    };
  }

  //todo: traigo los perros por query ###########################################
  if (action.type === GET_DOG_BY_QUERY) {
    return {
      ...state,
      dogs: [{ ...action.payload }],
      pInicio: (state.pInicio = 0),
      pFinal: (state.pFinal = 8),
    };
  }

  //todo: Ordeno por peso ##################################################
  if (action.type === ORDER_BY_WEIGHT_ASC) {
    const dogsByWeightAsc = [...state.dogs];
    return {
      ...state,
      // dogs: action.payload.sort((a, b) => (b.weight > a.weight ? -1 : 1)),
      dogs: dogsByWeightAsc.sort((a, b) =>
        parseFloat(b.weight.split("-")[0]) +
          parseFloat(b.weight.split("-")[1]) >
        parseFloat(a.weight.split("-")[0]) + parseFloat(a.weight.split("-")[1])
          ? -1
          : 1
      ),
    };
  }
  if (action.type === ORDER_BY_WEIGHT_DES) {
    const dogsByWeightDes = [...state.dogs];
    return {
      ...state,
      // dogs: action.payload.sort((a, b) => (b.weight > a.weight ? -1 : 1)),
      dogs: dogsByWeightDes.sort((a, b) =>
        parseFloat(b.weight.split("-")[0]) +
          parseFloat(b.weight.split("-")[1]) >
        parseFloat(a.weight.split("-")[0]) + parseFloat(a.weight.split("-")[1])
          ? 1
          : -1
      ),
    };
  }

  //todo: ordeno por temperamento #########################################
  if (action.type === ORDER_BY_TEMPERAMENT_ASC) {
    const dogsByTmpAsc = [...state.dogs];
    return {
      ...state,
      dogs: dogsByTmpAsc.sort((a, b) =>
        a.temperament > b.temperament ? 1 : -1
      ),
    };
  }
  if (action.type === ORDER_BY_TEMPERAMENT_DES) {
    const dogsByTmpDes = [...state.dogs];
    return {
      ...state,
      dogs: dogsByTmpDes.sort((a, b) =>
        a.temperament > b.temperament ? -1 : 1
      ),
    };
  }

  //todo: ordeno por raza ################################################
  if (action.type === ORDER_BY_BREED_ASC) {
    const dogsByBreedAsc = [...state.dogs];
    return {
      ...state,
      dogs: dogsByBreedAsc.sort((a, b) => (a.name > b.name ? 1 : -1)),
    };
  }

  if (action.type === ORDER_BY_BREED_DES) {
    const dogsByBreedDes = [...state.dogs];
    return {
      ...state,
      dogs: dogsByBreedDes.sort((a, b) => (a.name > b.name ? -1 : 1)),
    };
  }

  //todo: paginado hacia la izquierda #######################################
  if (action.type === PAG_LEFT) {
    return {
      ...state,
      pInicio: state.pInicio - 8,
      pFinal: state.pFinal - 8,
    };
  }

  //todo: paginado hacia la derecha ############################################
  if (action.type === PAG_RIGHT) {
    return {
      ...state,
      pInicio: state.pInicio + 8,
      pFinal: state.pFinal + 8,
    };
  }

  //todo: filtrado por temperamento ################################################
  if (action.type === FILTER_BY_SELECT) {
    if (action.payload.breed !== "none") {
      const filterBySelect = [...state.dogs_loaded];
      const filtered = filterBySelect?.filter((dog) => {
        if (dog.temperament !== undefined && dog.temperament !== "") {
          if (dog.temperament.includes(action.payload.breed)) return dog;
        }
        return null;
      });
      return {
        ...state,
        dogs: filtered,
        pInicio: (state.pInicio = 0),
        pFinal: (state.pFinal = 8),
      };
    } else {
      return {
        ...state,
        dogs: state.dogs_loaded,
        pInicio: (state.pInicio = 0),
        pFinal: (state.pFinal = 8),
      };
    }
  }

  if (action.type === GET_ONLY_DOGS_BD) {
    console.log("nuevo filtro");
    return {
      ...state,
      dogs: state.dogs_loaded.filter((dog) => {
        if (typeof dog.id === "number") return dog;
      }),
      pInicio: (state.pInicio = 0),
      pFinal: (state.pFinal = 8),
    };
  }

  if (action.type === NEW_FILTER) {
    console.log("nuevo filtro_2");
    return {
      ...state,
      dogs: state.dogs_loaded.filter((dog) => {
        let weight_1 = parseFloat(dog.weight.split("-")[0]);
        let weight_2 = parseFloat(dog.weight.split("-")[1]);
        let promedio = (weight_1 + weight_2) / 2;
        if (promedio > 50) return dog;
      }),
      pInicio: (state.pInicio = 0),
      pFinal: (state.pFinal = 8),
    };
  }
  return state;
}
