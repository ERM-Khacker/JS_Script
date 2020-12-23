const getSomeSquareRoot = function (a, b, c) {
  const D = b * b - 4 * a * c;
  if (D > 0) {
    let x1, x2;
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return "Уравнение имеет 2 корни: х1 = " + x1 + ", х2 = " + x2;
  } else if (D === 0) {
    let x;
    x = (-b + D) / (2 * a);
    return "Уравнение имеет 1 корень: х = " + x;
  }
  return "Дискриминант меньше нуля, а значит уравнение не имеет действительных корней!!!";
};
console.log(getSomeSquareRoot());