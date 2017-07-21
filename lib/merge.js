module.exports = function merge(self, other, defaults) {
  if (false === defaults.clone)
    return copy(self, other, key, defaults);

  const ret = {};
  copy(ret, self, key, defaults);
  return copy(ret, other, key, defaults);
};
