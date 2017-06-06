import React from 'react';
import {
    map,
    filter,
} from 'lodash';

import UserSearch from './modules/usersearch';
import Example from './modules/example';
import Home from './modules/home';


const requirePaths = require.context('./modules/', true, /^\.\/([a-zA-Z0-9_]+){1}\/index\.jsx?$/);
const childRoutes = filter(map(requirePaths.keys(), (key) => {
    return {
        path: key.match(/\.\/(.+)\/(?=index.jsx?)/)[1],
        component: requirePaths(key).default,
    }
}), (item) => !item.path.includes('home'));

const componentRoutes = {
    path: '/',
    indexRoute: {
    	component: Home,
    },
    childRoutes,
};

export default componentRoutes;