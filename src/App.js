import './App.css';
import ArrayUseState from './components/ImmutableState.js/ArrayUseState';
import ObjectUseState from './components/ImmutableState.js/ObjectUseState';
import Parent from './components/Parent Child/Parent';
import UseReducer from './components/Usereducer/UseReducer';
import UseState from './components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState />
      <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      <Parent />
    </div>
  );
}

export default App;
