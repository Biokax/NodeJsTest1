const assert = require('assert');
const CalculService = require('../../../api/services/CalculService');

describe('CalculService', () => {

  describe('#add', () => {

    it('should add values', () => {
      let result = CalculService.add(1,5);

      assert.equal(result, 6);
    });
  });

  describe('#sub', () => {

    it('should remove values', () => {
      let result = CalculService.sub(5, 1);

      assert.equal(result, 4);
    });
  });
    describe('#mul', () => {
      it('should mul values', () => {
        let result = CalculService.mul(2, 4);

        assert.equal(result, 8);
      });
    });
    describe('#div', () => {
      it('should div values', () => {
        let result = CalculService.div(16, 2);

        assert.equal(result, 8);
      });
    });
  })
