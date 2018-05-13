import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route , Switch}  from 'react-router-dom';

const RouteSwitch = () => (
    <main>
        <Switch>
        <Route exact path='/' component={App} /> 
        <Route path='/:hashtag' component={App} />
        </Switch>
    </main>
);

ReactDOM.render(
    <BrowserRouter>
        <RouteSwitch />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
