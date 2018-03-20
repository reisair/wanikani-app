import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./App.js";
import Fetcher from "./components/Fetcher/Fetcher.js";
import UserInfo from "./components/UserInfo/UserInfo.js";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
