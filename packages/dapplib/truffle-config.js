require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rifle still hospital inflict permit fresh gate'; 
let testAccounts = [
"0x62f6b172945dac97d4d99146a97a63344af4e9e5a214e78969bf36f1e49b8d0f",
"0x017aa1710056ab9f608928a9c7ff82fb51402561543db078c437272912ff4db4",
"0xd812ebcb4a236b0735cfada7db30f3ead210148a874b44354f80449082a6f66b",
"0xfd83d06863e35c7157c44c9199f747e0779ff2a4e49ee41f580c089dca24802e",
"0x3a81ddc12dd6ba297305bc41d0635fce475659da85779c39fc9af92eeece98a6",
"0xb0c48fe4b1f4a0e8bdbe3cd4abc76b07f13426c2cd91180fc4048e60a2a0b030",
"0x4e00ca7688bebcf5449665410fe60d5817feb712874bbd8eea1eb183f1077f53",
"0x848e184a99ceec4cd38d3efd84aeb99a6c23398da79dd6cdc1dc1d7ac1bd08eb",
"0x05ba4070d8ab0fbfc755ff511fc5f573e1e3c7e7c4a32692dd365d95ab2984b3",
"0x0702bee88d33ceaa6f02579332a842f265eec934a6d42c43179f2e3d215c84ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

