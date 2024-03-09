import potatoImage from '../images/potatoes.jpg';
import tomatoImage from '../images/tomatoes.jpg';
import eggplantImage from '../images/eggplant.jpg';
import cucumberImage from '../images/cucumber.jpg';

export function getData() {
	return [
		{title: "Картофель, 1 кг", price: 80, Image: potatoImage},
		{title: "Томаты, 1 кг", price: 120, Image: tomatoImage},
		{title: "Баклажаны, 1 кг", price: 90, Image: eggplantImage},
		{title: "Огурцы, 600 г", price: 100, Image: cucumberImage},
	];
}