import * as chai from 'chai';
import { describe, it } from 'mocha';

import { Server } from '../server/Server';

describe('Server Creation', () => {

    it('Server initiation.', () => {
        const server = new Server(Buffer.from('test'));
        chai.assert.equal(server._privateKey.toString(), 'test');
    });

});
