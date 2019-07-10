// @flow

import { makeCoinbasePlugin } from './rate/coinbase.js'
import { makeCoincapPlugin } from './rate/coincap.js'
import { makeCoincapLegacyPlugin } from './rate/coincapLegacy.js'
import { makeCurrencyconverterapiPlugin } from './rate/currencyconverterapi.js'
import { makeNomicsPlugin } from './rate/nomics.js'
import { makeShapeshiftRatePlugin } from './rate/shapeshift-rate.js'
import { makeXagauPlugin } from './rate/xagau.js'
import { makeChangellyPlugin } from './swap/changelly.js'
import { makeChangeNowPlugin } from './swap/changenow.js'
import { makeFaastPlugin } from './swap/faast.js'
import { makeShapeshiftPlugin } from './swap/shapeshift.js'

const edgeCorePlugins = {
  // Rate plugins:
  'shapeshift-rate': makeShapeshiftRatePlugin,
  coinbase: makeCoinbasePlugin,
  coincap: makeCoincapPlugin,
  coincapLegacy: makeCoincapLegacyPlugin,
  currencyconverterapi: makeCurrencyconverterapiPlugin,
  nomics: makeNomicsPlugin,
  xagau: makeXagauPlugin,
  // Swap plugins:
  changelly: makeChangellyPlugin,
  changenow: makeChangeNowPlugin,
  faast: makeFaastPlugin,
  shapeshift: makeShapeshiftPlugin
}

if (
  typeof window !== 'undefined' &&
  typeof window.addEdgeCorePlugins === 'function'
) {
  window.addEdgeCorePlugins(edgeCorePlugins)
}

export default edgeCorePlugins
