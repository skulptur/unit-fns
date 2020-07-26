import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  Unit,
  inverse,
  linear,
  round,
  difference,
  maximum,
  minimum,
  offset,
  peak,
  quantize,
} from '../src'
import { Gradient } from './components/Gradient'
import { Graph } from './components/Graph'

const unitFns1d = {
  inverse,
  linear,
  round,
  difference: (unit: Unit) => difference(0.5 as Unit, unit),
  maximum: (unit: Unit) => maximum(0.5 as Unit, unit),
  minimum: (unit: Unit) => minimum(0.5 as Unit, unit),
  offset: (unit: Unit) => offset(0.5 as Unit, unit),
  peak: (unit: Unit) => peak(0.2 as Unit, unit),
  quantize: (unit: Unit) => quantize(0.2 as Unit, unit),
}

const App = () => {
  return (
    <div>
      {Object.entries(unitFns1d).map(([name, unitFn]) => {
        return (
          <>
            <Graph
              key={name}
              width={1000}
              height={100}
              thickness={6}
              unitFn={unitFn}
            />
            <Gradient key={name} width={1000} height={50} unitFn={unitFn} />
          </>
        )
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
