const { map } = require('lodash');
const { configure } = require('@storybook/react');

const req = require.context('../src/components/', true, /.+?\/stories\/.+?\.story\.jsx?/);

configure(() => map(req.keys(), req), module);