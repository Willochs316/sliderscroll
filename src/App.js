import "./styles.css";
import StatusImageData from "./Components/StatusImageData";
import StatusItems from "./Components/StatusItems";

export default function App() {
  return (
    <div className="App">
      <StatusItems reputes={StatusImageData} />
    </div>
  );
}
