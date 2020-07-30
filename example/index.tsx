import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ImageData } from './src/components/ImageData'
import { sketch1 } from './src/graphics/sketch1'
import { sketch2 } from './src/graphics/sketch2'
import { sketch3 } from './src/graphics/sketch3'
import { sketch4 } from './src/graphics/sketch4'

const sketchMap = {
  sketch1,
  sketch2,
  sketch3,
  sketch4,
}

const App = () => {
  return (
    <div>
      {Object.entries(sketchMap).map(([name, onSample]) => {
        return (
          <div key={name}>
            <ImageData width={1000} height={1000} onSample={onSample} />
          </div>
        )
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
