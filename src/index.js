import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import rootReducers from './reducers/balance';
import { Provider } from 'react-redux';
import App from './components/App';


const store = createStore(rootReducers);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));