# NodeBB Feathercoin Tipping Plugin 

This repo serves as a staging ground for the nodebb feathercoin tipping plugin.

## Purpose

The purpose of this plugin is to create an easy method for users of nodebb to be able to tip each other.
If you would like to see this in action, you can view at [Feathercoin Forum](https://forum.feahtercoin.com/)

Presently it uses the [BIP 21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) to launch one of the following wallets:

* [Official QT Wallet](https://feathercoin.com/#wallets)
* [Feathercoin-wallet-2](https://play.google.com/store/apps/details?id=com.feathercoin.wallet) for Android

This allows the transfer of any amount of Feathercoin directly using your wallet, rather than relying on a 'tipbot'

Other wallets supporting [BIP 21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) should work, too, but are 
not tested.

## Installation

requires min nodeBB 0.6.0

The latest released version is available on NPM and can be downloaded within the Admin panel

Alternative if you want to experiment with more recent version you can access directly from GitHub

git clone https://github.com/wellenreiter01/nodebb-plugin-feathercoin

cp nodebb-plugin-feathercoin ./nodebb/node_modules/

goto the nodebb Admin

General reload

EXTEND

Plugins

Activate nodebb-plugin-feathercoin

## Browser requirements

### Windows

Crome based browsers should work out of th box.
For other browsers a network protocol handler must be added manually, to get the 'feathercoin:' protocol pointed to the feathercoin wallet.
See broswer documentation for details how to do this.

### Android
Standard browser works without any modifications.
