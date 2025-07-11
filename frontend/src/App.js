import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/message')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {msg}
        </p>
      </header>
    </div>
  );
}

export default App;
