import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import postReducer from "./PostReducer";
import {createStore} from "redux";
import {Provider} from 'react-redux';


let store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
