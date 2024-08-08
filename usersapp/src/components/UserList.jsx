import React, { Component } from 'react'
import friends from '../data'
import User from './User'
import Filter from './Filter'

export default class UserList extends Component {
    state = {
        users: friends
    }

    render() {
        return (
            <div>
                <Filter />
                {
                    this.state.users.map(user => <User user={user} />)
                }
            </div>
        )
    }
}
