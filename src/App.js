import './App.css';
import Navigation from './components/Navigation';
import MainBody from './components/MainBody';
import Checkout from '../src/pages/Checkout';
import Login from './pages/Login';

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebaseConfig';
import { useStateValue } from './StateProvider';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',   
          user: null
        })
      }
    })
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path='/login' element={ <Login /> }>
        </Route>
        <Route path='/' element={<><Navigation/><MainBody/></>}>
        </Route>
        <Route path='/checkout' element={<><Navigation/><Checkout/></>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
