import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Dash from './components/Dashboard';
import About from './components/About';
import StateFn from './components/StateFn';
import ShowHideFn from './components/ShowHideFn';
import Parent from './Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent />);
