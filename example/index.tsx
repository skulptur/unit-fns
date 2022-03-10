import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sketchMap from './src/graphics'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Renderer } from './src/components/Renderer'

const sketches = Object.values(sketchMap)

const App = () => {
  return (
    <div>
      <Renderer
        width={1000}
        height={1000}
        sketches={sketches}
        kind="2d"
      ></Renderer>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
