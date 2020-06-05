import React from "react";
import './Modal.css'

const Modal = ({ modalOkClickHandler, modalDismissClickHandler }) => {

  return (
    <div className='Modal'>
      <h3>Нужно показать Alert?</h3>
      <button onClick={modalOkClickHandler}>ОК</button>
      <button onClick={modalDismissClickHandler}>Отмена</button>
    </div>
  );
};

export default Modal;
