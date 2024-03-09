import React from 'react';
import './Cart.css';
import Button from './../Button/Button';

function Cart({cartItems, onCheckout}) {
	//функция подсчета общей стоимости
	const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

	return (
		<div className="cart__container">
		  {/* {cartItems.length === 0 ? "В корзине пусто " : ""} */}
		  <br /> <span className="">Общая стоимость: {totalPrice.toFixed(0)} руб.</span>
		  <Button
			title={`${cartItems.length === 0 ? "Заказ" : "Оформить"} `}
			type={"checkout"}
			disable={cartItems.length === 0 ? true : false}
			onClick={onCheckout}
		  />
		</div>
	  );
	}
	

export default Cart
