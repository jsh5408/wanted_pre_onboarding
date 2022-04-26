import Toggle from "./components/Toggle";
import styled from "styled-components";
import './App.css';

const Component = styled.div`

`;

function App() {
  return (
    <div className="App">
      <div className="component">
        <h1>1. Toggle.js</h1>
        <Toggle/>
      </div>
    </div>
  );
}

export default App;