import { useState } from 'react'
import './App.css'
import { useEffect, memo } from 'react'


function App() {
  return (
    <Counter />
  )
}

function Counter() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setcount(c => c + 1)
    }, 3000);
  }, [])
  return (
    <div>
      <CurrentCount count={count} />
      <Increase />
      <Decrease />
    </div>
  )
}

const CurrentCount = memo(function ({ count }) {
  return (
    <div>
      {count}
    </div>
  )
})
const Increase = memo(function () {


  function increase() {
    // setcount(c => c + 1);
  }
  return (
    <button onClick={increase}>
      Increase
    </button>
  )
})
const Decrease = memo(function () {

  function decrease() {
    // setcount(c => c - 1);
  }
  return (
    <button onClick={decrease}>Decrease</button>
  )
})

export default App
