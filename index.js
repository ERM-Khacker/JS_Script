//1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
//isAdult(20); // true
//isAdult(4); // false
function isAdult1(age) {
  if (!isNaN(age)) {
    if (age >= 18) {
      return true;
    }
    return false;
  }
}

function isAdult2(age) {
  !isNaN(age) & age >= 18 ? console.log(true) : console.log(false);
}
isAdult2(20);
isAdult2(4);

// 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
function checkMultiplicity(num1, num2) {
  const checkIsNumber = num1 - num2;
  if (!isNaN(checkIsNumber)) {
    if (num1 % num2 === 0) {
      return true;
    }
    return false
  }
}
console.log(checkMultiplicity(25, 5));// true 
console.log(checkMultiplicity(15, 3));// true
console.log(checkMultiplicity(15, 5));// true
console.log(checkMultiplicity(15, 4));// false

// 3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника;
//  функция возвращает true если треугольник возможен и false если нет.
function checkBuildTriangle(length1, length2, length3) {
  const result = length3 + length2 + length1;
  if (!isNaN(result)) {
    if (length1 < length2 + length3 & length1 > length2 - length3
      & length2 < length1 + length3 & length2 > length1 - length3
      & length3 < length1 + length2 & length3 > length1 - length2) {
      return true;
    }
    return false;
  }
}
console.log(checkBuildTriangle(2, 4, 4));

