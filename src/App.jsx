import './App.css'

import Home from './screens/Home'
import Counter from './components/Counter/Counter.jsx';
import Product from './screens/Product'
import { Link } from 'react-router-dom';

import Navigator from './components/Navigation/Navigator.jsx';
import Router from './components/Navigation/Router.jsx';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Router />
    </div>
  );
}
export default App;
