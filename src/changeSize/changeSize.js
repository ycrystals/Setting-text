import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

import Context from "../contexts/context";

export default class ChangeSize extends Component {
  render() {
    return (
      <div className="container">
        <div className="panels border border-danger">
          <div className="panel-heading">
            <Context.Consumer>
              {({ size }) => <div>Size: {size}px</div>}
            </Context.Consumer>
          </div>
          <div className="panel-body">
            <Context.Consumer>
              {({ onDownSize }) => (
                <Button
                  className="mr-2"
                  outline
                  color="warning"
                  onClick={onDownSize}
                >
                  Down
                </Button>
              )}
            </Context.Consumer>
            <Context.Consumer>
              {({ onUpSize }) => (
                <Button outline color="danger" onClick={onUpSize}>
                  &nbsp; &nbsp;Up &nbsp;
                </Button>
              )}
            </Context.Consumer>
          </div>
        </div>
      </div>
    );
  }
}
