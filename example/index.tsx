import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  cosine,
  difference,
  maximum,
  minimum,
  offset,
  peak,
  quantize,
  repeat,
  sine,
  threshold,
  multiply,
  distance,
  angle,
  triangle,
  subdivision,
} from '../src'
import { curry } from 'ramda'
import { ImageData } from './components/ImageData'

const unitFn2d = {
  angle: curry(angle),
  difference: curry(difference),
  distance: curry(distance),
  maximum: curry(maximum),
  minimum: curry(minimum),
  multiply: curry(multiply),
  offset: curry(offset),
  peak: curry(peak),
  quantize: curry(quantize),
  repeat: curry(repeat),
  threshold: curry(threshold),
}

const quarter = subdivision(4)

const App = () => {
  return (
    <div>
      {Object.entries(unitFn2d).map(([name, unitFn2d]) => {
        return (
          <div key={name}>
            <ImageData
              width={500}
              height={500}
              onSample={(x, y) => {
                const _x = repeat(quarter, triangle(x))
                const _y = repeat(quarter, triangle(y))
                return unitFn2d(sine(_x), cosine(_y))
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
