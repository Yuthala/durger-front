import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
const { getData } = require("./db/db");
const foods = getData();

function App() {
  return (
    <>
        <h1 className="heading">Сделать заказ</h1>
        <div className="cards__container"> 
            {foods.map (food => { 
              return <Card food={food} key={food.id}/>
            })}
        </div>
    </>
  );
}

export default App;
