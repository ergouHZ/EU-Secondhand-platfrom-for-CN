import './App.css';
import Counter from './Component/Counter';
import { Greet } from './Component/Greet';
import HelloClass from './Component/Hello';
import Message from './Component/Message';
import ZHhello from './Component/ZHhello';


function App() {
  return (
    <div className="App">

      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Greet name="xiaoyu">
        <p>this is children props</p></Greet>
      <HelloClass name="class1" />
      <br />
      <p><b>State test</b></p>
      <Message />
      <Counter />
      <ZHhello />


    </div>
  );
}

export default App;
