let electrumServers = { //by default KMD, BTC and LTC supported
    KMD: {
        address: '46.4.87.18',
        port: 10001,
        proto: 'tcp',
        txfee: 0,
        coin: 'KMD',
        altserverList: [
            'electrum1.cipig.net',
            'electrum2.cipig.net'
        ],
    },
    BTC: {
        address: 'electrum.hsmiths.com',
        port: 50001,
        proto: 'tcp',
        txfee: 10000,
        coin: 'BTC',
        altserverList: [
            'helicarrier.bauerj.eu'
        ],
    },
    dICOtoken: {
        address: '0.0.0.0',
<<<<<<< HEAD
        port: 00000,
=======
        port: 0,
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
        proto: 'tcp',
        txfee: 10000,
        coin: 'dICOtoken',
        altserverList: [
            'electrum1.cipig.net', //alternative spv - needs to be same port
            'electrum2.cipig.net'
        ],
    }
};

<<<<<<< HEAD
let tokenconfig = { //custom token config
    dICOtoken: {
        name: 'dICO Token',
        shortcode: 'dICOT',
        siteurl: 'https://www.dicotoken.com',
        supporturl: 'https://helpdesk.dicotoken.com',
        pricebob: '0x_pubkey_bob',
        netid: 0000,
        seed: '0.0.0.0'
    }
};

module.exports = electrumServers;
module.exports = tokenconfig;
=======
module.exports = electrumServers;
>>>>>>> 1e09c669345dd7cce715cb4bf0274ce161400cfe
