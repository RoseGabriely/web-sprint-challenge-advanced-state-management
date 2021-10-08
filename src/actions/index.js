import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchSuccess = (smurfsData) => {
  return { type: FETCH_SUCCESS, payload: smurfsData };
};
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        const dataArr = res.data;
        dataArr.map((smurf) => {
          return dispatch(fetchSuccess(smurf));
        });
      })
      .catch((err) => {
        dispatch(fetchFail("API call failed"));
      });
  };
};

export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};
export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};
