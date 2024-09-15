import React from "react";
import { useParams } from 'react-router-dom';

function BookInfo() {
    const {user, book} = useParams()

    // get chapters from api
    const chapters = ["1", "two pooh", "2"]

    return <div>{user}{book}</div>
        // <div>chapters.map(chapter => <div>{chapter}</div>)</div>
}

export default BookInfo;