import './App.css';
import ArrayUseState from './components/ImmutableState.js/ArrayUseState';
import ObjectUseState from './components/ImmutableState.js/ObjectUseState';
import UseReducer from './components/Usereducer/UseReducer';
import UseState from './components/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState />
      <UseReducer /> */}
      {/* <ObjectUseState /> */}
      <ArrayUseState />
    </div>
  );
}

export default App;
