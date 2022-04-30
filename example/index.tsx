import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as sketchMap from './src/graphics'
import * as animationsMap from './src/animations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRenderer, Renderer } from './src/components/Renderer'
import { useNavigation } from './src/components/useNavigation'
import regl from 'regl'
import { loop } from './src/utils/loop'


// export const sketch3 = (x: number, y: number) => {
//   return repeat(0.5, angle(center(x), center(y)))
// }




const sketches = Object.values(sketchMap)
const animations = Object.values(animationsMap)

const sizeFromRatio = (width: number, ratio: number) => {
  return {
    width,
    height: Math.floor(width * ratio),
  }
}

const sizeProps = {
  // ...sizeFromRatio(500, 500),
  width: 500,
  height: 500,
  tileX: 1,
  tileY: 1,
}

const App = () => {
  const { previous, next, currentId } = useNavigation(sketches.length)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [progress, setProgress] = React.useState(0)
  const [isDone, setIsDone] = React.useState(false)
  const [renderer, setRenderer] = React.useState<Renderer | null>(null)

  console.log('here')
  // React.useEffect(() => {
  //   const renderer = createRenderer({
  //     ...sizeProps,
  //     onSample: animations[currentId],
  //     wrapper: canvasRef.current!,
  //     onProgress: setProgress,
  //     onDone: () => setIsDone(true),
  //   })

  //   setRenderer(renderer)

  //   renderer.player.start()
  // }, [])

  React.useEffect(() => {
    console.log('here')
    const gl = regl({
      canvas: canvasRef.current!,
      attributes: {depth: false}
    })

   const draw =  gl({
      frag: `

      #ifdef GL_ES
      precision mediump float;
      #endif
      
      uniform vec2 resolution;
      uniform float time;

      float PI = 3.1415926538;
      float HALF_PI = PI / 2.0;

      float center (float x) {
        return abs(x * 2.0 - 1.0);
      }

      float wrap (float value) {
        return value < 0.0 ? 1.0 - mod(-value, 1.0) : mod(value, 1.0);
      }

      float radiansToUnit (float radians) {
        return wrap(radians / HALF_PI);
      }

      float angle (float x, float y) {
        return radiansToUnit(atan(y / x));
      }
      
      float repeat (float scale, float t) {
        float times = 1.0 / scale;
        return mod(t * times, 1.0);
      }
      
      float sketch3 (float x, float y) {
        return repeat(time, angle(center(x), center(y)));
      }
      
      void main() {
        vec2 st = gl_FragCoord.xy / resolution;
        
        float x = st.x;
        float y = st.y;

        // vec3 color = vec3(sketch3(x, y));
        vec3 color = vec3(time);
        gl_FragColor = vec4(color,1.0);
      }
      `,
      vert: `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0, 1);
      }`,
      attributes: {
        position: [[
          // First triangle:
           1.0,  1.0,
          -1.0,  1.0,
          -1.0, -1.0,
          // Second triangle:
          -1.0, -1.0,
           1.0, -1.0,
           1.0,  1.0
      ]]
      },
      count: 6,
      uniforms: {
        resolution: [canvasRef.current?.clientWidth, canvasRef.current?.clientHeight],
        time: 1
      }
    })
    
    let currentFrame = 0;
    const totalFrames = 10;

    gl.frame(() => {
      
      // Update the frames of the video
      draw({
      
        uniforms: {
          time: (currentFrame % totalFrames) / totalFrames
        }
      })
      currentFrame++
    })

    // const stop = loop(() => {
      

    // })

    // return () => {
    //   stop()
    // }
    
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
        <div  >
          <canvas ref={canvasRef} width={500} height={500}></canvas>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<App />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
