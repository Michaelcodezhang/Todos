import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './reducers/todoApp'
import {addTodo,toggleTodo,setVisibilityFilter,} from "./actions/todos"
import {VisibilityFilters} from "./actions/type"

import './index.css';
import App from './containers/App';

let store=createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
