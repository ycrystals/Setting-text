import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "../contexts/context";

export default class Result extends Component {
  render() {
    return (
      <div className="container">
        <Context.Consumer>
          {({ size, color }) => <div>Color: {color} </div>}
        </Context.Consumer>
        <Context.Consumer>
          {({ size }) => <div>Font-size: {size}px </div>}
        </Context.Consumer>

        <div className="container border border-danger mt-2 text-center">
          <Context.Consumer>
            {({ size, color }) => (
              <p
                className="pt-3 pl-2"
                style={{
                  fontSize: `${size}px`,
                  color: `${color}`
                }}
              >
                This is the texts
              </p>
            )}
          </Context.Consumer>
        </div>
      </div>
    );
  }
}
