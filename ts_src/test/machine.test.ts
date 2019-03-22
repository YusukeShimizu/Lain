import * as chai from 'chai';
import { describe, it } from 'mocha';
import * as Machine from '../noise/machine';

describe('noise', () => {

    it('Gen act one.', () => {
        const actone = Machine.GenActOne();
        chai.assert.equal(actone.byteLength, 33);
    });

});
