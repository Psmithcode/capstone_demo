import "./App.css";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import Router from "./Router";

function App() {
  return (
    <div className="App" style={divStyles}>
      <Router />
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
  backgroundColor: "#545452",
};
