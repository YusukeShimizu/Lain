/* eslint-disable no-console */

const {NoiseStream} = require('./Lain/noise-stream');
const net = require('net');
const secp256k1 = require('bcrypto/lib/secp256k1');

const port = 9735;

secp256k1.verify("","30450221008195c0706fc69c357b3b85bf723a538af8c96d774bcb414afaa5e46b757118c9022006689c5a5b766a9374cbd8519216c0e1e89c3a1625c46891d8a4f91e7eba5fb501","522103c4c99ceb1694bda5f80cad4cd31a242ea71cfd5b4111a2bcb1f119000e66cf322103feedffec9cb8f4109d75311a72ff490c66624a1345a8001d20a4755168c00e8a2103ab69b1878b24b4b23d99c9ec3860b1b2744771f0f574423363a9a65890ba491b53ae")

const priv = secp256k1.privateKeyGenerate();
const stream = new NoiseStream();
const socket = net.connect(port,"207.180.244.165");
stream.connect(
  socket,
  Buffer.from(priv,'hex'),
  Buffer.from("03021c5f5f57322740e4ee6936452add19dc7ea7ccf90635f95119ab82a62ae268",'hex')
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
