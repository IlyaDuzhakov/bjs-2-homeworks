function getArrayParams(...arr) {
	let min = Math.min(...arr); 
	let max = Math.max(...arr); 
	let sum = 0;
	for (let i = 0; i < arr.length; i = i + 1) {
		sum = sum + arr[i];
		// console.log(arr[i])
	}
	let avg = Number((sum / arr.length).toFixed(2)); 
	const result = {
		max: max,
		min: min,
		avg: avg
	};
	return result
}
function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	let sum = 0
	for (let i = 0; i < arr.length; i = i + 1) {
		sum = sum + arr[i]
	}
	return sum
}
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	const min = Math.min(...arr)
	const max = Math.max(...arr)
	const result = max - min
	return result
}
function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	let sumEvenElement = 0
	let sumOddElement = 0
	for (let i = 0; i < arr.length; i = i + 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i]
		} else {
			sumOddElement = sumOddElement + arr[i]
		}
	}
	const difference = sumEvenElement - sumOddElement
	return difference
}
function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0
	}
	let sumEvenElement = 0
	let countEvenElement = 0
	for (let i = 0; i < arr.length; i = i + 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i]
			countEvenElement = countEvenElement + 1
		}
	}
	const result = sumEvenElement / countEvenElement
	return result
}

function makeWork (arrOfArr, func) {

}
