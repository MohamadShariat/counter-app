import React, { Component } from "react";
import Counter from "./Counter";

export class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-3"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
