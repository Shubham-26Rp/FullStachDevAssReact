//import logo from './logo.svg';
import './App.css';
import DisplayEmp from './Components/DisplayEmp';
import DisplayEmployee from './Components/DisplayEmployee';
import IncreaseQty from './Components/IncreaseQty';
import UpdateState from './Components/UpdateState';
import UpdateUseEfeect from './Components/UpdateUseEfeect';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>hello React</h1>
      <DisplayEmp/>
      <DisplayEmployee/>
      <IncreaseQty/>
      <UpdateState/>
      <UpdateUseEfeect/>
    </div>
  );
}

export default App;
