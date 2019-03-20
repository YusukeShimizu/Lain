import * as bitcoinjs from 'bitcoinjs-lib';
import {Server} from './Server';

const ecPair = bitcoinjs.ECPair.makeRandom();
const server = new Server(ecPair.privateKey);

server.connect('127.0.0.1', 10009);
