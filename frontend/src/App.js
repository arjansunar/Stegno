import './App.css';
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Encrypt from './pages/Encrypt';
import Decrypt from './pages/Decrypt';
import Login from './pages/Login';
import { inputContext } from './context/InputContext'

function App() {
  const [inputValues, setinputValues] = useState({
    emailId: '',
    password: '',
    message: '',
    to: '',
    image64: ''
  })
  return (
    <div className='app'>
      <inputContext.Provider value={{ inputValues, setinputValues }}>
        <Switch>

          <Route path='/encrypt'><Encrypt /></Route>
          <Route path='/decrypt'><Decrypt /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </inputContext.Provider>
    </div >
  );
}

export default App;
