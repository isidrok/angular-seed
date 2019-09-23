const path = require('path');

const fromRoot = (...paths) => path.resolve(__dirname, '..', '..', ...paths);

module.exports = {
  fromRoot
};
