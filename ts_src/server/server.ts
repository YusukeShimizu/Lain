import * as Noise from '../noise/noise';

export class Server {
    _privateKey: Buffer;
    constructor(privateKey: Buffer) {
      this._privateKey = privateKey;
    }
    connect(addr: string, port: number) {
      Noise.Dial(this._privateKey, addr, port);
    }
}
