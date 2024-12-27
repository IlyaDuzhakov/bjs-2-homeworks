'use strict'

function solveEquation(a, b, c) {
	let d = Math.pow(b, 2) - 4 * a * c
	if (d < 0) {
		return []
	} else if (d === 0) {
		let result = -b / (2 * a)
		return [result]
	} else if (d > 0) {
		let result1 = (-b + Math.sqrt(d)) / (2 * a)
		let result2 = (-b - Math.sqrt(d)) / (2 * a)
		return [result1, result2]
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = (percent / 100) / 12
	let S = amount - contribution
	let count = S * (P + (P / (((1 + P) ** countMonths) - 1)))
	let result = (count * countMonths).toFixed(2)
	console.log(typeof Number(result))
	return (+result)
}
