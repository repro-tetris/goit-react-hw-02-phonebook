import React, { Component } from "react";

export class Filter extends Component {
  state = { filter: "" };

  handleOnChange = ({ target: { name, value } }) => {
    const filter = { [name]: value.toLowerCase() };
    this.setState(filter);
    this.props.onFilter(filter);
  };

  render() {
    const { filter } = this.state;
    return (
      <input
        name="filter"
        value={filter}
        onChange={this.handleOnChange}
      ></input>
    );
  }
}

export default Filter;
