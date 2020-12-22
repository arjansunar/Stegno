import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Encrypt from './pages/Encrypt';
import Decrypt from './pages/Decrypt';
import Login from './pages/Login';
function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/encrypt'><Encrypt /></Route>
        <Route path='/decrypt'><Decrypt /></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
