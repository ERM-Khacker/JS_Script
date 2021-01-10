//1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
function isAdult1(age) {
  if (isNaN(age)) {
    return null;
  }
  if (age >= 18) {
    return true;
  }
  return false;
}

function isAdult2(age) {
  return !isNaN(age) & age >= 18 ? true : false;
}
isAdult2(20);
isAdult2(4);

// 2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
function checkMultiplicity(num1, num2) {
  const checkIsNumber = num1 - num2;
  if (isNaN(checkIsNumber)) {
    return null;
  }
  if (num1 % num2 === 0) {
    return true;
  }
  return false
}

console.log(checkMultiplicity(25, 5));// true 
console.log(checkMultiplicity(15, 3));// true
console.log(checkMultiplicity(15, 5));// true
console.log(checkMultiplicity(15, 4));// false

// 3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника;
//  функция возвращает true если треугольник возможен и false если нет.
function checkBuildTriangle(length1, length2, length3) {
  const result = length3 + length2 + length1;
  if (isNaN(result)) {
    return null;
  }
  if (length1 < length2 + length3 & length1 > length2 - length3
    & length2 < length1 + length3 & length2 > length1 - length3
    & length3 < length1 + length2 & length3 > length1 - length2) {
    return true;
  }
  return false;
}
console.log(checkBuildTriangle(2, 4, 4));

//4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника.
function getAreaOfRhombus(diagonLength1, diagonalLength2) {
  const res = diagonalLength1 - diagonalLength2;
  if (isNaN(res)) {
    return null;
  }
  if (diagonLength1 > 0 & diagonalLength2 > 0) {
    return diagonLength1 * diagonalLength2 / 2;
  }

}

function getAreaOfCylinder(R, h) {
  const isNum = R - h;
  if (isNaN(isNum)) {
    return null;
  }
  if (R > 0 & h > 0) {
    return (2 * 3, 14 * R * h) + (2 * 3, 14 * (R * R));
  }

}

function getAreaOfRightTriangle(a, b) {
  const isNum2 = a - b;
  if (isNaN(isNum2)) {
    return null;
  }
  if (a > 0 & b > 0) {
    return a * b / 2;
  }

}

function getAreaOfRectangle(a, b) {
  const isNum3 = a - b;
  if (isNaN(isNum3)) {
    return null;
  }
  if (a > 0 & b > 0) {
    return a * b;
  }
}