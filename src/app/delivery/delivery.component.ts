import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {

  deliveries = 
  [
    {
      place: 'Москва', 
      where1: 'Самовывоз',
      price1: 'Бесплатно',
      comment1: 'Уточните в письме, где и когда Вы сможете самостоятельно забрать покупку',
      where2: 'Курьер внутри МКАД',
      price2: '500 руб',
      comment2: '',
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
      comment: 'Рубли, долары, евро'
    },
    {
      how: 'Банковский перевод на счёт', 
      comment: 'Карта Сбербанка 4276 3800 9364 7019'
    },
    {
      how: 'Перевод на банковскую карту', 
      comment: 'Карта Сбербанка 4276 3800 9364 7019'
    },
    {
      how: 'Электронные платёжные системы', 
      comment: 'PayPal(Наложенный платёж)'
    }
  ];

}
