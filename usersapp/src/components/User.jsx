import React, { Component } from 'react'

export default class User extends Component {
  render() {
    let {id, firstName, lastName} = this.props.user; //destructring
    return (
      <div className='row'>
        {firstName}, {lastName} &nbsp;
        <button>Delete</button>
      </div>
    )
  }
}
