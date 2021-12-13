import React, { Component } from "react";
import Counter from "./Counter";

export class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-3"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
