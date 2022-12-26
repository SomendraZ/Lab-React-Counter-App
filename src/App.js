import React from 'react';

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(previousValue => ({
      count: previousValue.count + 1,
    }));
  }

  decrement() {
    this.setState(previousValue => ({
      count: previousValue.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    })  ;
  }

  render() {
    return (
      <div className="counter">
        <h1 id='head'>Counter App</h1>
        <h1 id='num'>{this.state.count}</h1>
        <button id='add' onClick={this.increment}>+</button>&nbsp;
        <button id='sub' onClick={this.decrement}>-</button>&nbsp;
        <button id='reset' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;