// @flow

import { makeCoinGeckoPlugin } from './rate/coingecko.js'
import { makeEdgeRatesPlugin } from './rate/edgeRates.js'
import { makeChangellyPlugin } from './swap/changelly.js'
import { makeChangeNowPlugin } from './swap/changenow.js'
import { makeCoinSwitchPlugin } from './swap/coinswitch.js'
import { makeFaastPlugin } from './swap/faast.js'
import { makeFoxExchangePlugin } from './swap/foxExchange.js'
import { makeGodexPlugin } from './swap/godex.js'
import { makeShapeshiftPlugin } from './swap/shapeshift.js'
import { makeSideshiftPlugin } from './swap/sideshift.js'
import { makeSwitchainPlugin } from './swap/switchain.js'
import { makeTotlePlugin } from './swap/totle.js'
import { makeTransferPlugin } from './swap/transfer.js'

const edgeCorePlugins = {
  // Rate plugins:
  coingecko: makeCoinGeckoPlugin,
  edgeRates: makeEdgeRatesPlugin,

  // Swap plugins:
  changelly: makeChangellyPlugin,
  changenow: makeChangeNowPlugin,
  coinswitch: makeCoinSwitchPlugin,
  faast: makeFaastPlugin,
  foxExchange: makeFoxExchangePlugin,
  godex: makeGodexPlugin,
  shapeshift: makeShapeshiftPlugin,
  sideshift: makeSideshiftPlugin,
  switchain: makeSwitchainPlugin,
  totle: makeTotlePlugin,
  transfer: makeTransferPlugin
}

if (
  typeof window !== 'undefined' &&
  typeof window.addEdgeCorePlugins === 'function'
) {
  window.addEdgeCorePlugins(edgeCorePlugins)
}

export default edgeCorePlugins
