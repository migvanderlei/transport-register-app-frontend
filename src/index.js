import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import About from './pages/about';
import SendsList from './component/sendsList'

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/about" component={About} />
            <Route path="/sends-list" component={SendsList} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
// registerServiceWorker();
