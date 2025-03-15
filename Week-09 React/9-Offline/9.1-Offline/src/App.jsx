import "./App.css";
import { useEffect, useState } from "react";
export default function App() {
  const [count, setCount] = useState(1);
  useEffect(function () {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("first Effect");
  }, []);
  useEffect(
    function () {
      console.log("Above useEffect");
    },
    [count],
  );
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "red",
            borderRadius: 20,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
      </div>
      <img
        style={{ cursor: "pointer", width: 20, height: 40 }}
        src={
          "https://cdn-icons-png.freepik.com/256/6255/6255592.png?semt=ais_hybrid"
        }
      />
    </div>
  );
}
