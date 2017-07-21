const dirreq = require('dirreq');

const lib = dirreq('./lib', {
  defer: true,
});

const merge = lib.merge;
merge.updateObjectProto = (defaults) => {
  lib.updateObjectPrototype(defaults || lib.defaults);
};

module.exports = merge;
module.exports.defaults = lib.defaults;
