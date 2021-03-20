import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/Container';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
  <App />
</Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
