import { ICurrency } from './types/currency';

export const testData: { rates: Record<string, ICurrency> } = {
  rates: {
    btc: {
      name: 'Bitcoin',
      unit: 'BTC',
      value: 1,
      type: 'crypto',
    },
    eth: {
      name: 'Ether',
      unit: 'ETH',
      value: 25.724,
      type: 'crypto',
    },
    ltc: {
      name: 'Litecoin',
      unit: 'LTC',
      value: 819.379,
      type: 'crypto',
    },
    bch: {
      name: 'Bitcoin Cash',
      unit: 'BCH',
      value: 183.207,
      type: 'crypto',
    },
    bnb: {
      name: 'Binance Coin',
      unit: 'BNB',
      value: 141.298,
      type: 'crypto',
    },
    eos: {
      name: 'EOS',
      unit: 'EOS',
      value: 89970.277,
      type: 'crypto',
    },
    xrp: {
      name: 'XRP',
      unit: 'XRP',
      value: 41905.738,
      type: 'crypto',
    },
    xlm: {
      name: 'Lumens',
      unit: 'XLM',
      value: 231979.37,
      type: 'crypto',
    },
    link: {
      name: 'Chainlink',
      unit: 'LINK',
      value: 3610.531,
      type: 'crypto',
    },
    dot: {
      name: 'Polkadot',
      unit: 'DOT',
      value: 10889.89,
      type: 'crypto',
    },
  },
};
