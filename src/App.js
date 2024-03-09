import './App.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';

const { getData } = require("./db/db");
const foods = getData();

function App() {

  const [cartItems, setCartItems] = useState([]);

  // функция добавления товара в корзину
  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
        //если добавляемый товар уже есть в корзине, добавляем в копию cartItems свойство quantity со значением "предыдущее значение + 1"
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      //если добавляемого товара нет в корзине, добавляем в копию cartItems этот товар и свойство quantity со значением 1
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  //функция убрать товар из корзины
  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      //если количество товара = 1 до нажатия конопки -, то полностью удаляем его из корзины (из массива cartItem)
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        //если количество товара > 1, увеличиваем кол-во на 1
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <>
        <h1 className="heading">Сделать заказ</h1>

        <Cart cartItems={cartItems}/>

        <div className="cards__container"> 
            {foods.map (food => { 
              return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
            })}
        </div>
    </>
  );
}

export default App;
