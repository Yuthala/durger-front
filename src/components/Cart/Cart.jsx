import React from 'react';
import './Cart.css';
import Button from './../Button/Button';

function Cart({cartItems, onAdd, onRemove}) {
	//функция подсчета общей стоимости
	const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
	<div className="cart__container">

	  {cartItems.length === 0 ? "В корзине ничего нет " : ""}
	  <br/><span className="">Сумма заказа: {totalPrice.toFixed(0)} руб. </span>
	  	<Button title={`${cartItems.length === 0 ? 'Закажи!' : 'Оформить заказ'}`} 
		type={"checkout"}
		disable={cartItems.length === 0 ? true : false}
		/>
	</div>
  )
}

export default Cart
