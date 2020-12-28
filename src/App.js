import React from 'react';
import './App.css';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';

function App() {
  return (
    <div className="App">
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <br />
      If it does helped you feel free to star{' '}
      <a href="https://github.com/Sivanesh-S/react-google-authentication">
        Github Repo
      </a>{' '}
      😉
    </div>
  );
}

export default App;
