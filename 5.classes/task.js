// Задача 1

class PrintEditionItem{ // базовый (не от чего не наследуется) класс
    constructor(name, releaseDate, pagesCount) { //  в скобках указываем только те свойства, значения для которых мы подставляем в момент создания экземпляра класса (объект)
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this.state = 100 // состояние и тип у на будут одинаковые для всех созданных объектов, поэтому в скобках выше мы их не пишем.
        this.type = null 
        
    }
    fix() { // метод - это функция внутри класса
        this.state = this.state * 1.5 // метод fix() меняет значение свойства this.state
    }  
    
    set state(value) {
        if (value < 0) {
            this._state = 0
        }
        else if (value > 100) {
            this._state = 100
        }
        else {
            this._state = value
        }
        
    } 

    get state() { 
        return this._state
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100


class Magazine extends PrintEditionItem { // команда extends указывает на то, от какого класса мы наследуемся
    type = "magazine"
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount) // super указывает, что именно эти свойства мы наследуем от родительского класса
        this.author = author
        this.type = "book"
    }
}


class NovelBook extends Book {
    type = "novel"
}

class FantasticBook extends Book {
    type = "fantastic"
}

class DetectiveBook extends Book {
    type = "detective"
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );


// ------------------------------------------------------------------------

// Задача 2

class Library {
    constructor(name) {
        this.name = name
        this.books = [] // хранилище
    }
    addBook(book) { // метод addBook добавляет книгу в хранилище по условию
        if (book.state > 30) {
            this.books.push(book)
        }
    }
    findBookBy(key, value) {
        for (let i = 0; i < this.books.length; i = i + 1) {
            if (this.books[i][key] === value) {
                return this.books[i]
            }
        }
        return null
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i = i + 1) {
            if (this.books[i].name === bookName) {
             const deleteElement = this.books.splice(i, 1)
             return deleteElement[0]
            }
        }
        return null
    }
}


// тестовый сценарий


const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1919,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
console.log(library.books)

// ------------------------------------------------ Сложное задание -------------------------------------------------------------------


class Student {
    // название функции конструктора принято писать с большой буквы
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
    getAverageBySubject(subject) {
      if (!this.marks[subject]) {
        return 0;
      } else {
        // let sum = 0
        // // console.log(this.marks[subject])
        // for (let i = 0; i < this.marks[subject].length; i = i + 1) {
        //     // console.log(this.marks[subject][i])
        //     sum = sum + this.marks[subject][i]
        // }
        // let average = sum / this.marks[subject].length
        // return average
        const reduceSum = this.marks[subject].reduce((sum, el) => {
          return sum + el;
        }, 0);
        const average = reduceSum / this.marks[subject].length;
        return average;
      }
    }
    getAverage() {
      const allSubjects = Object.keys(this.marks); // Object.keys возвращает массив всех ключей объекта
      // console.log (allSubjects)
      if (allSubjects.length === 0 ) {
        return 0
      }
      let sum = 0;
      for (let i = 0; i < allSubjects.length; i = i + 1) {
        // console.log(allSubjects[i])
        const curAverage = this.getAverageBySubject(allSubjects[i]);
        // console.log(curAverage)
        sum = sum + curAverage;
      }
      const average = sum / allSubjects.length;
      // console.log(average)
      return average;
    }
 
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          // Это проверка, что предмет (ключ) отсутствует в объекте. !false === true (! - восклицательный знак позволяет получить противоположное булевое значение)
          this.marks[subject] = [];
          this.marks[subject].push(mark);
        } else {
          this.marks[subject].push(mark);
        }
        // console.log(this.marks[subject]) // Если ключом у нас является переменная, то доступ к значению по ключу мы получаем через []
      } else {
        return;
      }
    }
  }
  
  const student1 = new Student("Василий");
  student1.addMark(4, "Физика");
  student1.addMark(5, "Физика");
  student1.addMark(3, "Физика");
  student1.addMark(3, "Физика");
  student1.addMark(2, "Физика");
  student1.addMark(5, "Ma");
  student1.getAverageBySubject("Физика");
  student1.getAverage();

  