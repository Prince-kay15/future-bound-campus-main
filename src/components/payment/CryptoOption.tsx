
import React from 'react';
import { Bitcoin, Coins, DollarSign, Wallet } from 'lucide-react';

export interface CryptoOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  walletAddress: string;
}

// Available cryptocurrencies
export const cryptoOptions: CryptoOption[] = [
  {
    id: 'btc',
    name: 'Bitcoin (BTC)',
    icon: <Bitcoin className="text-[#F7931A]" size={18} />,
    walletAddress: 'bc1q8xyz7a5vr4lxns56udzwgmx57j3q7v3vzt4f3m'
  },
  {
    id: 'eth',
    name: 'Ethereum (ETH)',
    icon: <Coins className="text-[#627EEA]" size={18} />,
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
  },
  {
    id: 'usdt',
    name: 'Tether (USDT)',
    icon: <DollarSign className="text-[#26A17B]" size={18} />,
    walletAddress: 'TMS2e5RNFvNc4x3LzGgLZEgC9UJH2PDB9x'
  },
  {
    id: 'usdc',
    name: 'USD Coin (USDC)',
    icon: <DollarSign className="text-[#2775CA]" size={18} />,
    walletAddress: '0xabcdef1234567890abcdef1234567890abcdef12'
  },
  {
    id: 'bnb',
    name: 'Binance Coin (BNB)',
    icon: <Wallet className="text-[#F3BA2F]" size={18} />,
    walletAddress: 'bnb1g5p04snezgpky203fq6da9qyjsy2k9kzr5yuhl'
  },
  {
    id: 'xrp',
    name: 'Ripple (XRP)',
    icon: <Coins className="text-[#23292F]" size={18} />,
    walletAddress: 'rLW9gnQo7BQhU6igk5keqYnH3TVrCxGRzm'
  },
  {
    id: 'ada',
    name: 'Cardano (ADA)',
    icon: <Coins className="text-[#0033AD]" size={18} />,
    walletAddress: 'addr1qxck8s2lz5vkl5h7adusjfxjtd0mel0hkz6qlqjxfft2kjwjkxrpqkw8wkzna27g8zv5l4tu4xqfwv4xjygj0qyc96qf3zens'
  },
  {
    id: 'sol',
    name: 'Solana (SOL)',
    icon: <Coins className="text-[#9945FF]" size={18} />,
    walletAddress: '7XSvJnS19ToQJyDYHZvDUFYaNJ8zFxTYEi6duYNWYQVA'
  },
  {
    id: 'doge',
    name: 'Dogecoin (DOGE)',
    icon: <Coins className="text-[#C2A633]" size={18} />,
    walletAddress: 'DFTBhzAL5DTQh8XsrjMFv9sFEMv6sTqvQv'
  },
  {
    id: 'dot',
    name: 'Polkadot (DOT)',
    icon: <Coins className="text-[#E6007A]" size={18} />,
    walletAddress: '14Nh7xvdZxgCHvrQFjdQrTGQXyUzsFHYKW7DMn97eUf26fgK'
  },
  {
    id: 'ltc',
    name: 'Litecoin (LTC)',
    icon: <Coins className="text-[#345D9D]" size={18} />,
    walletAddress: 'LTCmainnet4vRgDxBQzPVrNktf8K5yCuKAqK'
  },
  {
    id: 'link',
    name: 'Chainlink (LINK)',
    icon: <Coins className="text-[#2A5ADA]" size={18} />,
    walletAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b'
  },
  {
    id: 'bch',
    name: 'Bitcoin Cash (BCH)',
    icon: <Coins className="text-[#8DC351]" size={18} />,
    walletAddress: 'bitcoincash:qzcnkpyxtfzv9n5h2m4qn8830537cqlu5qq4c9plxv'
  },
  {
    id: 'xlm',
    name: 'Stellar (XLM)',
    icon: <Coins className="text-[#6F36DC]" size={18} />,
    walletAddress: 'GAUZSMR7BVWHF2VOUNEBSNCYRU44AEOMVWC74WFCNR3THYW6QNSWIVS5'
  },
  {
    id: 'avax',
    name: 'Avalanche (AVAX)',
    icon: <Coins className="text-[#E84142]" size={18} />,
    walletAddress: '0x9a0243458F94c1d82a1d29CE980f2A6B3f0Ce04A'
  },
  {
    id: 'uni',
    name: 'Uniswap (UNI)',
    icon: <Coins className="text-[#FF007A]" size={18} />,
    walletAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
  },
  {
    id: 'matic',
    name: 'Polygon (MATIC)',
    icon: <Coins className="text-[#8247E5]" size={18} />,
    walletAddress: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
  },
  {
    id: 'atom',
    name: 'Cosmos (ATOM)',
    icon: <Coins className="text-[#2E3148]" size={18} />,
    walletAddress: 'cosmos1clpqr4nrk4khgkxj78fcwwh6dl3uw4ep4tgu9q'
  },
  {
    id: 'algo',
    name: 'Algorand (ALGO)',
    icon: <Coins className="text-[#000000]" size={18} />,
    walletAddress: 'VCMJKWOY5P5P7SKMZFFOCEROPJCZOTIJMNIYNUCKH7LRO45JMJP6UYBUJA'
  },
  {
    id: 'shib',
    name: 'Shiba Inu (SHIB)',
    icon: <Coins className="text-[#FFA409]" size={18} />,
    walletAddress: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE'
  }
];
