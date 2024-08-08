import React, { Component } from 'react'

export default class User extends Component {
  deleteCustomerRow(id) {
    console.log("User : ->", id)
    this.props.delEvent(id);
  }
  render() {
    let {id, firstName, lastName} = this.props.user; //destructring
    return (
      <div className='row'>
        {firstName}, {lastName} &nbsp;
        <button onClick={() => this.deleteCustomerRow(id)}>Delete</button>
      </div>
    )
  }
}
