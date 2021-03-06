import { RootStateType } from './../reducers/rootReducer';
import { FileType } from './../../types';
import {
  SET_FILES,
  SET_LOADING_FILES,
  GET_FILES_ERROR,
  SET_LOADING_CONTENTS,
  GET_CONTENTS_SUCCESS,
  GET_CONTENTS_ERROR,
} from "./actionTypes";
import { ThunkAction } from 'redux-thunk';

const FAKE_DATABASE = {
  contents: [
    {
      id: 1,
      name: "file1",
      contents: `Повседневная практика показывает, что начало повседневной работы по
    формированию позиции в значительной степени обуславливает создание
    систем массового участия. Идейные соображения высшего порядка, а
    также сложившаяся структура организации требуют определения и
    уточнения новых предложений. Товарищи! рамки и место обучения кадров
    позволяет оценить значение форм развития.`,
    },
    {
      id: 2,
      name: "file2",
      contents: `Товарищи! начало повседневной работы по формированию позиции
    представляет собой интересный эксперимент проверки форм развития.
    Идейные соображения высшего порядка, а также начало повседневной
    работы по формированию позиции влечет за собой процесс внедрения и
    модернизации существенных финансовых и административных условий.
    Идейные соображения высшего порядка, а также укрепление и развитие
    структуры способствует подготовки и реализации систем массового
    участия. Значимость этих проблем настолько очевидна, что
    консультация с широким активом влечет за собой процесс внедрения и
    модернизации дальнейших направлений развития.`,
    },
  ] as Array<FileType>,
  files: [
    {
      id: 1,
      name: "file1",
    },
    {
      id: 2,
      name: "file2",
    },
  ] as Array<FileType>,
};

export const getFiles = (): ThunkAction<Promise<void>, RootStateType, unknown, FileActionTypes> => {
  return async (dispatch) => {
    dispatch(setLoadingFiles());
    try {
      // axios-запрос по какому-то API
      // const result = await axios.get(url, body)
      const files = FAKE_DATABASE.files;
      setTimeout(() => {
        dispatch(setFiles(files));
      }, 2000);
    } catch (error) {
      getFilesError(error.message);
    }
  };
};

export const getContents = (fileName: string): ThunkAction<Promise<void>, RootStateType, unknown, FileActionTypes> => {
  return async (dispatch) => {
    dispatch(setLoadingContents());

    try {
      // axios-запрос по какому-то API
      // const result = await axios.get(url, body)
      const file = FAKE_DATABASE.contents.find(
        ({ name }) => name === fileName
      );
        
        setTimeout(() => dispatch(getContentsSuccess(file)), 1000);
    } catch (error) {
      dispatch(getContentsError(error.message));
    }
  };
};

export type FileActionTypes = (SetLoadingContentsActionType | GetContentsSuccessActionType | GetContentsErrorActionType |
  SetFilesActionType | SetLoadingFilesActionType | GetFilesErrorActionType)

type SetLoadingContentsActionType = { type: typeof SET_LOADING_CONTENTS };
export const setLoadingContents = (): SetLoadingContentsActionType => {
  return { type: SET_LOADING_CONTENTS };
};

type GetContentsSuccessActionType = {
  type: typeof GET_CONTENTS_SUCCESS;
  file?: FileType;
};
export const getContentsSuccess = (file: FileType | undefined): GetContentsSuccessActionType => {
  return { type: GET_CONTENTS_SUCCESS, file };
}; 

type GetContentsErrorActionType = { type: typeof GET_CONTENTS_ERROR, error: any }
export const getContentsError = (error: any): GetContentsErrorActionType => {
  return { type: GET_CONTENTS_ERROR, error };
};

type SetFilesActionType = { type: typeof SET_FILES, files: Array<FileType> }
export const setFiles = (files: Array<FileType>): SetFilesActionType => {
  return { type: SET_FILES, files };
};

type SetLoadingFilesActionType = { type: typeof SET_LOADING_FILES }
export const setLoadingFiles = (): SetLoadingFilesActionType => {
  return { type: SET_LOADING_FILES };
};

type GetFilesErrorActionType = { type: typeof GET_FILES_ERROR, error: any }
export const getFilesError = (error: any): GetFilesErrorActionType => {
  return { type: GET_FILES_ERROR, error };
};
