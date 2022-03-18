import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sketchMap from './src/graphics'
import * as animationsMap from './src/animations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Renderer } from './src/components/Renderer'
import { useNavigation } from './src/components/useNavigation'

const sketches = Object.values(sketchMap)
const animations = Object.values(animationsMap)

const sizeFromRatio = (width: number, ratio: number) => {
  return {
    width,
    height: Math.floor(width * ratio),
  }
}

const sizeProps = {
  ...sizeFromRatio(5000, 1920 / 1080),
  tileX: 10,
  tileY: 10,
}

const App = () => {
  const { previous, next, currentId } = useNavigation(sketches.length)
  const [isPlaying, setIsPlaying] = React.useState(true)

  return (
    <div>
      <button onClick={previous}>previous</button>
      <button onClick={next}>next</button>
      {/* <Renderer
        width={width}
        height={height}
        sketches={sketches}
        kind="2d"
      /> */}

      <Renderer
        play={isPlaying}
        onClick={() => {
          console.log('click')
          setIsPlaying(!isPlaying)
        }}
        {...sizeProps}
        sketch={animations[currentId]}
        kind="tile"
      />
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
