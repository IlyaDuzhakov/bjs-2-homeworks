function Student(name, gender, age) { // название функции конструктора принято писать с большой буквы
	this.name = name
	this.gender = gender
	this.age = age
	this.marks = []
}
const a = new Student('Вася', 'мужской', 45) // new - отдельный оператор
const b = new Student('Инна', 'женский', 25) // оператор new создаёт экземпляр нашего студента (объекта)
// console.log(a, b)

Student.prototype.setSubject = function(subjectName) { // с помощью свойства prototype мы можем расширить наш объект. // Например добавить ему какую-то функцию.
	//   console.log(subjectName)
	this.subject = subjectName
}
a.setSubject('оливия')
// console.log(a) // функция setSubject добавленная через свойство prototype будет доступна для всех объектов, созданных с помощью new Student


Student.prototype.addMarks = function(...marks) { // rest оператор (...) собирает оставшиеся параметры функции, для которых не было отдельных переменных.
	//   console.log(marks)
	if (this.marks) { // проверка существования свойства marks
		this.marks = [...this.marks, ...marks] // сдесь (...) это spread оператор, который развернёт наш массив
	}
}
a.addMarks(34, 12, 23)
a.addMarks(54, 86)
// console.log(a)




Student.prototype.getAverage = function() {
	if (this.marks && this.marks.length > 0) {
		let sum = 0
		for (let i = 0; i < this.marks.length; i = i + 1) {
			//   console.log (this.marks[i])
			sum = this.marks[i] + sum
		}
		let average = sum / this.marks.length
		//   console.log(average)
		return average
	} else {
		return 0
	}
}
a.getAverage()

Student.prototype.exclude = function(reason) {
	delete this.subject
	delete this.marks
	this.excluded = reason
}
// a.exclude('Не посещал')
// console.log (a.getAverage())
// console.log(a)