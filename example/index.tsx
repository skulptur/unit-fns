import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  bounce,
  circular,
  clamp,
  cosine,
  cubic,
  difference,
  exponential,
  inverse,
  linear,
  maximum,
  minimum,
  mix,
  offset,
  peak,
  quadratic,
  quantize,
  quartic,
  quintic,
  random,
  repeat,
  round,
  sine,
  threshold,
  toggle,
  multiply,
  distance,
  angle,
  triangle,
  Unit,
} from '../src'
import { Gradient } from './components/Gradient'
import { Graph } from './components/Graph'
import { ImageData } from './components/ImageData'
import { compose } from 'ramda'
import { subdivision } from '../src/number/subdivision'

const unitFns1d = {
  linear,
  inverse,
  sine,
  cosine,
  round,
  random,
  bounce,
  circular,
  cubic,
  exponential,
  quadratic,
  quartic,
  quintic,
  difference: (unit: Unit) => difference(0.5 as Unit, unit),
  maximum: (unit: Unit) => maximum(0.5 as Unit, unit),
  minimum: (unit: Unit) => minimum(0.5 as Unit, unit),
  offset: (unit: Unit) => offset(0.5 as Unit, unit),
  peak: (unit: Unit) => peak(0.2 as Unit, unit),
  quantize: (unit: Unit) => quantize(0.2 as Unit, unit),
  repeat: (unit: Unit) => repeat(0.2 as Unit, unit),
  threshold: (unit: Unit) => threshold(0.2 as Unit, unit),
  clamp: (unit: Unit) => clamp(0.2 as Unit, 0.8 as Unit, unit),
  mix: (unit: Unit) => mix(random(), 0.8 as Unit, unit),
  toggle: (unit: Unit) => toggle(random(), 1 as Unit, unit),
}

const unitFn2d = {
  // angle,
  // difference,
  // distance,
  // maximum,
  // minimum,
  // multiply,
  // offset,
  // peak,
  // quantize,
  repeat,
  // threshold,
}

const half = subdivision(2)

const App = () => {
  return (
    <div>
      {Object.entries(unitFn2d).map(([name, unitFn2d]) => {
        return (
          <div key={name}>
            <ImageData
              width={1000}
              height={1000}
              onSample={(x, y, z, a) => {
                const _x = offset(z, triangle(x))
                const _y = offset(a, triangle(y))
                return repeat(distance(_x, _y), unitFn2d(_x, _y))
              }}
            />
          </div>
        )
      })}

      {/* {Object.entries(unitFns1d).map(([name, unitFn]) => {
        return (
          <div key={name}>
            <Graph width={1000} height={100} thickness={6} unitFn={unitFn} />
            <Gradient width={1000} height={50} unitFn={unitFn} />
          </div>
        )
      })} */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
