import { combineReducers } from "redux";
import filesReducer from "./filesReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  files: filesReducer,
  modal: modalReducer
});

export default rootReducer;
