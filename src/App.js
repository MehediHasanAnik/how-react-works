import "./App.css";
import Device from "./components/Device/Device";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div style={{ border: "5px solid blue", padding: "20px" }} className="App">
      <Device name="anik" price="5000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
