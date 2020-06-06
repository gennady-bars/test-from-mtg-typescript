import React from "react";
import styles from './Modal.module.css'

type Props = {
  modalOkClickHandler: () => void
  modalDismissClickHandler: () => void
}

const Modal: React.FC<Props> = ({ modalOkClickHandler, modalDismissClickHandler }) => {

  return (
    <div className={styles.Modal}>
      <h3>Нужно показать Alert?</h3>
      <button onClick={modalOkClickHandler}>ОК</button>
      <button onClick={modalDismissClickHandler}>Отмена</button>
    </div>
  );
};

export default Modal;
