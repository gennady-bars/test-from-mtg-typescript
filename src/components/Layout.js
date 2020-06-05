import React, { Component, Fragment } from "react";
import HomePage from "../pages/HomePage";
import Navbar from "./Navbar";
import styles from  "./Layout.module.css";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";
import Register from "./Register";
import TestPage from "../pages/TestPage";
import ModalPage from "../pages/ModalPage";

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
