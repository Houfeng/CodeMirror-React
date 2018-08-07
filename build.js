const path = require('path');

module.exports = function () {
  return async function () {
    const file = path.resolve(__dirname, './build/js/index.js');
  }
}