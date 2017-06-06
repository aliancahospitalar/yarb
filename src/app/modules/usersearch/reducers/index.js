import {
    SEARCHED_USERS,
    RECEIVED_USERS
} from '../constants';

const initialState = {
    name: '',
    email: '',
    phone: ''
};

function reducer(state = initialState, action) {
 switch (action.type) {
    case RECEIVED_USERS:
      if (action.payload == null){
      	return state;}
      else {
      return {...state, 
      		name:action.payload.name,
      		email:action.payload.email,
      		phone: action.payload.phone};}
    default:
      return state;
}
};

export default reducer;