import { CREATE_PIE, FETCH_PIE, UPDATE_PIE } from "../actions/types";

const initialState = {
  pie: {}
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
    default:
      return state
  }
}