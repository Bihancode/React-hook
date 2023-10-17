
import './App.css';
import IncreaseAge from './components/IncreaseAge';
import Setdate from './components/Setdate';
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


      <hr/>


      <div>
        <Setdate/>
      </div>

    

    </div>
  );
}

export default App;
