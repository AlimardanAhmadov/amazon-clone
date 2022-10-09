import './App.css';
import Navigation from './components/Navigation';
import MainBody from './components/MainBody';
import Checkout from '../src/pages/Checkout';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path='/' element={<MainBody />}>
        </Route>
        <Route path='/checkout' element={<Checkout />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
