	
	function performOperation(operation) {
	// Get user input from input fields
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	
	// Check if inputs are valid numbers
	if (!isNaN(num1) && !isNaN(num2)) {
		// Perform the operation based on the parameter
		let result;
		
		if (operation === 'add') {
			result = add(num1, num2);
		} else if (operation === 'multiply') {
			result = multiply(num1, num2);
		} else if (operation === 'divide') {
			result = divide(num1, num2);
		}
		
		// Display the result
		displayResult(result);
	} else {
		displayResult('Please enter valid numbers');
	}
}

function add(a, b) {
	// Debugger pauses here to inspect variables
	debugger;
	
	// Add the numbers
	return a + b;
}

function multiply(a, b) {
	// Introduce a debugger statement to pause execution
	debugger;
	
	// Multiply the numbers
	return a * b;
}

function divide(a, b) {
	// Debugger pauses here
	debugger;
	
	// Check for division by zero
	if (b === 0) {
		return 'Cannot divide by zero';
	}
	
	// Divide the numbers
	return (a / b).toFixed(2);
}

function displayResult(result) {
	// Display the result in the paragraph element
	const resultElement = document.getElementById('result');
	resultElement.textContent = `The result is: ${result}`;
}
		
