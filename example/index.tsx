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

const sizeFromRatio = (width: number, ratio: number) => {
  return {
    width,
    height: Math.floor(width * ratio)
  }
}

const sizeProps = {
  ...sizeFromRatio(4000,  1920 / 1080),
  tileX: 10,
  tileY: 10,
}

const App = () => {
  const { previous, next, currentId } = useNavigation(sketches.length)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const wrapper = wrapperRef.current!
    const player = spritePlayer({ ...sizeProps, wrapper })
    player.start()

    return player.stop
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
          <Renderer {...sizeProps} sketch={animations[currentId]} kind="tile" />
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
