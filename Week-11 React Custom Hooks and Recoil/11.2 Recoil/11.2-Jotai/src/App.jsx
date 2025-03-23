import { atom, useAtom } from "jotai";
import "./App.css";

const counterAtom = atom(0);
const evenSelector = atom((get) => get(counterAtom) % 2 === 0);

function App() {
  return (
    <>
      <Buttons />
      <Counter />
      <IsEven />
    </>
  );
}

function Buttons() {
  const [count, setCount] = useAtom(counterAtom);

  function increase() {
    setCount(count + 3);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

function Counter() {
  const [count] = useAtom(counterAtom);
  return <h1>{count}</h1>;
}

function IsEven() {
  const [even] = useAtom(evenSelector);
  return <>{even ? "Counter is now EVEN number" : "Counter is now ODD number"}</>;
}

export default App;
