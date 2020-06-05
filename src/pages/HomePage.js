import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Link to="/modal">Задание 1 (диалоговое окно)</Link>
        <Link to="/test">Задание 2 (DropDowns)</Link>
      </div>
    );
  }
}
