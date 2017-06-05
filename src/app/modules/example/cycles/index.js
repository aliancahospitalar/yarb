import {
    run
} from '@cycle/run';

import xs from 'xstream';

import {
    makeActionDriver
} from '../../../middlewares/cycles';

import {
    INCREMENT,
    DECREMENT,
    ADD,
} from '../constants.js'

export default function increment(sources) {
    const inc$ = sources.ACTION
        .filter(action => action.type === INCREMENT)
        .mapTo({
            type: ADD,
            payload: 1,
        });

    const dec$ = sources.ACTION
        .filter(action => action.type === DECREMENT)
        .mapTo({
            type: ADD,
            payload: -1,
        });

    return {
        ACTION: xs.merge(inc$, dec$),
    }
}