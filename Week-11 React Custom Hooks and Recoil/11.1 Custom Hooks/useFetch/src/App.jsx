import { useState } from "react";
import "./App.css";
// custom hook
function useCounter() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount((c) => c + 1);
  }

  return {
    count: count,
    increment: increment,
  };
}

function Counter() {
  const { count, increment } = useCounter();
  return (
    <main>
      <button onClick={increment}>Increase {count}</button>
    </main>
  );
}
export default function App() {
  return (
    <main>
      <Counter />
      <Counter />
      <Counter />
    </main>
  );
}
