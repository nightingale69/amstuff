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
		  	image: "assets/images/souces/souce_asian.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, яблочный уксус, соевый соус (без клейковины), имбирь, соль, чеснок, луковый порошок, натуральные ароматизаторы, соус-волонтершир, лимонный сок, сукралоза, ксантановая камедь, бензоат натрия (для сохранения свежести)",
			name: 'Азиатский соус 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_balsamic.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, бальзамический уксус, белый уксус, растительное волокно, соль, дижонская горчица, лимонный сок, луковый порошок, чеснок, белый перец, натуральные ароматизаторы, натуральные специи, карамель (цвет, ксантановая камедь, сукралоза, пищевой краситель , бензоат натрия (для сохранения свежести)",
			name: 'Бальзамик 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_barbecue.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, помидоры, яблочный сидр, уксус, дижонская горчица, белый дистиллированный уксус, растительное волокно, соль, нарезанный лук, фарш из чеснока, соус-волонтершир, ксантановая смола, натуральный ароматизатор, перец кайенны, красная капуста, сукралоза, натрий бензоат (для сохранения свежести)",
			name: 'Кетчуп BBQ 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_blueberry-syrup.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, ароматизатор черники, натуральные ароматизаторы, морская соль, целлюлозная камедь, сукралоза, лимонная кислота, бензоат натрия (для сохранения свежести)",
  	  	  	name: 'Черничный сироп 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_caesar.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, белый дистиллированный уксус, растительное волокно, соль, анчоусы, аромат сыра пармезан (не молочный), аромат сыра романо (не молочный), чеснок, луковый порошок, черный перец, натуральные пряности, натуральные ароматизаторы, молочная кислота, ксантановая камедь, пищевой краситель, сукралоза, бензоат натрия (для сохранения свежести)",
			name: 'Соус "Цезарь" 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_italian.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, бальзамический уксус, белый уксус, дижонская горчица, растительные волокна (клетчатка), соль, лимонный сок, чесночный порошок, луковый порошок, белый перец, натуральные ароматизаторы, натуральные специи, карамельный краситель, ксантановая камедь (природный полисахарид, используется в качестве загустителя), сукралоза (сахарозаменитель), натрия бензоат",
			name: 'Итальянский сливочный соус 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_seafood.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, томатная паста, яблочный уксус, безалкогольный дистиллированный уксус, растительное волокно, морская соль, ксантановая камедь, натуральные ароматизаторы, хрен, лук, чеснок, красная капустная расцветка, соус-волонтершир, бензоат натрия (для сохранения свежести), fd & c red # 40, сукралоза",
			name: 'Диетический соус "Морепродукты"', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_pasta-garlic-herb.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, натуральные травы и специи, растительное волокно, морская соль, петрушка, черный перец чеснока, кайенский перец, орегано, базилик, лук, ароматизатор масла (не молочный), розмарин, бета-каротин, ксантановая смола, сукралоза, бензоат натрия (для сохранения свежести)",
			name: 'Соус для пасты "Травы и чеснок" 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_pasta-tomato-basil.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, томаты, натуральные ароматизаторы, натуральные травы и специи, растительное волокно, базилик, чеснок, лук, морковь, черный перец, кайенский перец, фенхель, морская соль, паприка, розмарин, петрушка, ксантановая камедь, лимонная кислота, фиолетовый сладкий картофель (все натуральные цвета), бензоат натрия (до сохраненной свежести), сукралоза, лецитин подсолнечника",
			name: 'Соус для пасты "Томат и базилик" 355 мл', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_ranch-mayo.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, растительное волокно, морская соль, яблочный уксус, белый уксус, кукурузный крахмал, ксантановая смола, молочная кислота, ароматизатор сметаны (немолочный), бета-каротин, яичный ароматизатор, дижонская горчица, лимонный сок, пищевой краситель, сукралоза, чесночный порошок, белый перец, сушеная петрушка, кайенский перец, паприка, бензоат натрия (чтобы сохранить свежесть)",
			name: 'Майонез "Ранч" 340 гр', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image:  "assets/images/souces/souce_cranberry-spread.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, клюквенный аромат, натуральные ароматизаторы, сукралоза, лимонная кислота, целлюлозный гель, фиолетовый сладкий картофель, ксантановая камедь, бензоат натрия (для сохранения свежести)",
			name: 'Клюквенный джем 340 гр', 
  	  	  	price: '500 ₽'
  	  	},
  	  	{
			image: "assets/images/souces/souce_grape-spread.png",
			ingredients: "Ингредиенты: питьевая вода тройной очистки, виноградный аромат, натуральные ароматизаторы, сукралоза, лимонная кислота, гель целлюлозы, цвет красной капусты, ксантановая камедь, бензоат натрия (для сохранения свежести)",
			name: 'Виноградный спред 340 г', 
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
