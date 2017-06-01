const { map } = require('lodash');
const { configure } = require('@kadira/storybook');

const req = require.context('../src/app/components/', true, /.+?\/stories\/.+?\.story\.jsx?/);

configure(() => map(req.keys(), req), module);