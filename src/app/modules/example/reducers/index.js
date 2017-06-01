import {
    ADD
} from '../constants';

const initialState = {
    counter: 0,
};

function reducer(state = initialState, { type, payload }) {
    switch(type){
        case ADD:
            return {
                ...state,
                counter: state.counter += payload,
            };
        default:
            return state;
    }
}

export default reducer;