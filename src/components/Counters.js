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

  handleDlete = (counterId) => {
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDlete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
