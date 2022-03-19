import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sketchMap from './src/graphics'
import * as animationsMap from './src/animations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRenderer, Renderer } from './src/components/Renderer'
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
  ...sizeFromRatio(1800, 1080 / 1920),
  tileX: 10,
  tileY: 10,
}

const App = () => {
  const { previous, next, currentId } = useNavigation(sketches.length)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)
  const [isDone, setIsDone] = React.useState(false)
  const [renderer, setRenderer] = React.useState<Renderer | null>(null)

  React.useEffect(() => {
    const renderer = createRenderer({
      ...sizeProps,
      onSample: animations[currentId],
      wrapper: wrapperRef.current!,
      onProgress: setProgress,
      onDone: () => setIsDone(true),
    })

    setRenderer(renderer)

    renderer.player.start()
  }, [])

  return (
    <div>
      <button onClick={previous}>previous</button>
      <button onClick={next}>next</button>
      {/* <button onClick={() => props.onSave()}>save</button> */}
      <div style={{ width: `${sizeProps.width}px`, margin: '0 auto' }}>
        <div
          style={{
            width: `${progress * 100}%`,
            height: '5px',
            background: '#00FF00',
            opacity: isDone ? 0 : 1,
          }}
        />
        <div ref={wrapperRef} />
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
