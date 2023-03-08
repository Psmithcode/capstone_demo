import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App" style={divStyles}>
      <Counter />
    </div>
  );
}

export default App;

const divStyles = {
  height: "900px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
};
