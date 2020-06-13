import React, { Component, Fragment } from "react";

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<{}, State> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
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
