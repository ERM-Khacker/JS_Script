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

const res = exponention(3, 3);
console.log(res);