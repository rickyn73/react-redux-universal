import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import  reducers  from './reducers';

const store = createStore(reducers, {} , applyMiddleware(thunk) )



ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));