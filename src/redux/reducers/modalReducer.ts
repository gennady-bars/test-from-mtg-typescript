import { SET_MODAL_OPEN, SET_ALERT_SHOWN } from "../actions/actionTypes";
import { ModalActionTypes } from "../actions/modalActions";

const initialState = {
  isOpen: false,
  alert: false,
};

export type InitialStateType = typeof initialState

const modalReducer = (state = initialState, action: ModalActionTypes): InitialStateType => {
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
