let input;
let total = 0;
let count = 1;

while (true) {
  input = prompt(`Введите число ${count} :`);
  if (input === null && total === 0) {
    alert('Отменено пользователем');
    break;
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }

  input = Number(input);

  if (!Number.isNaN(input)) {
    total += input;
    count += 1;
  } else {
    alert('Введено не число');
  }
}
