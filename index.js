const {Noise} = require('./Lain/noise');

const initiator = new Noise();
const staticPriv = initiator.generateKey();

initiator.initState(
  true,
  'lightning',
  Buffer.from(staticPriv, 'hex'),
  Buffer.from('03021c5f5f57322740e4ee6936452add19dc7ea7ccf90635f95119ab82a62ae268', 'hex')
);
