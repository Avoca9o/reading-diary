import React from "react";
import UserList from "./UserList";
import { useNavigate } from 'react-router-dom';

function UsersRenderer() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState('');

  const onClickAddUser = async () => {
    if (!inputValue.trim()) {
      alert('Please enter a name');
      return;
    }

    try {
      const response = await fetch('http://localhost:80/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: inputValue }),
      });
      const data = await response.json();
      console.log(data);
      alert('User added successfully');
      setInputValue('');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user');
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          name="firstName"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={onClickAddUser}>
          Add user
        </button>
        <UserList />
      </div>
    </div>
  );
}

export default UsersRenderer;
