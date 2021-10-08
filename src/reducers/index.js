import {
  FETCH_START,
  FETCH_FAIL,
  FETCH_SUCCESS,
  ADD_SMURF,
  SET_ERROR,
} from "../actions";
export const initialState = {
  smurfsArr: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        smurfsArr: [...state.smurfsArr, action.payload],
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfsArr: [...state.smurfsArr, action.payload],
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
