import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import AppHeader from './component/AppHeader';
import './style/index.css';

ReactDOM.render(
  <div>
    <AppHeader />
    <App />
  </div>,
  document.getElementById('root')
);
