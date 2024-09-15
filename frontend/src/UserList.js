import {useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function UserList() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:80/users', {mode: 'no-cors'})
        .then(response => response.json())
        .then(data => {
          setUsers(data);
        })
        .catch(error => {
          alert(error)
          console.log(error);
        });
    }, []);

    return users.map(user => <div><button onClick={() => {
        navigate("/profile/" + user);
     }}>{user}</button></div>)
}

export default UserList;