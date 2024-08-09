import React, { useEffect, useState } from 'react'

export default function Users() {
    let [users, setUsers] = useState([]);
    //componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {
                users && users.map(user => <h4 key={user.id}>{user.email}, {user.name}</h4>)
            }
        </div>

    )
}
