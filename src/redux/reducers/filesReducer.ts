import {
  SET_FILES,
  SET_LOADING_FILES,
  GET_FILES_ERROR,
  SET_LOADING_CONTENTS,
  GET_CONTENTS_SUCCESS,
  GET_CONTENTS_ERROR,
} from "../actions/actionTypes";

type AddressType = {
  loading: boolean;
  error: any;
  file: object | null;
};

const initialState = {
  files: [] as Array<object>,
  loading: true,
  error: null as any,
  activeFile: {
    loading: false,
    error: null,
    file: null,
  } as AddressType,
};

export type initialStateType = typeof initialState;

const filesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FILES:
      return { ...state, files: action.files, loading: false, error: null };
    case SET_LOADING_FILES:
      return { ...state, loading: true, error: null };
    case GET_FILES_ERROR:
      return { ...state, loading: false, error: action.error };
    case SET_LOADING_CONTENTS:
      return {
        ...state,
        activeFile: { ...state.activeFile, loading: true, error: null },
      };
    case GET_CONTENTS_SUCCESS:
      return {
        ...state,
        activeFile: {
          ...state.activeFile,
          file: action.file,
          loading: false,
          error: null,
        },
      };
    case GET_CONTENTS_ERROR:
      return {
        ...state,
        activeFile: {
          ...state.activeFile,
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default filesReducer;
