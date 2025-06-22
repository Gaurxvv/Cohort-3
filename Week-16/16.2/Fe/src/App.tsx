import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["hi there"]);
  const wsRef = useRef();
  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");

    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
  }, []);
  return (
    <div className="h-screen bg-black flex justify-center items-center ">
      <div className="flex flex-col justify-between w-140 h-140 rounded-xl bg-gray-700">
        <div className="w-96 h-96 flex flex-col">
          {messages.map((message) => (
            <div className=" bg-gray-800 rounded-lg text-white m-2  p-2">
              {message}
            </div>
          ))}
        </div>
        <div className="flex h-10">
          <input
            id="message"
            className="bg-gray-400 rounded-2xl w-120"
            type="text"
          />
          <button
            onClick={() => {
              const message = document.getElementById("message")?.value;
              wsRef.current.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: message,
                  },
                })
              );
            }}
            className="bg-gray-900 w-20 rounded-2xl text-white cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
