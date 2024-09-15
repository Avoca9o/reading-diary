import React from "react";
import BookList from "./BookList.js";
import { useParams } from 'react-router-dom';

function UserProfileRenderer() {
    const { user } = useParams();

    const onClickAddBook = () => {
        alert('book added to user ' + user)
    };
    
      return (
        <div>
          <div>
                <input type="text" name="firstName"/>
                <button onClick={onClickAddBook}>
                    Add book
                </button>
                
                <BookList user={user}></BookList>
              </div>
        </div>
      );
}

export default UserProfileRenderer;