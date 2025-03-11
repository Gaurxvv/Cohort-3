import { useState, useEffect, use } from 'react'

import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    return <div>
        <Counter count={count} count1={count1} />

        After Count
        <br />
        <button onClick={() => setCount(count => count + 1)}>Increament</button>
        <br />
        <button onClick={() => setCount1(count1 => count1 - 1)}>Decrement</button>
    </div>
}

function Counter(props) {
    //without using dependency array

    useEffect(function () {
        console.log("mount")
        return function () {
            console.log("umount")
        }
    }, [])
    // dependency array
    useEffect(function () {
        console.log("count has Changed")
        return function () {
            console.log("Umounting")
        }
    }, [props.count])
    return <div>
        Counter {props.count}
        <br />
        Counter{props.count1}

    </div>



}
export default App