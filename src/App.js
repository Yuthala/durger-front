import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';

const { getData } = require("./db/db");
const foods = getData();
//const {tg, queryId} = window.Telegram.WebApp;


function App() {

  const [cartItems, setCartItems] = useState([]);

  // useEffect (() => {
  //   tg.ready();
  // }, []);

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

  // const onCheckout = () => {
  //   tg.MainButton.text = "Оплатить";
  //   tg.MainButton.show();

//     const data = {
//       products: cartItems,
//       queryId
//     }
//     fetch('http://localhost:8000/web-data', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data)
//   })
// }

// useEffect( ()=> {
//   tg.onEvent('mainButtonClicked', onCheckout)
//     return ()=> {
//       tg.offEvent('mainButtonClicked', onCheckout)
//     }
//   }, [onCheckout])

  return (
    <>
        <h1 className="heading">Сделать заказ</h1>

        <Cart cartItems={cartItems}/>

        <div className="cards__container"> 
            {foods.map (food => { 
              return <Card 
              food={food} 
              key={food.id} 
              onAdd={onAdd} 
              onRemove={onRemove} 
              //onCheckout={onCheckout}
              />
            })}
        </div>
    </>
  );
}

export default App;
