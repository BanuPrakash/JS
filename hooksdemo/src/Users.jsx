import React, { useEffect, useState } from 'react'

export default function Users({setUserId}) {
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
                users && users.map(user => <h4
                    onMouseOver={() => setUserId(user.id)}
                    key={user.id}>{user.email}, {user.name}
                </h4>)
            }
        </div>

    )
}
