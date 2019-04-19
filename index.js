/* eslint-disable no-console */

const {Noise} = require('./Lain/noise');
const {NoiseStream} = require('./Lain/noise-stream');
const net = require('net');

const initiator = new Noise();
const staticPriv = initiator.generateKey();
const remotePub = '03021c5f5f57322740e4ee6936452add19dc7ea7ccf90635f95119ab82a62ae268'

const host = '207.180.244.165';
const port = 9735;

const stream = new NoiseStream()
const socket = net.connect(port,host)

const s = stream.connect(
  socket,
  Buffer.from(staticPriv, 'hex'),
  Buffer.from(remotePub, 'hex')
);

s.start();

const FRAME_TIME    = 5000; // [ms/frame]

setInterval(function() {
  console.log(Date.now());
}, FRAME_TIME);
