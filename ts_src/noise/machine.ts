
// GenActOne generates the initial packet (act one) to be sent from initiator
// to responder. During act one the initiator generates a fresh ephemeral key,
// hashes it into the handshake digest, and performs an ECDH between this key
// and the responder's static key. Future payloads are encrypted with a key
// derived from this result.
//
//    -> e, es

export function GenActOne(privatekey: Buffer): Buffer {

  return privatekey;
}
