import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uniqid from 'uniqid';
import reducers from './reducers';
import App from './App.jsx';
import './index.css';

const initialStore = {
    items: [{
        id: uniqid(),
        value: '',
        index: '0'
    }]
}

const store = createStore(
    reducers,
    initialStore,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);