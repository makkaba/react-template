import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
);

module.hot.accept();