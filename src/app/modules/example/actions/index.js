import {
    INCREMENT,
    DECREMENT,
    ADD
} from '../constants';

export function increment() {
    return {
        type: INCREMENT,
    }
}

export function decrement() {
    return {
        type: DECREMENT,
    }
}

export function add(payload) {
    return {
        type: ADD,
        payload,
    }
}