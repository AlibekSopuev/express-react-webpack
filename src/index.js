import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App.jsx";
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import rootSaga from "./sagas/rootSaga";
import {
    BrowserRouter as Router,
} from "react-router-dom";

store.runSaga(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app'));