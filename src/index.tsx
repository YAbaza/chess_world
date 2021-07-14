import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from "./components/NavBar";
import RandomVRandom from "./components/RandomVRandom";
import App from "./App";

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();