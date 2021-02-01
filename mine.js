const { aggregate } = require('@makerdao/multicall');

const config = {
  rpcUrl: 'http://140.179.25.175:26891',
  multicallAddress: '0xBa5934Ab3056fcA1Fa458D30FBB3810c3eb5145f',
}

const calls = [
  {
    target: '0x7E5fE1e587A5c38B4A4A9ba38a35096F8EA35aaC',
    call: ['pendingWasp(uint256,address)(uint256)', 0, '0x5560af0f46d00fcea88627a9df7a4798b1b10961'],
    returns: [['wasp', val => (val / 1e18).toFixed(0)]]
  },
  {
    target: '0xe8acf61f0916f0133bbf642133de43a8b4050256',
    call: ['getMinerBalance(address,address)(uint256)', '0x5560af0f46d00fcea88627a9df7a4798b1b10961', '0x9f6273f7dcd0195e0452859882ef97e1753fb865'],
    returns: [['fnx', val => (val / 1e18).toFixed(0)]]
  },
]

aggregate(calls, config).then((ret) => {
  console.log('WASP:' + ret.results.transformed.wasp + ', FNX:' + ret.results.transformed.fnx);
}).catch(console.log);