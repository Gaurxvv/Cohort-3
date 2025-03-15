import "./App.css";

export default function App() {
  return (
    <div style={{ display: "flex", background: "grey", borderRadius: 4 }}>
      <Card>
        <div style={{ color: "red" }}>
          "hi there" <br />
          <br />
          <input type={"text"} />
        </div>
      </Card>
      <Card>
        <div style={{ color: "red" }}>"hi there"</div>
      </Card>
    </div>
  );
}
function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        borderRadius: 10,
        marginRight: 10,
        padding: 10,
        color: "white",
      }}
    >
      {children}
    </div>
  );
}
