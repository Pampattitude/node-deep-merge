const expect = require('chai').expect;

const merge = require('../index');

describe('Object prototype', () => {
  describe('`merge.updateObjectProto()`', () => {
    it('should modify the object prototype', () => {
      merge.updateObjectProto();

      expect(Object.prototype).to.have.property('merge');
      expect(Object.prototype.merge).to.be.a('function');

      delete Object.prototype.merge;
    });

    it('should contain a `defaults` attribute', () => {
      merge.updateObjectProto();

      expect(Object.prototype.merge).to.have.property('defaults');

      delete Object.prototype.merge;
    });

    it('should contain a `defaults` attribute with `shallow` set to true (with `merge.updateObjectProto({shallow: true})`)', () => {
      merge.updateObjectProto({shallow: true});

      expect(Object.prototype.merge.defaults).to.have.property('shallow');
      expect(Object.prototype.merge.defaults.shallow).to.be.equal(true);

      delete Object.prototype.merge;
    });
  });

  describe('`{}.merge()`', () => {
  });
});
