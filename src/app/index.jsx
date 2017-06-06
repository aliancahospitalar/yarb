import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from './configureStore';
import Example from './modules/example';
import UserSearch from './modules/usersearch';

render(
    <Provider store={store}>
        <UserSearch />
    </Provider>,
    document.getElementById('app')
)