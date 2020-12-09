import { CREATE_PIE, FETCH_PIE, UPDATE_PIE, FETCH_PIES } from "../actions/types";

const initialState = {
  pie: {},
  pies: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PIE:
      return {
        ...state,
        pie: action.payload
      };
    case UPDATE_PIE:
      return {
        ...state,
        pie: action.payload
      };
    case CREATE_PIE:
      return {
        ...state,
        pie: action.payload
      };
    case FETCH_PIES:
      return {
        ...state,
        pies: action.payload
      };
    default:
      return state
  }
}