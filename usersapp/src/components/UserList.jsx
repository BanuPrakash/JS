import React, { Component } from 'react'
import friends from '../data'
import User from './User'
import Filter from './Filter'

export default class UserList extends Component {
    state = {
        users: [...friends],
        complete: [...friends]
    }
    constructor(props) {
        super(props);
       this.deleteCustomer = this.deleteCustomer.bind(this);
    }
    deleteCustomer(id) {
        let usrs = this.state.users.filter(user => user.id !== id); 
       
       //  this.state.users = usrs; // doing this state changes, but no reconcillation

        // // async code to update state and trigger reconcillation
        this.setState({
            users: usrs
        })
    }

    filterCustomers(txt) {
        let usrs = this.state.complete.filter(user => user.firstName
            .toUpperCase().indexOf(txt.toUpperCase()) >= 0 || 
            (user.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0)); 
        //  this.state.users = usrs; // doing this state changes, but no reconcillation
 
         // // async code to update state and trigger reconcillation
         this.setState({
             users: usrs
         })
    }
    render() {
        return (
            <div>
                <Filter filterEvent={this.filterCustomers.bind(this)}/>
                {
                    this.state.users.map(user => <User user={user} 
                       // delEvent={this.deleteCustomer.bind(this)}
                       delEvent={this.deleteCustomer}
                        key={user.id} />)
                }
            </div>
        )
    }
}
