import React, { Component } from "react";

class ContactItem extends Component {
  render() {
    const {
      contact: { name, number, id },
      onDelete,
    } = this.props;
    return (
      <li>
        {name}: {number}
        <button onClick={() => onDelete(id)}>delete</button>
      </li>
    );
  }
}

export default ContactItem;
