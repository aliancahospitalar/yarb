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
    run
} from '@cycle/run';

import {
    combineCycles
} from 'redux-cycles';

import {
    cyclesMiddleware
} from './middlewares/cycles';

import { makeHTTPDriver } from '@cycle/http';

const {
    makeActionDriver
} = cyclesMiddleware;

const requireReducers = require.context('./modules/', true, /.+?\/reducers\/index\.jsx?/);

const reducers = reduce(map(requireReducers.keys(), (key) => {
    return {
        name: key.match(/(?!\.?\/).+?(?=\/reducers)/)[0] + 'Reducer',
        reducer: requireReducers(key).default,
    }
}), (carry, { name, reducer }) => ({...carry, [name]: reducer }), {});

const store = createStore(combineReducers(reducers), compose(applyMiddleware(cyclesMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const requireCycles = require.context('./modules/', true, /.+?\/cycles\/index\.jsx?/);
const cycles = map(requireCycles.keys(), (key) => requireCycles(key).default);

run(combineCycles(...cycles), {
    ACTION: makeActionDriver(),
    HTTP: makeHTTPDriver()
});

export default store;