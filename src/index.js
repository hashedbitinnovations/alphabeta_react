import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Dash from './components/Dashboard';
import About from './components/pages/About';
import StateFn from './components/StateFn';
import ShowHideFn from './components/ShowHideFn';
import Parent from './Parent';
import InputHandling from './components/InputHandling';

import ClassComp from './components/ClassComp';

import { Provider } from 'react-redux';
import store from './components/pages/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)