import {
    SEARCHED_USERS,
    RECEIVED_USERS
} from '../constants';

export function searchUsers() {
  return {
    type: SEARCHED_USERS,
  };
}

export function receiveUsers(user) {
  return {
    type: RECEIVED_USERS,
    payload: user
  };
}