import { useState } from "react";
import "./App.css";
import { usePrev } from "/hooks/usePrev";
// custom hook

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increament</button>
      <p>Previous value is {prevCount}</p>
    </>
  );
}
