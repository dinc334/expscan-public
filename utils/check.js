const pools = {
  '0X342709DE12F503A689EFA9671532A72E19A9BBC7': 'Poloniex',
  '0XC9710872D3E65EDBF7F8776829DD7B21F2085E40': 'Bittrex',
  '0X6DBFE39370ADC9E0F284ED4FD8025342E99D21D6': 'Dwarfpool',
  '0X6E4A860420E024D2F269D45F85A24DC6F586376D': 'EBS',
  '0XA887ADB722CF15BC1EFE3C6A5D879E0482E8D197': 'Tokenlab',
  '0X313C362544A92D182B3EF06C2AE786EE7692D10E': 'Cryptopia',
  '': 'expmine.pro',
  '0X00A86233F4D65F4018CA7F8626B96CE72AF05A7C': 'exp.2miners.com',
  '0X4A870254919ACE6BF7F1DC80FE6DE28299BEB6D9': 'exp.minerpool.net',
  '0XFC08A424D42B060F47F534A0B4C0233C094457E6': 'pool.expanse.tech',
  '0X77EF636EEDF371E2589EAD7631FA8FDC506DEFF8': 'exppool.mashash.org',
  '0X94C4B0F47123AD4D3DEC4C27D96EB4061AA544E0': 'exp.ethertrench.com',
  '0X100815B7130A849333B24E4472F8983563AD53F8': 'exp.mole-pool.net',
  '0X704EE3DFD9B2AF0CFB71064E6E8EF4ED314993AC': 'clona.ru',
  '0X3021D95DF8B7E66A8FCF7F81A441DB0FA700204F': 'exp.minandoando.com',
  '0X9C3EF85668F064ED75A707A9FEF00ED55BAB01F5': 'TokenlabICO',
  '0xa9ac4dc20cfc42e7c833d328971587e76b718135': 'BadGuy',
  '0XBB94F0CEB32257275B2A7A9C094C13E469B4563E': 'DevFund',
}

const contracts = {
  '0XA887ADB722CF15BC1EFE3C6A5D879E0482E8D197': 'Tokenlab',
  '0X0CC6177EA69B0F1C2415043AC81CCD8F77D0C1A9': 'Pex',
  '0XD1365A5AF713CDE10C6AC3FB9EDBB2BBBD4B2BA2': 'EGG',
  '0X56C28AA1AE5BE73FDBD73634736AE9BD1C3B78FB': 'XEGG',
  '0X331631B4BB93B9B8962FAE15860BD538A389395A': 'WEXP',
  '0X9D2761A714B5B2EFA325A8A3EEE21BE32AACEB4A': 'LOVE',
  '0X72332C512BF2DA5A7CD11752B380F7D8FCBBA847': 'T64',
  '0X9F17C654CA15D2BE76CFDF6CB806A4B8E4678EED': 'ELABLP',
  '0XC150686B8B24F0E08F1D94773D0355427C25EF0E': 'ELOVELP',
  '0XD985C19C547386D99ECA85F86C0AFCF257CE6982': 'EEGGLP',
  '0X505B2FE24AFF173291FEAD573E90DFB21C754BFD': 'ET64LP',
  '0X90390A27DBE65991CED136CA6F95FD5953C5E1B8': 'EPEXLP',
  '0X87EB2FDF607B46F324984771FFDF2A0396139BDF': 'PRM',
}

const check = {
  checkAddress: function checkAddress(address, account) {
    const upper = address.toUpperCase()
    if (Object.keys(pools).includes(upper)) {
      return pools[upper]
    }
    if (account) {
      return address
    }
    return null
  },

  checkContractName: function checkContractName(address) {
    const upper = address.toUpperCase()
    if (Object.keys(contracts).includes(upper)) {
      return contracts[upper]
    }
    return address
  },
}

module.exports = check
