import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path=":id" element={<AppWrapper />} />
      <Route path="*" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


function AppWrapper() {
  return <App parameters={useParams()} />
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
