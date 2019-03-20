import * as Net from 'net';
import * as Machine from './machine';

class Conn {
  socket: Net.Socket;
  constructor(socket: Net.Socket) {
    this.socket = socket;
  }
  connect(addr: string, port: number) {
    this.socket = Net.createConnection(port, addr, () => {
      console.log('connected!');
    });
  }
}

export function Dial(privateKey: Buffer, addr: string, port: number) {
  const conn = new Conn(new Net.Socket());
  conn.connect(addr, port);
  const actOne = Machine.GenActOne(privateKey);
  conn.socket.write(actOne);
}
