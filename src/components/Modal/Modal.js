import React from "react";
import styles from './Modal.module.css'

const Modal = ({ modalOkClickHandler, modalDismissClickHandler }) => {

  return (
    <div className={styles.Modal}>
      <h3>Нужно показать Alert?</h3>
      <button onClick={modalOkClickHandler}>ОК</button>
      <button onClick={modalDismissClickHandler}>Отмена</button>
    </div>
  );
};

export default Modal;
