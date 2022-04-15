import React, { Component } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ClearButton from "./Components/ClearButton";
import FooterText from "./Components/FooterText";
import * as math from "mathjs";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }
  s;
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="App">
        <div className="Calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="Row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="Row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="Row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="Row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="Row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              CLEAR
            </ClearButton>
          </div>
          <FooterText />
        </div>
      </div>
    );
  }
}

export default App;
