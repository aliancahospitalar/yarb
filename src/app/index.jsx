import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route} from 'react-router';
import {store, history} from './configureStore';
import componentRoutes from './routers.js';

render(
    <Provider store={store}>
	    <Router history={history} routes = {componentRoutes}/>
    </Provider>,
    document.getElementById('app')
)