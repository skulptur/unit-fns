import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { isUnit } from '../src'

console.log(isUnit(10))

const App = () => {
  return <div></div>
}

ReactDOM.render(<App />, document.getElementById('root'))
