
'use strict';

const net = require('net');
const EventEmitter = require('events');

class Peer extends EventEmitter{
  constructor(){
    super()
  }
  connect(addr){
    const socket = net.connect(addr.port,addr.host);
    
    return socket;
  }
}

module.exports = Peer
