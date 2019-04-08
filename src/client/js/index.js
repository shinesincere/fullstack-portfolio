import React from 'react';
import ReactDOM from 'react-dom';
import "../css/index.scss";
import App from './App';

console.log('App');
ReactDOM.render(<App greeting='hey'/>, document.getElementById('app'));

