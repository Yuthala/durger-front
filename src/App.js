import './App.css';
import Button from './components/Button/Button';

const { getData } = require("./db/db");

function App() {
  return (
    <>
        Hello world
        <Button title={'ADD'} disable="false" type={'add'}/>
        <Button title={'REMOVE'} disable="false" type={'remove'}/>
        <Button title={'CHECKOUT'} disable="false" type={'checkout'}/>
    </>
  );
}

export default App;
