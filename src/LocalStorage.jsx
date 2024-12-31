import React, { useState } from 'react';
import './LocalStorage.css';

const LocalStorage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('All fields are required!');
      return;
    }
    // Add authentication logic here
    // alert('Login Successful');
  

  const userData = {name, email, password};
  localStorage.setItem('userData', JSON.stringify(userData))
  alert('Data has been stored in localStorage');


  setName('');
  setEmail('');
  setPassword('');

  };
  return (

    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={()=>handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LocalStorage;
