export const foo = 'bar'

// // TODO: this is a reference for the implementation of a loop function that will be managing
// // how long it takes to execute a callback. This callback can have a variable number of iterations
// // that is distributed in each frame and balanced in order to keep a high FPS

// import { noop } from '../../../../lib/utils/noop'

// interface TweenProps {
//   from: number
//   to: number
//   duration: number
//   onUpdate: (value: number) => void
//   onComplete?: () => void
//   ease?: (t: number) => number
// }

// export const tween = ({
//   from,
//   to,
//   duration,
//   onUpdate,
//   onComplete = noop,
//   ease = noop,
// }: TweenProps) => {
//   let isActive = true
//   const startTime = performance.now()
//   const durationInMillis = duration * 1000

//   const handleComplete = () => {
//     onUpdate(to)
//     onComplete()
//   }

//   const next = () => {
//     const elapsedTime = performance.now() - startTime

//     onUpdate(ease(elapsedTime / durationInMillis) * (to - from) + from)

//     return isActive
//       ? elapsedTime <= durationInMillis
//         ? requestAnimationFrame(next)
//         : handleComplete()
//       : onComplete()
//   }

//   next()

//   return () => {
//     isActive = false
//   }
// }
