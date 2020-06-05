import React from "react";
import styles from './FileContents.module.css'

const FileContents = ({ activeFile, loading, error }) => {
  const contents = loading
    ? "Loading..."
    : error
    ? `Ошибка загрузки: ${error}`
    : activeFile
    ? activeFile.contents
    : 'Выберите файл';

  return (
    <div className={styles.contents}>
      <p>{contents}</p>
    </div>
  );
};

export default FileContents;
