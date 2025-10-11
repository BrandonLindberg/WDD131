const currentDate = new Date();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const reducedYear = year % 100;

console.log(reducedYear)

function isCardNumberValid(number) {
	return number === '1234123412341234'
}
function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	displayError('')
	if (isNaN(this.cardNumber.value)) {
		errorMsg += 'ERROR: Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		errorMsg += 'ERROR: Card number is not a valid card number\n'
	} else if ((this.cardMonth.value) < reducedYear && (this.cardYear.value) < month){
        errorMsg += 'ERROR: Choose a date in the future\n'
    }
	if (errorMsg !== '') {
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#creditCardForm').addEventListener('submit', submitHandler)
