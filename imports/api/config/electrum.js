let electrumServers = {
    KMD: {
        coin: 'KMD',
        serverList: [
            'electrum2.cipig.net',
            '46.4.87.18'
        ],
        port: 10001,
        proto: 'tcp',
        txfee: 0,
    },
    BTC: {
        coin: 'BTC',
        serverList: [
            'electrum1.cipig.net',
            'electrum2.cipig.net'
        ],
        port: 50001,
        proto: 'tcp',
        txfee: 10000,
    },
    ZEC: {
        coin: 'ZEC',
        serverList: [
            'helicarrier.bauerj.eu',
            'node1.komodo.rocks',
            'electrum.hsmiths.com',
            'electrum.bntn.host'
        ],
        port: 50001,
        proto: 'tcp',
        txfee: 10000,
    },
    LTC: {
        coin: 'LTC',
        serverList: [
            'electrum1.cipig.net',
            'electrum2.cipig.net',
            'electrum3.cipig.net',
        ],
        port: 10065,
        proto: 'tcp',
        txfee: 0,
    },
    dICOtoken: {
        coin: 'GLXT',
        serverList: [
            'electrum1.glx.co',
            'electrum2.glx.co'
        ],
        port: 60012,
        proto: 'tcp',
        txfee: 10000
    }
};

module.exports = electrumServers;
