import './App.css';
import { useEffect } from 'react';
import React from 'react';
import io from 'socket.io-client';
import Loading from './components/Loading/Loading';

const socket = io('http://localhost:5000');

function App() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="App">
      <Loading />
    </div>
  )
}

export default App;
