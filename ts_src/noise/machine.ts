import * as bitcoinjs from 'bitcoinjs-lib';
import * as crypto from 'crypto';

// GenActOne generates the initial packet (act one) to be sent from initiator
// to responder. During act one the initiator generates a fresh ephemeral key,
// hashes it into the handshake digest, and performs an ECDH between this key
// and the responder's static key. Future payloads are encrypted with a key
// derived from this result.
//
//    -> e, es

export function GenActOne(remotePub: Buffer): Buffer {

  // Sender Actions:
  // 1. e = generateKey()
  const ephemeral = bitcoinjs.ECPair.makeRandom();
  // h = SHA-256(h || e.pub.serializeCompressed())
  mixHash(ephemeral);
  // es = ECDH(e.priv, rs)
  // The initiator performs an ECDH between its newly generated
  // ephemeral key and the remote node's static public key.
  const s = ecdh(remotePub, ephemeral);

  return ephemeral.publicKey;
}

// mixHash hashes the passed input data into the cumulative handshake digest.
// The running result of this value (h) is used as the associated data in all
// decryption/encryption operations.
function mixHash(e: bitcoinjs.ECPair) {
  const hash = crypto.createHash('sha256');
  hash.write(e.publicKey);
  console.log(hash.digest);
}

function ecdh(remotePub: Buffer, publicKey: Buffer) {

}
