import React from 'react';
import Login from './Pages/Login-page/Login';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Login />
    </div>
  );
}

export default App;
