import './App.css';
import UsersRenderer from './UsersRenderer';
import UserProfileRenderer from './UserProfileRenderer';
import BookInfo from './BookInfo';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return   <div className="App">
    <header>Users</header>
    <UsersRenderer></UsersRenderer>
  </div>
}

const App = () => (

  <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:user" element={<UserProfileRenderer/>} />
          <Route path="/profile/:user/:book" element={<BookInfo />} />
        </Routes>
      </div>
    </Router>
);

export default App;
