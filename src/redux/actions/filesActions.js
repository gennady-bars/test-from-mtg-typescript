import {
  SET_FILES,
  SET_LOADING_FILES,
  GET_FILES_ERROR,
  SET_LOADING_CONTENTS,
  GET_CONTENTS_SUCCESS,
  GET_CONTENTS_ERROR,
} from "./actionTypes";

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
  ],
  files: [
    {
      id: 1,
      name: "file1",
    },
    {
      id: 2,
      name: "file2",
    },
  ],
};

export const getFiles = () => {
  return async (dispatch) => {
    dispatch(setLoadingFiles());
    try {
      // axios-запрос по какому-то API
      // const result = await axios.get(url, body)
      const files = FAKE_DATABASE.files
      setTimeout(() => {
        dispatch(setFiles(files));
      }, 2000);
    } catch (error) {
      getFilesError(error.message);
    }
  };
};

export const getContents = (fileName) => {
  return async (dispatch) => {
    dispatch(setLoadingContents());

    try {
      // axios-запрос по какому-то API
      // const result = await axios.get(url, body)
      await new Promise((resolve, reject) => {
        const file = FAKE_DATABASE.contents.find(
          ({ name }) => name === fileName
        );
        setTimeout(() => resolve(file), 1000);
      }).then((file) => dispatch(getContentsSuccess(file)));
    } catch (error) {
      dispatch(getContentsError(error.message));
    }
  };
};

export const setLoadingContents = () => {
  return { type: SET_LOADING_CONTENTS };
};

export const getContentsSuccess = (file) => {
  return { type: GET_CONTENTS_SUCCESS, file };
};

export const getContentsError = (error) => {
  return { type: GET_CONTENTS_ERROR, error };
};

export const setFiles = (files) => {
  return { type: SET_FILES, files };
};

export const setLoadingFiles = () => {
  return { type: SET_LOADING_FILES };
};

export const getFilesError = (error) => {
  return { type: GET_FILES_ERROR, error };
};
