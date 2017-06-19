import { createSelector } from 'reselect';

export const exampleReducerSelector = state => state.exampleReducer;

export const selectCounter = createSelector(
    exampleReducerSelector,
    (state) => state.counter,
);