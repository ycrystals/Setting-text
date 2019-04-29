import React, { Component } from "react";
import Context from "./context";

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 12,
      color: "black"
    };

    this.onUpSize = this.onUpSize.bind(this);
    this.onDownSize = this.onDownSize.bind(this);
    this.onChangeColorRed = this.onChangeColorRed.bind(this);
    this.onChangeColorGreen = this.onChangeColorGreen.bind(this);
    this.onChangeColorGray = this.onChangeColorGray.bind(this);
    this.onChangeColorPink = this.onChangeColorPink.bind(this);
    this.resetValue = this.resetValue.bind(this);
  }

  onUpSize() {
    if (this.state.size + 2 <= 36) {
      this.setState(state => {
        return {
          size: state.size + 2
        };
      });
    }
  }

  onDownSize() {
    if (this.state.size - 2 >= 8) {
      this.setState(state => {
        return {
          size: state.size - 2
        };
      });
    }
  }

  onChangeColorRed() {
    this.setState({
      color: "red"
    });
  }

  onChangeColorGreen() {
    this.setState({
      color: "green"
    });
  }

  onChangeColorGray() {
    this.setState({
      color: "gray"
    });
  }

  onChangeColorPink() {
    this.setState({
      color: "pink"
    });
  }

  resetValue() {
    this.setState(state => {
      return {
        size: 12,
        color: "black"
      };
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          size: this.state.size,
          color: this.state.color,
          onUpSize: this.onUpSize,
          onDownSize: this.onDownSize,
          onChangeColorPink: this.onChangeColorPink,
          onChangeColorGray: this.onChangeColorGray,
          onChangeColorGreen: this.onChangeColorGreen,
          onChangeColorRed: this.onChangeColorRed,
          resetValue: this.resetValue
        }}
      >
        >{this.props.children}
      </Context.Provider>
    );
  }
}
