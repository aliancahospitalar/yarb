import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from './configureStore';
import Example from './modules/example';

render(
    <Provider store={store}>
        <Example />
    </Provider>,
    document.getElementById('app')
)