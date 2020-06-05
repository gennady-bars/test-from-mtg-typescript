import { SET_MODAL_OPEN, SET_ALERT_SHOWN } from "../actions/actionTypes";

const initialState = {
  isOpen: false,
  alert: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return { ...state, isOpen: action.isOpen };
    case SET_ALERT_SHOWN:
      return { ...state, alert: action.isShown };
    default:
      return state;
  }
};

export default modalReducer;
