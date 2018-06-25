import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './App.jsx';
import './index.css';

const initialStore = {
    items: [{
        id: Math.random(),
        value: 'asdasdasda'
    }]
}

const store = createStore(
    reducers,
    initialStore
);

console.log(store.getState());

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);