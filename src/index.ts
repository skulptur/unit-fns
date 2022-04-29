import * as _unary from './lib/unary'
import * as _binary from './lib/binary'
import * as _ternary from './lib/ternary'

export * from './lib/core'
export * from './lib/unary'

export const unary = _unary
export * from './lib/binary'

export const binary = _binary
export * from './lib/ternary'

export const ternary = _ternary
export * from './lib/number'
export * from './lib/other'
