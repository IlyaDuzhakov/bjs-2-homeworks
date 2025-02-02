//  ---------------------------------------------------------------- Задача 1  --------------------------------------------------------


function parseCount(value) {
  const result = Number.parseFloat(value); // функция parseFloat извлекает из строки число, если найдёт какую-то букву, её работа остановится
  // Если буквы были до числа, мы получим NaN, если буквы после числа, мы получим само число
  if (Number.isNaN(result)) {
    // console.log('Невалидное значение.')
    throw new Error("Невалидное значение"); // пробросили ошибку - просто создали какую-то свою ошибку
  } // функция isNaN проверяет, является ли переменная NaN. True or false.
  return result;
}
// console.log (parseCount(' 365.5gfgfghgh65656'))

function validateCount(value) {
  try {
    //
    const number = parseCount(value); // написали код, который возможно может выбросить ошибку.
    return number;
  } catch (err) {
    // поймали ошибку, которая может возникнуть и весь код, который написан дальше, будет выполняться. Мы будем готовы к этой ошибке.
    return err;
  }
}


//------------------------------------------------------- Задание 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    const p = this.perimeter / 2;
    const prResult = p * (p - this.a) * (p - this.b) * (p - this.c);
    return Number(Math.sqrt(prResult).toFixed(3)); // количество знаков после запятой
    //    Метод toFixed возвращает строку. Если в результате нужно чило не забудь использовать Number
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
// const result = getTriangle(1, 3, 100);
// console.log(result.area);
// console.log("fdfd");

// const figure = new Triangle(2, 2, 3); // создали экземпляр нашего класса, то есть создали объект
// console.log(figure.perimeter);
// console.log(figure.area);


