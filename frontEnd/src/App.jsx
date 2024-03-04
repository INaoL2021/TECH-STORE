import './App.css';
import { useEffect } from 'react';
import React, {useState} from 'react';
import NavBar from '../src/components/navbar/NavBar';
import Footer from '../src/components/footer/Footer';
import io from 'socket.io-client';
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
      <NavBar />
      <Footer />
    </div>
  )
}

export default App;
