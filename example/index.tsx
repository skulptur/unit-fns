import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ImageData } from './src/components/ImageData'
import * as sketchMap from './src/graphics'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max)
}

const sketches = Object.values(sketchMap)

const App = () => {
  const params = useParams<{ id: string }>()
  const currentId = parseInt(params.id || '0', 10)

  const goTo = (targetId: number) => {
    const redirectId = clamp(targetId, 0, sketches.length - 1)
    if (redirectId === currentId) return
    location.href = `${location.origin}/${redirectId}`
  }

  const onNavigate = (targetId: number) => () => goTo(targetId)

  React.useEffect(() => {
    if (currentId < 0 || currentId > sketches.length - 1) {
      goTo(0)
    }
  }, [currentId])

  return (
    <div>
      <button onClick={onNavigate(currentId - 1)}>previous</button>
      <button onClick={onNavigate(currentId + 1)}>next</button>
      <div key={currentId}>
        <ImageData width={1000} height={1000} onSample={sketches[currentId]} />
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
