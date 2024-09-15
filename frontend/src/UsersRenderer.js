import React from "react";

import UserList from "./UserList";
import {useNavigate} from 'react-router-dom';

function UsersRenderer() {
  const onClickAddUser = () => {
    alert('user added')
  };

  return (
    <div>
      <div>
            <input type="text" name="firstName"/>
            <button onClick={onClickAddUser}>
                Add user
            </button>
            
            <UserList></UserList>
          </div>
    </div>
  );
}

export default UsersRenderer;