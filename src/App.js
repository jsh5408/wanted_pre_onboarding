import './App.css';
import Toggle from "./components/Toggle";
import Tab from './components/Tab';

function App() {
  return (
    <div className="App">
      <div className="component">
        <h1>1. Toggle.js</h1>
        <Toggle/>
      </div>
      <div className="component">
        <h1>2. Tab.js</h1>
        <Tab/>
      </div>
    </div>
  );
}

export default App;