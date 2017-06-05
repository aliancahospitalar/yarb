import { 
    map,
    reduce
} from 'lodash';

import { 
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import {
    cyclesMiddleware
} from './middlewares/cycles';

const req = require.context('./modules/', true, /.+?\/reducers\/index\.jsx?/);
const reducers = reduce(map(req.keys(), (key) => {
    return {
        name: key.match(/(?!\.?\/).+?(?=\/reducers)/)[0] + 'Reducer',
        reducer: req(key).default,
    }
}), (carry, { name, reducer }) => ({ ...carry, [name]: reducer }), {});

export default createStore(combineReducers(reducers), compose(applyMiddleware(cyclesMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

