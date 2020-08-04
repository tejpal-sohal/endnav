/*
Main Application
Renders NavBar
*/

import React from 'react';
import NavContextProvider from '../context/NavContext'
import NavBar from './NavBar'
import './App.css'

function App() {  
  return (
    <NavContextProvider>
        <NavBar />
    </NavContextProvider>
  );
}

export default App;

