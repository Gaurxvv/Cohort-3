import { useState, useEffect } from 'react'

import './App.css'
//mounting ,re rendering , unmounting

// Conditional rendering
function App() {
  let [countvisible, setcountvisible] = useState(true)

  useEffect(function () {
    setInterval(() => {
      setcountvisible(countvisible => !countvisible)
    }, 5000)
  }, [])
  return (
    <div>
      {countvisible ? <Counter></Counter> : null}
    </div>
  )

}

function Counter() {
  const [count, setCount] = useState(0)
  //hooking into the lifecylce events of react
  console.log("render")
  //run once during mounting only 
  useEffect(function () {
    let clock = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    // clearInterval function  during unmounting .
    return function () {
      clearInterval(clock)
    }
  }, [] // dependency arr, cleanup, fetch inside useEffect 
  )
  return (
    <div>
      <b>
        Count: {count}
      </b>
      <br />

      <button onClick={() => setCount(count + 1)}>Increament</button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
