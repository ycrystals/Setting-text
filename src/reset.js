import React, { Component } from "react";
import { Button } from "reactstrap";
import Context from "./contexts/context";

export default class Reset extends Component {
  render() {
    return (
      <div className="container">
        <Context.Consumer>
          {({ resetValue }) => (
            <Button
              outline
              color="success"
              className="btns"
              onClick={resetValue}
            >
              Reset
            </Button>
          )}
        </Context.Consumer>
      </div>
    );
  }
}
