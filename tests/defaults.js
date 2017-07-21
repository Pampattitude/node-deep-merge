const expect = require('chai').expect;
const deepDiff = require('deep-diff').diff;

const merge = require('../index');

const diffObjects = (o1, o2) => {
  return undefined === deepDiff(o1, o2);
};

describe('defaults', () => {
  it('should have defaults equal to the default configuration', () => {
    expect(diffObjects(merge.defaults, merge.defaults.defaults_)).to.be.equal(true);
  });

  it('should have defaults different from the default configuration (with `merge.defaults.clone = true`)', () => {
    merge.defaults.clone = true;
    expect(diffObjects(merge.defaults, merge.defaults.defaults_)).to.be.equal(false);
  });
});
