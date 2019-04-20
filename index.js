/* eslint-disable no-console */

const {NoiseStream} = require('./Lain/noise-stream');
const net = require('net');
const secp256k1 = require('bcrypto/lib/secp256k1');

const port = 9735;

const priv = secp256k1.privateKeyGenerate();
const stream = new NoiseStream();
const socket = net.connect(port);
stream.connect(
  socket,
  Buffer.from(priv,'hex'),
  Buffer.from("03c9e1a4218c24e849cbf565ae33d4b8763774af23bc0df903a13dfeb2d4e008d62",'hex')
);

const testMessage = "Hello World!";
stream.on('connect',()=>{
  console.log("connected!")
  stream.write(Buffer.from(testMessage));
})

stream.on('data', (chunk) => {
  console.log(chunk.toString())
});

stream.once('error', (err) => {
  console.log(err);
});

socket.once('error', (err) => {
  console.log(err);
});

socket.once('close', () => {
  console.log('Socket hangup.');
});

const FRAME_TIME    = 5000; // [ms/frame]

setInterval(function() {
  console.log(Date.now());
}, FRAME_TIME);
