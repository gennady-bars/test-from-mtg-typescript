import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import styles from  "./ModalPage.module.css";
import transition from '../transitions/transition.module.css'

import Modal from "../../components/Modal/Modal";
import Alert from "../../components/Modal/Alert";
import { setAlert, setModal } from "../../redux/actions/modalActions";
import { RootStateType } from "../../redux/reducers/rootReducer";

type Props = {
  setModal: typeof setModal, 
  setAlert: typeof setAlert
} & MapStateToPropsType

class ModalPage extends Component<Props> {

  modalOkClickHandler = () => {
    this.props.setModal(false)
    this.props.setAlert(true)
  };

  modalDismissClickHandler = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {isOpen, isShown, setModal, setAlert} = this.props
    return (
      <div className={styles.ModalPage}>
        <button onClick={() => setModal(true)}>Нажми на меня</button>
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={transition}
          unmountOnExit
          mountOnEnter
        >
          <Modal
            modalOkClickHandler={this.modalOkClickHandler}
            modalDismissClickHandler={() => setModal(false)}
          />
        </CSSTransition>
        <CSSTransition
          in={isShown}
          timeout={200}
          classNames={transition}
          unmountOnExit
          mountOnEnter
        >
          <Alert
            onCloseAlert={() => setAlert(false)}
           />
        </CSSTransition>

        
      </div>
    );
  }
}

const mapStateToProps = (state: RootStateType) => {
  return {
    isOpen: state.modal.isOpen,
    isShown: state.modal.alert
  };
};

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps, { setAlert, setModal })(ModalPage);
