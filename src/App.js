import './App.css';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';

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
      <div className="component">
        <h1>3. Slider.js</h1>
        <Slider/>
      </div>
      <div className="component">
        <h1>4. Input.js</h1>
        <Input/>
      </div>
    </div>
  );
}

export default App;