import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sketchMap from './src/graphics'
import * as animationsMap from './src/animations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Renderer } from './src/components/Renderer'
import { useNavigation } from './src/components/useNavigation'
import { spritePlayer } from './src/utils/spritePlayer'

const sketches = Object.values(sketchMap)
const animations = Object.values(animationsMap)

const sizeProps = {
  width: 5000,
  height: 5000,
  gridX: 10,
  gridY: 10,
}

const App = () => {
  const { previous, next, currentId } = useNavigation(sketches.length)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const wrapper = wrapperRef.current!
    const { start, stop } = spritePlayer({ ...sizeProps, wrapper })
    start()

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
      <div ref={wrapperRef}>
        <div>
          <Renderer {...sizeProps} sketch={animations[currentId]} kind="grid" />
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
