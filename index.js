//1. Создать функцию которая возводит заданное число в любую указанную степень
function exponention(num, x) {
  const result = num - x;
  if (!isNaN(result)) {
    let definedResult = 1;
    for (let i = 1; i <= x; i++) {
      definedResult *= num;
    }
    return definedResult;
  }
}

//2. Создать функцию, которая вычисляет факторил числа
function factorialOfNumber(number) {
  if (!isNaN(number)) {
    if (number > -1) {
      let sum = 1;
      for (let i = 1; i <= number; i++) {
        sum *= i;
      }
      return sum;
    }
  }
}