import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/flatly/bootstrap.min.css";
import './index.css';
import "./components/css/Form.css";
import "./components/css/personStyle.css";
import App from './App';
import { getIconForFile, getIconForFolder, getIconForOpenFolder } from 'vscode-icons-js';

console.log(getIconForFile('main.cpp'));
// file_type_cpp.svg

console.log(getIconForFolder('main.cpp'));
// file_type_cpp.svg

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
);


