import React, { Component, Fragment } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import Navbar from "../Navbar/Navbar";
import styles from  "./Layout.module.css";
import { Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../../pages/LoginPage/Login";
import Register from "../../pages/RegisterPage/Register";
import TestPage from "../../pages/TestPage/TestPage";
import ModalPage from "../../pages/ModalPage/ModalPage";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.Layout}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/test" component={TestPage} />
            <Route path="/modal" component={ModalPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}
