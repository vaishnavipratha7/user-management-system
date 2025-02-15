import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function UserList() {
    const [users,setUsers] = useState([]);
    const fetchUsers = async ()=>{
        try {
            //get all the users data from the backend server(database)
            const response = await axios.get('"http://localhost:9000/users"')
            console.log(response.data)
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        //as the component loads this function will be called
        fetchUsers();
    },[])
  return (
    <div>
        <h1>User Listing</h1>
        {users.map((user) => (
  <li key={user.id}>{user.name}</li>
))}


    </div>
  )
}
