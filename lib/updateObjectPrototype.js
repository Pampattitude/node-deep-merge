const copy = require('./copy');

module.exports = (defaults) => {
  Object.prototype.merge = function merge(other, options) {
    const self = this;

    if (false === defaults.clone)
      return copy(self, other, defaults);

    const ret = {};
    copy(ret, self, defaults);
    return copy(ret, other, defaults);
  };

  Object.prototype.merge.defaults = defaults;
};
