import {useNavigate} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function UserList() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [rawResponse, setRawResponse] = useState('');

    useEffect(() => {
      fetch('http://localhost:80/users')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(text => {
          setRawResponse(text);
          console.log('Raw response:', text);
          try {
            const data = JSON.parse(text);
            setUsers(data || []);
          } catch (parseError) {
            console.error('Failed to parse JSON:', parseError);
          }
        })
        .catch(error => {
          console.log("Fetch error:", error);
        });
    }, []);

    // need to paste just after <dive> to check raw response
    // {rawResponse && <pre>{JSON.stringify(rawResponse, null, 2)}</pre>}
    return (
      <div>
        {users.length > 0 ? (
          users.map(user => (
            <div key={user["id"]}>
              <button onClick={() => navigate(`/profile/${user["name"]}`)}>
                {user["name"]}
              </button>
            </div>
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>
    );
}

export default UserList;
