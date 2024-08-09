import React, { useEffect, useState } from 'react'

export default function UserDetails({id}) {
    let [user, setUser] = useState(null);
    // componentDidUpdate
    useEffect(() => {
        if(id!=0)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
        .then(response => response.json())
        .then(data => setUser(data));
    }, [id]);
  return (
    <div>
        <h1>UserDetails</h1>
        <div>
            {
                user && <div>
                    Name : {user.name} <br />
                    Email : {user.email} <br />
                    Phone : {user.phone}
                </div>
            }
        </div>
    </div>
  )
}
