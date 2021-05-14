require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'idea glove flee street name raise mad smile imitate prison equal genius'; 
let testAccounts = [
"0xe1610e0ad8052e07ea5f27609cf512c2f36bb8a666f1d48572fb1792c299feeb",
"0x017d1c94e99b8968f05f73a07bac5d6f99d303863a97c9bd48fd4e5fbc21f458",
"0x81f95920f6415e379cf51262a0f7a0b4260fe08d12f40b62cb4d4e974e8b228c",
"0x9b9936f69b4588efe4ba7717e62eb5aeba37f5554eb26db1d1e67fc6b541639c",
"0xa19ed872b3c12fc37b2ed90653bd387dec74e2069575ab1d34e3100b21869181",
"0x4d0d38191d081f023e58ebfc7d9783638f22e0e7d96564ce42ff6a9381c7f74e",
"0x7399cf973661c9b26cd7a3231304f72605669f9d723443400ada45785f4107d9",
"0xa38eb67a1c565943485ffe2135e2d0fe17670739aa65b22d6a5bc0a82ab9e112",
"0xf9331f160666553a2725d26e4f144a016d58cd536ce30c95a6b90507652bdfba",
"0xf0c4eb9f5a53dc15ee35101b35015d0964847fc3299f1ff2bc75d834ebc90338"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

