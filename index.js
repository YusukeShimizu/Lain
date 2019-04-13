/* eslint-disable no-console */

const {Noise} = require('./Lain/noise');
const {NoiseStream} = require('./Lain/noise-stream');
const net = require('net');

const initiator = new Noise();
const staticPriv = initiator.generateKey();

initiator.initState(
  true,
  'lightning',
  Buffer.from(staticPriv, 'hex'),
  Buffer.from('03021c5f5f57322740e4ee6936452add19dc7ea7ccf90635f95119ab82a62ae268', 'hex')
);

const client = new net.Socket();

const host = '207.180.244.165';
const port = 9735;

client.connect( port, host, function(){
  console.log( 'connecting to: ' + host + ':' + port );
  client.write( initiator.genActOne() );
});

client.on( 'data', function( data ){
  console.log(data)
});

const stream = new NoiseStream()
const socket = net.connect(port,host)

stream.connect(socket,Buffer.from(staticPriv, 'hex'),  Buffer.from('03021c5f5f57322740e4ee6936452add19dc7ea7ccf90635f95119ab82a62ae268', 'hex'))

stream.on('data', (chunk) => {
  console.log(chunk)
  this.lastRecv = Date.now();
  this.feedParser(chunk);
});
