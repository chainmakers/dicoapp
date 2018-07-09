let electrumServers = {
    KMD: {
        port: 10001,
        proto: 'tcp',
        txfee: 0,
        coin: 'KMD',
        serverList: [
            'electrum2.cipig.net',
            '46.4.87.18'
        ],
    },
    BTC: {
        port: 50001,
        proto: 'tcp',
        txfee: 10000,
        coin: 'BTC',
        serverList: [
            'helicarrier.bauerj.eu'
        ],
    },
    ZEC: {
        port: 50001,
        proto: 'tcp',
        txfee: 10000,
        coin: 'ZEC',
        serverList: [
            'helicarrier.bauerj.eu',
            'node1.komodo.rocks',
            'electrum.hsmiths.com',
            'electrum.bntn.host'
        ],
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
