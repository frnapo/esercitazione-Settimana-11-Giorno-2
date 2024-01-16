import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
const fetchDataSuccess = (data) => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchDataFailure = (error) => ({ type: FETCH_DATA_FAILURE, payload: error });

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=`);
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
