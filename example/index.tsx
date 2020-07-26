import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  Unit,
  inverse,
  linear,
  round,
  random,
  difference,
  maximum,
  minimum,
  offset,
  peak,
  quantize,
  repeat,
  threshold,
  clamp,
  mix,
  toggle,
} from '../src'
import { Gradient } from './components/Gradient'
import { Graph } from './components/Graph'

const unitFns1d = {
  linear,
  inverse,
  round,
  random,
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

const App = () => {
  return (
    <div>
      {Object.entries(unitFns1d).map(([name, unitFn]) => {
        return (
          <div key={name}>
            <Graph width={1000} height={100} thickness={6} unitFn={unitFn} />
            <Gradient width={1000} height={50} unitFn={unitFn} />
          </div>
        )
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
