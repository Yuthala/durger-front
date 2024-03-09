import React, {useState} from 'react';
import './Card.css';
import Button from './../Button/Button';

function Card({food, onAdd, onRemove}) {

	const [count, setCount] = useState(0);

	const { title, Image, price, id } = food;

	const handleIncrement = () => {
		setCount(count+1);
		onAdd(food);
	}

	const handleDecrement = () => {
		setCount(count-1);
		onRemove(food);
	}

  return (
	<div className="card">
		{/* поле с количеством */}
	  	<span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
	  	>{count}</span>

		{/* изображение */}
		<div className="image__container">
			<img src={Image} alt={title} />
		</div>

		{/* наименование + цена */}
		<h4 className="card__title">
			{title}  <span className="card__price">{price} руб. </span>
		</h4>

		{/* контейнер с кнопками + - */}
		<div className="btn-container">
			<Button title={'+'} type={'add'} onClick={handleIncrement} />

			{count !== 0 ? (
				<Button title={'-'} type={'remove'} onClick={handleDecrement}/>
			) : ""}
		</div>
	</div>
  )
}

export default Card;
