import React from "react";

const FileContents = ({ activeFile, loading, error }) => {
  const contents = loading
    ? "Loading..."
    : error
    ? `Ошибка загрузки: ${error}`
    : activeFile
    ? activeFile.contents
    : 'Выберите файл';

  return (
    <div className="contents-child">
      <p>{contents}</p>
    </div>
  );
};

export default FileContents;
