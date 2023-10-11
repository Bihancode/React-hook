
import './App.css';
import IncreaseAge from './components/IncreaseAge';
import Showtext from './components/Showtext';
import TypeText from './components/TypeText';


const App = () => {
  return (
    <div className="App">
      
      <div>
        <IncreaseAge/>
      </div>

      <hr/>

      <div>
        <TypeText/>
      </div>

      <hr/>

      <div>
        <Showtext/>
      </div>
    

    </div>
  );
}

export default App;
