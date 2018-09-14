import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scroll(el) {
    el.scrollIntoView();
  }

  data = 
  [
    {
      image:  "assets/images/bags/product1_1.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      price: '8900 руб'
    },
    {
      image: "assets/images/bags/product2_1.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      price: '6700 руб'
    },
    {
      image: "assets/images/bags/product3_1.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      price: '8900 руб'
    },
    {
      image: "assets/images/bags/product4_1.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      price: '6500 руб'
    },
    {
      image: "assets/images/bags/product5_1.jpg",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      price: '15000 руб'
    }
  ];

  deliveries = 
  [
    {
      place: 'Москва', 
      where1: 'Самовывоз',
      price1: 'Бесплатно',
      comment1: 'Уточните у мастера, где и когда Вы сможете самостоятельно забрать покупку',
      where2: 'Курьер внутри МКАД',
      price2: '500 руб',
      comment2: '500 рублей',
      where3: 'Почтовая служба',
      price3: '600 руб',
      comment3: 'Доставка Почтой РФ. Доставка первым классом (авиа). Возможна оплата наложенным платежом. Примерная стоимость - 600р. (зависит от Вашего адреса и веса самой посылки)'
    },
    {
      place: 'Россия', 
      where1: '',
      price1: '',
      comment1: '',
      where2: '',
      price2: '',
      comment2: '',
      where3: 'Почтовая служба',
      price3: '650 руб',
      comment3: 'Возможна доставка Почтой России. Стоимость зависит от веса посылки и Вашего адреса. Возможна отправка наложенным платежом'
    },
    {
      place: 'Другие страны', 
      where1: '',
      price1: '',
      comment1: '',
      where2: '',
      price2: '',
      comment2: '',
      where3: 'Почтовая служба',
      price3: '1800 руб',
      comment3: 'Возможна доставка Почтой России. Стоимость зависит от веса посылки и Вашего адреса. Отправка за границу по 100% предоплате'
    }
  ];

  payment = 
  [
    {
      how: 'Наличные', 
      comment: 'Принимаю, рубли, долары, евро'
    },
    {
      how: 'Банковский перевод на счёт', 
      comment: 'на карту Сбербанка 4276 3800 9364 7019'
    },
    {
      how: 'Перевод на банковскую карту', 
      comment: 'на карту Сбербанка 4276 3800 9364 7019'
    },
    {
      how: 'Электронные платёжные системы', 
      comment: 'PayPal(Наложенный платёж)'
    }
  ];
}
