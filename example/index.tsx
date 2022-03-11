import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sketchMap from './src/graphics'
import * as animationsMap from './src/animations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Renderer } from './src/components/Renderer'
import { useNavigation } from './src/components/useNavigation'
import { loop } from './src/utils/loop'

const sketches = Object.values(sketchMap)
const animations = Object.values(animationsMap)
const width = 8000
const height = 8000
const gridX = 10
const gridY = 10

const App = () => {
  const { previous, next, currentId } = useNavigation(sketches.length)
  const posRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let currentFrame = 0
    const stop = loop(() => {
      const multX = currentFrame % gridX
      const frameWidth = width / gridX
      const multY = Math.floor(currentFrame / gridY) % gridY
      const frameHeight = height / gridY

      posRef.current!.style.transform = `translate(-${frameWidth *
        multX}px, -${frameHeight * multY}px)`

      currentFrame++
    })

    return stop
  }, [])

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
      <div
        style={{
          width: width / gridX,
          height: height / gridY,
          overflow: 'hidden',
        }}
      >
        <div ref={posRef}>
          <Renderer
            width={width}
            height={height}
            sketch={animations[currentId]}
            kind="grid"
            gridX={gridX}
            gridY={gridY}
          />
        </div>
      </div>
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
