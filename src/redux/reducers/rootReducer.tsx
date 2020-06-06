import { combineReducers } from "redux";
import filesReducer from "./filesReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  files: filesReducer,
  modal: modalReducer
});

export type RootReducerType = typeof rootReducer;
// получаем возвращаемый тип нашего State из rootReducer-a
export type RootStateType = ReturnType<RootReducerType>

export default rootReducer;
