const defaultValues = Object.freeze({
  enumerateFunction: Object.keys,
  clone: false,
  shallow: false,
});

const defaults = {};

(() => {
  Object.keys(defaultValues).forEach((key) => {
    defaults[key] = defaultValues[key];
  });

  Object.defineProperty(defaults, 'defaults_', {
    configurable: false,
    enumerable: false,
    value: defaultValues,
    writable: false,
  });

  Object.seal(defaults);
})();

module.exports = defaults;
