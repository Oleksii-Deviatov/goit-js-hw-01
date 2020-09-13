let deliveryPrice;

let country = prompt('Укажите страну для доставки');
let message;

if (country === '') {
  message = 'Страна доставки не указана';
} else if (!country) {
  message = 'Отменено пользователем';
} else {
  country = country.toLowerCase();

  switch (country) {
    case 'китай':
      country = 'Китай';
      deliveryPrice = 100;
      break;

    case 'чили':
      country = 'Чили';
      deliveryPrice = 250;
      break;

    case 'австралия':
      country = 'Австралия';
      deliveryPrice = 170;
      break;

    case 'индия':
      country = 'Индия';
      deliveryPrice = 80;
      break;

    case 'ямайка':
      country = 'Ямайка';
      deliveryPrice = 120;
      break;

    default:
      country = null;
      console;
      break;
  }

  if (!country) {
    message = 'В вашей стране доставка не доступна';
  } else {
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
  }
}
alert(message);
