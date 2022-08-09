import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(

//     <BrowserRouter>
//         <Switch>
//             <Route path="/*" exact={true} component={App} />
//         </Switch>
//     </BrowserRouter>

//     , document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Switch>
            <Route path="/*" exact={true} component={App} />
        </Switch>
    </BrowserRouter>
);

