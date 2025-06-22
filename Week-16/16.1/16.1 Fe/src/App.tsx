import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  function sendMessage() {
    if (!socket) {
      return;
    }
    const messsage = inputRef.current.value;
    //@ts-ignore
    socket.send(messsage);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);
  return (
    <>
      <div className="justify-center items-center flex flex-col h-screen">
        <input ref={inputRef} placeholder="message"></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

export default App;
