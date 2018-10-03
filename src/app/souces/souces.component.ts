import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-souces',
  templateUrl: './souces.component.html',
  styleUrls: ['./souces.component.css']
})
export class SoucesComponent {

  	products_souces = 
  	[
  	  	{
		  	image: "assets/images/souces/souce_asian.jpg",
		  	image_zoom: "assets/images/souces/souce_asian_zoom.jpg",
  	  	  	description: 'Азиатский соус 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_balsamic.jpg",
			image_zoom: "assets/images/souces/souce_balsamic_zoom.jpg",
  	  	  	description: 'Бальзамик 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_barbecue.jpg",
			image_zoom: "assets/images/souces/souce_barbecue_zoom.jpg",
  	  	  	description: 'Кетчуп BBQ 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_blueberry-syrup.jpg",
			image_zoom: "assets/images/souces/souce_blueberry-syrup_zoom.jpg",
  	  	  	description: 'Черничный сироп 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_caesar.jpg",
			image_zoom: "assets/images/souces/souce_caesar_zoom.jpg",
  	  	  	description: 'Соус "Цезарь" 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_italian.jpg",
			image_zoom: "assets/images/souces/souce_italian_zoom.jpg",
  	  	  	description: 'Итальянский сливочный соус 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_seafood.jpg",
			image_zoom: "assets/images/souces/souce_seafood_zoom.jpg",
  	  	  	description: 'Диетический соус "Морепродукты"', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_pasta-garlic-herb.jpg",
			image_zoom: "assets/images/souces/souce_pasta-garlic-herb_zoom.jpg",
  	  	  	description: 'Соус для пасты "Травы и чеснок" 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_pasta-tomato-basil.jpg",
			image_zoom: "assets/images/souces/souce_pasta-tomato-basil_zoom.jpg",
  	  	  	description: 'Соус для пасты "Томат и базилик" 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_ranch-mayo.jpg",
			image_zoom: "assets/images/souces/souce_ranch-mayo_zoom.jpg",
  	  	  	description: 'Майонез "Ранч" 340 гр', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image:  "assets/images/souces/souce_cranberry-spread.jpg",
			image_zoom: "assets/images/souces/souce_cranberry-spread_zoom.jpg",
  	  	  	description: 'Клюквенный джем 340 гр', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_grape-spread.jpg",
			image_zoom: "assets/images/souces/souce_grape-spread_zoom.jpg",
  	  	  	description: 'Виноградный спред 340 г', 
  	  	  	price: '500 ₽'
  	  	}
  	];

	visibility: boolean = true;
	invisibility: boolean = false;

  	transfer(){
		this.visibility=!this.visibility;
		this.invisibility=!this.invisibility;
	}


}
