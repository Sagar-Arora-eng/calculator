import React from "react";

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Toggle the state when user clicks on the checkbox.
  handleChange(e) {
    this.setState({
      number: e.target.value
    });
  }

  addNumberByTwo = () => {
    this.setState((prevstate) => ({
      number: prevstate.number + 2
    }));
  };

  subtractNumberByTwo = () => {
    this.setState((prevstate) => ({
      number: prevstate.number - 2
    }));
  };

  squareNumber = () => {
    this.setState((prevstate) => ({
      number: prevstate.number * prevstate.number
    }));
  };

  doubleNumber = () => {
    this.setState((prevstate) => ({
      number: prevstate.number * 2
    }));
  };

  divideNumberByTwo = () => {
    this.setState((prevstate) => ({
      number: Number(prevstate.number / 2).toFixed()
    }));
  };

  render() {
    return (
      <div className="todo-item">
        <input
          type="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={this.addNumberByTwo}>Add2!</button>
        <button onClick={this.doubleNumber}>Double!</button>
        <button onClick={this.squareNumber}>Square!</button>
        <button onClick={this.divideNumberByTwo}>DivideBy2!</button>
        <button onClick={this.subtractNumberByTwo}>Subtract2!</button>
      </div>
    );
  }
}

export default TodoItem;
