import { SET_MODAL_OPEN, SET_ALERT_SHOWN } from "./actionTypes";

export const setModal = (isOpen) => {
  return {
    type: SET_MODAL_OPEN,
    isOpen,
  };
};

export const setAlert = (isShown) => {
  return {
    type: SET_ALERT_SHOWN,
    isShown,
  };
};
