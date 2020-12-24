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

//4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника.
function areaOfRhombus(diagonLength1, diagonalLength2) {
  const res = diagonalLength1 - diagonalLength2;
  if (!isNaN(res)) {
    if (diagonLength1 > 0 & diagonalLength2 > 0) {
      return diagonLength1 * diagonalLength2 / 2;
    }
  }
}

function areaOfCylinder(R, h) {
  const isNum = R - h;
  if (!isNaN(isNum)) {
    if (R > 0 & h > 0) {
      return (2 * 3, 14 * R * h) + (2 * 3, 14 * (R * R));
    }
  }
}

function areaOfARightTriangle(a, b) {
  const isNum2 = a - b;
  if (!isNaN(isNum2)) {
    if (a > 0 & b > 0) {
      return a * b / 2;
    }
  }
}

function areaOfARectangle(a, b) {
  const isNum3 = a - b;
  if (!isNaN(isNum3)) {
    if (a > 0 & b > 0) {
      return a * b;
    }
  }
}