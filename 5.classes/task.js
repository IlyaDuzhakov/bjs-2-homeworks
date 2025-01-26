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

