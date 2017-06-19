import {receiveUsers} from '../actions';

import {
    SEARCHED_USERS,
    RECEIVED_USERS
} from '../constants';

import { makeHTTPDriver } from '@cycle/http';

import xs from 'xstream';

export default function searchUsers(sources) {
  const searchQuery$ = sources.ACTION
    .filter(action => action.type === SEARCHED_USERS)

  const searchQueryRequest$ = searchQuery$
    .map(() => {
      const randomNum = Math.round(Math.random() * 9) + 1;
      return{
      url: 'http://jsonplaceholder.typicode.com/users/' + String(randomNum),
      category: 'users',
      method: 'GET'
      };
    });

  const response$ = sources.HTTP.select('users').flatten();

  const action$ = response$.map((res) => res.body).startWith(null).map(receiveUsers);

  return {
    ACTION: action$,
    HTTP: searchQueryRequest$
  }
}