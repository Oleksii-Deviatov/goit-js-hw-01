let input;
let total = 0;

while (true) {
  input = prompt('Введите число:');
  if (input === null && total === 0) {
    alert('Отменено пользователем');
    break;
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) === false) {
    total += input;
    console.log(input);
  } else {
    alert('Введено не число');
  }
}
