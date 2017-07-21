const _ = require('lodash');

const copy = module.exports = (self, other, rootKey, defaults) => {
  // If called with 3 arguments, then `rootKey` is unset
  if (undefined === defaults) {
    defaults = rootKey;
    rootKey = undefined;

    if (!_.isObject(self))
      throw new Exception('Cannot merge native type values');
    else {
      defaults.enumerateFunction(other).forEach((key) => {
        copy(self, other, key, defaults);
      });
    }
  }
  else {
    if (true === defaults.shallow ||
        !_.isObject(self[rootKey])) {
      self[rootKey] = other[rootKey];
    }
    else {
      defaults.enumerateFunction(other[rootKey]).forEach((key) => {
        copy(self[rootKey], other[rootKey], key, defaults);
      });
    }
  }

  return self;
};
