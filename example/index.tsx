import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ImageData } from './src/components/ImageData'
import { sketch1 } from './src/graphics/sketch1'

const sketchMap = {
  sketch1,
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
