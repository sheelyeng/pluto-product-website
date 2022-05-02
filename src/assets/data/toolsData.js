import eth from '../img/eth-dynamic-gradient.png';
import gas from '../img/fire-dynamic-gradient.png';
import file from '../img/file-dynamic-gradient.png';
import bell from '../img/bell-dynamic-gradient.png';
import locker from '../img/locker-dynamic-gradient.png';
import medal from '../img/medal-dynamic-gradient.png';
import wallet from '../img/wallet-dynamic-gradient.png';
import target from '../img/target-dynamic-gradient.png';
import flash from '../img/flash-dynamic-gradient.png';

import ethGif from '../img/gif/coin-alert.gif';
import gasGif from '../img/gif/GasAlert.gif';
import fileGif from '../img/gif/NFT_Address_Visualizer_.gif';
import bellGif from '../img/gif/NFTAlert.gif';
import lockerGif from '../img/gif/NFTAnalyzer.gif';
import medalGif from '../img/gif/WebMarketplaceEnhancer.gif';
import walletGif from '../img/gif/WalletWatching.gif';
import targetGif from '../img/gif/OSQuick.gif';
import flashGif from '../img/gif/SmartContractExecutor.gif';

export const freeTools = [
  {
    title: 'Coin Tracker',
    icon: eth,
    gif: ethGif,
    isTextLg: false
  },
  {
    title: 'Gas Alerts',
    icon: gas,
    gif: gasGif,
    isTextLg: false
  },
  {
    title: 'NFT Address Visualizer',
    icon: file,
    gif: fileGif,
    isTextLg: true
  },
  {
    title: 'NFT Alerts',
    icon: bell,
    gif: bellGif,
    isTextLg: false
  },
  {
    title: 'NFT Analyzer',
    icon: locker,
    gif: lockerGif,
    isTextLg: false
  },
  {
    title: 'Web Marketplace Enhancer',
    icon: medal,
    gif: medalGif,
    isTextLg: true
  },
  {
    title: 'Wallet Watching',
    icon: wallet,
    gif: walletGif,
    isTextLg: false
  }
];

export const premiumTools = [
  {
    title: 'OpenSea Quick Buy Sniper',
    icon: target,
    gif: targetGif,
    isTextLg: true
  },
  {
    title: 'Smart Contract Executor',
    icon: flash,
    gif: flashGif,
    isTextLg: true
  }
];
