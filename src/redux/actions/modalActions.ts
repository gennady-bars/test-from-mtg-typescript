import { SET_MODAL_OPEN, SET_ALERT_SHOWN } from "./actionTypes";

export type ModalActionTypes = SetModalActionType | SetAlertActionType;

type SetModalActionType = { type: typeof SET_MODAL_OPEN; isOpen: boolean };
export const setModal = (isOpen: boolean): SetModalActionType => {
  return {
    type: SET_MODAL_OPEN,
    isOpen,
  };
};

type SetAlertActionType = { type: typeof SET_ALERT_SHOWN; isShown: boolean };
export const setAlert = (isShown: boolean): SetAlertActionType => {
  return {
    type: SET_ALERT_SHOWN,
    isShown,
  };
};
