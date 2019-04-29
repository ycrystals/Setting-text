import React, { Component } from "react";
import "./color.css";
import Context from "../contexts/context";

export default class ChangeColor extends Component {
  render() {
    return (
      <div className="container">
        <div className="panels">
          <div className="panel-heading">Select Color To Change</div>
          <div className="panel-body">
            <Context.Consumer>
              {({ onChangeColorRed }) => (
                <button className="red" onClick={onChangeColorRed} />
              )}
            </Context.Consumer>
            <Context.Consumer>
              {({ onChangeColorGreen }) => (
                <button className="green" onClick={onChangeColorGreen} />
              )}
            </Context.Consumer>
            <Context.Consumer>
              {({ onChangeColorGray }) => (
                <button className="gray" onClick={onChangeColorGray} />
              )}
            </Context.Consumer>
            <Context.Consumer>
              {({ onChangeColorPink }) => (
                <button className="pink" onClick={onChangeColorPink} />
              )}
            </Context.Consumer>
          </div>
        </div>
      </div>
    );
  }
}
