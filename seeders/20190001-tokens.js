module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tokens', [{
    ticker: 'EXP',
    name: 'Expanse',
    website: 'https://expanse.tech',
    description: 'Expanse.Tech™ was created as the first stable fork of Ethereum by one of the earliest blockchain developers and cryptocurrency entrepreneurs out there, Christopher Franko.',
    bitcointalk: 'https://bitcointalk.org/index.php?topic=1173722.0',
    decimals: 18,
    type: 'coin',
    cmc: 'https://coinmarketcap.com/currencies/expanse/',
    twitter: 'https://twitter.com/ExpanseOfficial',
  }, {
    ticker: 'LAB',
    name: 'Tokenlab',
    website: 'https://tokenlab.io',
    description: 'Tokenlab is an ICO- and smart-contract-management platform that aims to simplify the life cycle of an ICO.',
    bitcointalk: 'https://bitcointalk.org/index.php?topic=2153185.0',
    decimals: 18,
    type: 'ERC-644',
    // whitepaper: 'http://www.borderlesscorp.com/docs/tokenlab-whitepaper.pdf',
    cmc: 'https://coinmarketcap.com/currencies/tokenlab/',
    twitter: 'https://twitter.com/TokenlabIO',
    address: '0xa887adb722cf15bc1efe3c6a5d879e0482e8d197',
    totalSupply: 15694112.07,
  }, {
    ticker: 'PEX',
    name: 'EXPex',
    website: 'http://expex.io',
    description: 'EXPEX is the new decentralized exchange powered by Expanse.',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/expex/',
    address: '0x0cc6177ea69b0f1c2415043ac81ccd8f77d0c1a9',
    totalSupply: 1000000000.00,
  }, {
    ticker: 'EGG',
    name: 'Egg Token',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'EggSwap is an automated market making (AMM) decentralized exchange (DEX) on the Expanse blockchain.',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/egg/',
    address: '0xd1365a5af713cde10c6ac3fb9edbb2bbbd4b2ba2',
    totalSupply: 1,
  }, {
    ticker: 'XEGG',
    name: 'Egg Tokens Stake',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'EggSwap is an automated market making (AMM) decentralized exchange (DEX) on the Expanse blockchain.',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/xegg/',
    address: '0x56c28aa1ae5be73fdbd73634736ae9bd1c3b78fb',
    totalSupply: 2,
  }, {
    ticker: 'WEXP',
    name: 'Wrapper Expanse',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'Wrapped Expanse on Expanse blockchain. ;)',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/wexp/',
    address: '0x331631b4bb93b9b8962fae15860bd538a389395a',
    totalSupply: 3,
  }, {
    ticker: 'LOVE',
    name: 'LOVE',
    website: '',
    twitter: 'https://twitter.com/eggswap',
    description: 'Community token',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/love/',
    address: '0x9d2761a714b5b2efa325a8a3eee21be32aaceb4a',
    totalSupply: 4,
  }, {
    ticker: 'T64',
    name: 'T64',
    website: '',
    twitter: 'https://twitter.com/eggswap',
    description: 'Test token, that noone controls.',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/t64/',
    address: '0x72332c512bf2da5a7cd11752b380f7d8fcbba847',
    totalSupply: 5,
  }, {
    ticker: 'ELABLP',
    name: 'EggSwap LP (expLAB LP)',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'You will get ELABLP tokens from being a "Liquidity Provider" in the EggSwap EXP-LAB Pools ',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/explablp/',
    address: '0x9f17c654ca15d2be76cfdf6cb806a4b8e4678eed',
    totalSupply: 6,
  }, {
    ticker: 'ELOVELP',
    name: 'EggSwap LP (expLOVE LP)',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'You will get ELOVELP tokens from being a "Liquidity Provider" in the EggSwap EXP-LOVE Pools ',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/elovelp/',
    address: '0xc150686b8b24f0e08f1d94773d0355427c25ef0e',
    totalSupply: 7,
  }, {
    ticker: 'EEGGLP',
    name: 'EggSwap LP (expEGG LP)',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'You will get EEGGLP tokens from being a "Liquidity Provider" in the EggSwap EXP-EGG Pools ',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/eegglp/',
    address: '0xd985c19c547386d99eca85f86c0afcf257ce6982',
    totalSupply: 8,
  }, {
    ticker: 'ET64LP',
    name: 'EggSwap LP (expT64 LP)',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'You will get EEGGLP tokens from being a "Liquidity Provider" in the EggSwap EXP-T64 Pools ',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/expex/',
    address: '0x505b2fe24aff173291fead573e90dfb21c754bfd',
    totalSupply: 9,
  }, {
    ticker: 'EPEXLP',
    name: 'EggSwap LP (expPEX LP)',
    website: 'https://www.eggs.cool/',
    twitter: 'https://twitter.com/eggswap',
    description: 'You will get EEGGLP tokens from being a "Liquidity Provider" in the EggSwap EXP-PEX Pools ',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/epexlp/',
    address: '0x90390a27dbe65991ced136ca6f95fd5953c5e1b8',
    totalSupply: 10,
  }, {
    ticker: 'PRM',
    name: 'Promineros',
    website: 'https://twitter.com/Pro_Mineros/media',
    twitter: 'https://twitter.com/Pro_Mineros/media',
    description: 'The PRM token was built for the Hispanic community of crypto-miners as an incentive to help newbies',
    decimals: 18,
    type: 'ERC-644',
    cmc: 'https://coinmarketcap.com/currencies/promineros/',
    address: '0x87eb2fdf607b46f324984771ffdf2a0396139bdf',
    totalSupply: 11,
  }, {
    ticker: 'WAGMI',
    name: 'Wagmi',
    website: 'https://twitter.com/',
    twitter: 'https://twitter.com/',
    description: '',
    decimals: 18,
    type: 'ERC-20',
    cmc: 'https://coinmarketcap.com/currencies/wagmi/',
    address: '0x0D14F385647E66283E8E5D9c567296751Ac7ee7D',
    totalSupply: 11,
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tokens', null, {}),
}
