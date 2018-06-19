import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import './index.css';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from './reducers';

// const store = createStore(reducers);

// ReactDom.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

ReactDom.render(<App />, document.getElementById('root'));
