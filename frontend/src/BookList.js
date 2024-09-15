import React from "react";
import {useNavigate} from "react-router-dom";

function BookList({user}) {
    const navigate = useNavigate();

    // get books from api
    const books = ["1984", "vinnie pooh", "it"]

    return books.map(book => <div><button onClick={() => {
        navigate("/profile/" + user + "/" + book);
     }}>{book}</button></div>)
}

export default BookList;