import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {smurfReducer} from './reducers/smurfReducer'



export const store = createStore(smurfReducer, applyMiddleware())
console.log('store', store)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
