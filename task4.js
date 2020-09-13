const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;
let input = prompt('Сколько дроидов нннада?');

if (input === null) {
  message = 'Отменено пользователем!';
} else if (input == NaN) {
  message = 'Введено не число';
} else if (input * pricePerDroid > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `'Вы купили ${input} дроидов, на счету осталось ${
    credits - input * pricePerDroid
  } кредитов.'`;
}

console.log(message);
