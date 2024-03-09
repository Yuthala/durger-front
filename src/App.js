import './App.css';
import Button from './components/Button/Button';


function App() {
  return (
    <div className="App">
      <h5>Hello world
        <Button title={'ADD'} disable="false" type={'add'}/>
        <Button title={'REMOVE'} disable="false" type={'remove'}/>
        <Button title={'CHECKOUT'} disable="false" type={'checkout'}/>
      </h5>

    </div>
  );
}

export default App;
