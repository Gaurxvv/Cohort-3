import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router";
import ReactDOM from "react-dom/client";
import { useRef, useState } from "react";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/neet" element={<Layout />}>
            <Route path="/neet/class-11" element={<Class11 />} />
            <Route path="/neet/class-12" element={<Class12 />} />
            <Route path="/neet/home" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Layout() {
  return (
    <div style={{ height: "100vh", background: "#2c3e5" }}>
      <Link to="/neet/home">HOME</Link> |
      <Link to="/neet/class-11">CLASS 11</Link>|
      <Link to="/neet/class-12">CLASS 12</Link>
      <Outlet />
      <br></br>
      Footer
    </div>
  );
}
function ErrorPage() {
  return <h1>404 Not Found</h1>;
}
//useREF (1)
function Class11() {
  const inputRef = useRef();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      Neet Program for Class 11
      <input ref={inputRef} type={"text"}></input>
      <input type={"text"}></input>
      <button onClick={() => inputRef.current.focus()}> submit</button>
      <br />
      <button
        style={{ width: 90, height: 80 }}
        onClick={() => navigate("/neet/class-12")}
      >
        NAvigate
      </button>
    </div>
  );
}
function Class12() {
  return <div>Neet Program for Class 12</div>;
}
//useREF(2)
function Home() {
  const [count, setCount] = useState(1);
  const timer = useRef();

  function startClock() {
    let value = setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);
    timer.current = value;
  }
  function stopClock() {
    console.log(timer);
    clearInterval(timer.current);
  }
  return (
    <div>
      {count}
      <br></br>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>stop</button>
      <br></br>
      HOME
    </div>
  );
}
