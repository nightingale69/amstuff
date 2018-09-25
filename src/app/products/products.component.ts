import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products_bags = 
  [
    {
      image1: "assets/images/bags/product12_1.jpg",
      image2: "assets/images/bags/product12_2.jpg",
      image3: "assets/images/bags/product12_3.jpg",
      description: 'Скрутка для 5 поварских инструментов скрутка для нож(сумка для ножей)', 
      price: '6000 руб.'
    },
    {
      image1: "assets/images/bags/product4_1.jpg",
      image2: "assets/images/bags/product4_2.jpg",
      image3: "assets/images/bags/product4_3.jpg",
      description: 'Скрутка для 6 поварских инструментов, скрутка для ножей', 
      price: '6500 руб.'
    },
    {
      image1: "assets/images/bags/product11_1.jpg",
      image2: "assets/images/bags/product11_2.jpg",
      image3: "assets/images/bags/product11_3.jpg",
      description: 'Скрутка для 7 поварских ножей (сумка для ножей)', 
      price: '5000 руб.'
    },
    {
      image1: "assets/images/bags/product9_1.jpg",
      image2: "assets/images/bags/product9_2.jpg",
      image3: "assets/images/bags/product9_3.jpg",
      description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
      price: '6900 руб.'
    },
    {
      image1:  "assets/images/bags/product1_1.jpg",
      image2:  "assets/images/bags/product1_2.jpg",
      image3:  "assets/images/bags/product1_3.jpg",
      description: 'Скрутка для 13 поварских инструментов, скрутка для ножей', 
      price: '8900 руб.'
    },
    {
      image1: "assets/images/bags/product10_1.jpg",
      image2: "assets/images/bags/product10_2.jpg",
      image3: "assets/images/bags/product10_3.jpg",
      description: 'Скрутка для 18 поварских инструментов скрутка для ножей', 
      price: '15000 руб.'
    },
    {
      image1: "assets/images/bags/product8_1.jpg",
      image2: "assets/images/bags/product8_2.jpg",
      image3: "assets/images/bags/product8_3.jpg",
      description: 'Ремень для доводки, правки, заточки ножей и бритв', 
      price: '1400 руб.'
    },
    /*{
      image1: "assets/images/bags/product2_1.jpg",
      image2: "assets/images/bags/product2_2.jpg",
      image3: "assets/images/bags/product2_3.jpg",
      description: 'Скрутка для 7 поварских инструментов, скрутка для ножей', 
      price: '6700 руб.'
    },
    {
      image1: "assets/images/bags/product3_1.jpg",
      image2: "assets/images/bags/product3_2.jpg",
      image3: "assets/images/bags/product3_3.jpg",
      description: 'Скрутка для 13 поварских инструментов, скрутка для ножей', 
      price: '8900 руб.'
    },
    {
      image1: "assets/images/bags/product5_1.jpg",
      image2: "assets/images/bags/product5_2.jpg",
      image3: "assets/images/bags/product5_3.jpg",
      description: 'Скрутка для 18 поварских инструментов, скрутка для ножей', 
      price: '15000 руб.'
    },
    {
      image1: "assets/images/bags/product6_1.jpg",
      image2: "assets/images/bags/product6_2.jpg",
      image3: "assets/images/bags/product6_3.jpg",
      description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
      price: '6900 руб.'
    },
    {
      image1: "assets/images/bags/product7_1.jpg",
      image2: "assets/images/bags/product7_2.jpg",
      image3: "assets/images/bags/product7_3.jpg",
      description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
      price: '6900 руб.'
    },*/
  ];

  products_souces = 
  [
    {
      image:  "assets/images/souces/souce_asian.jpg",
      description: 'Азиатский соус 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_balsamic.jpg",
      description: 'Бальзамик 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_barbecue.jpg",
      description: 'Кетчуп BBQ 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_blueberry-syrup.jpg",
      description: 'Черничный сироп 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_caesar.jpg",
      description: 'Соус "Цезарь" 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_italian.jpg",
      description: 'Итальянский сливочный соус 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_seafood.jpg",
      description: 'Диетический соус "Морепродукты"', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_pasta-garlic-herb.jpg",
      description: 'Соус для пасты "Травы и чеснок" 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_pasta-tomato-basil.jpg",
      description: 'Соус для пасты "Томат и базилик" 355 мл', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_ranch-mayo.jpg",
      description: 'Майонез "Ранч" 340 гр', 
      price: '500 руб.'
    },
    {
      image:  "assets/images/souces/souce_cranberry-spread.jpg",
      description: 'Клюквенный джем 340 гр', 
      price: '500 руб.'
    },
    {
      image: "assets/images/souces/souce_grape-spread.jpg",
      description: 'Виноградный спред 340 г', 
      price: '500 руб.'
    }
  ];
}
