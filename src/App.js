
import './App.css';
import IncreaseAge from './components/IncreaseAge';
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
    

    </div>
  );
}

export default App;
