import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import postReducer from "./PostReducer";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(postReducer,
    compose(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
