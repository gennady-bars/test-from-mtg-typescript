import React, { Component, Fragment } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(e) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <h1>Что-то пошло не так</h1>
          <p>Попробуйте еще раз - перейдите на домашнюю страницу</p>
        </Fragment>
      );
    }
    return this.props.children;
  }
}
