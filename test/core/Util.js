/**
 * Created by leiyouwho on 7/18/16.
 */

import should from 'should';
import { random_string } from '../../src/core/Util';

describe('Utils', () => {
  describe('random_string', () => {

    it('根据参数返回该参数长度的字符串', () => {
      random_string(6).should.String();
      random_string(8).length.should.equal(8);
    });

    it('每次返回的字符串都不一样', () => {
      should.notEqual(random_string(6), random_string(6));
    });
  });
});