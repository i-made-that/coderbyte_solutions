var	genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result'),
		expanded = false,
		oldButton,
		i,
		functionContainer = document.getElementById('functionContainer'),
		answer = document.getElementById('answer'),
		printInput = document.getElementById('printInput'),
		theCode = document.getElementById('functionCode'),
		textField = document.getElementById('textField');


// Some self-explanatory show/hide functions
function showElement (element) {
	'use strict';
	element.style.display = 'block';
}

function hideElement (element) {
	'use strict';
	element.style.display = 'none';
}


// Takes a string and regular expression, returns a HTML string with the regexp matches highlighted in a <span>
function regexpColor(str, regexp) {
		'use strict';
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((str.charAt(i)).match(regexp)) {
				newStr += '<span class=\"red\">' + str.charAt(i) + '</span>';
			} else newStr += str.charAt(i);
		} return newStr;
	}

// Takes a string (preferably code) and attempts to return HTML with the appropriate return and tab spaces in place
function prettyCode(str) {
	'use strict';
	var newStr = '';
	for (var i = 0; i < str.length; i++) {
		
		if (str[i].match(/\n/)) {
			newStr += '<br>';
		} else if (str[i].match(/\t/)) {
		newStr += '&nbsp;&nbsp;';

		}else newStr += str[i];
	} return newStr;
}

// Loops through an object array and builds HTML buttons when the appropriate properties are present
function buildButtons (array) {
	'use strict';
	var len = array.length;
	for (var i = 0; i < len; i++) {
		var buttons = document.getElementById('buttons'),
				newButton = document.createElement('button');
				
		newButton.id=arrayOfObjects[i].title;
		newButton.className='btn';
		newButton.dataset.index=[i];
		newButton.innerHTML=arrayOfObjects[i].title;
		buttons.appendChild(newButton);
	}
}

// This is the initial button build 
buildButtons(arrayOfObjects);

// Takes and array and an index
// Based on that index, populates HTML with text from the associated object
function populateForm (array, index) {
	'use strict';
	var	functionTitle = document.getElementById('functionTitle'),
			description = document.getElementById('description'),
			textField = document.getElementById('textField');

	functionTitle.innerHTML=arrayOfObjects[index].title;
	description.innerHTML=arrayOfObjects[index].description;
	textField.placeholder=arrayOfObjects[index].placeholder;
}



// Event Listeners Follow


// Possibly somewhat convoluted means of hiding/showing the appropriate elements at the appropriate times depending on state and button clicked
document.getElementById('buttons').addEventListener('click', function(e) {
	'use strict';

	var currentButton = e.target,
			showCode = document.getElementById('showCode'),
			index = currentButton.getAttribute('data-index');
			i = index;
		
	if (expanded === false) { // If nothing has been expanded...	
		// console.log('first');
		oldButton = currentButton;
		expanded = true;
		hideElement(result);
			hideElement(theCode);
		genericForm.reset();
		textField.focus();
		currentButton.className = 'btn btn-primary';
		populateForm(arrayOfObjects, index);
		showElement(functionContainer);
		showElement(showCode);
	} else if (expanded === true && index === oldButton.dataset.index) { // If a pane is expanded, clicking the same button will close it again
		// console.log('second');
		oldButton = currentButton;
		expanded = false;
		textField.value = '';
		textField.focus();
		hideElement(functionContainer);
		hideElement(showCode);
		hideElement(result);
			hideElement(theCode);
		genericForm.reset();
		currentButton.className = 'btn';
		oldButton.className = 'btn';
	} else if (expanded === true && index !== oldButton.dataset.index) { // If a pane is expanded, clicking a different button will re-populate fields with the appropriate data
		// console.log('third');
		oldButton.className = 'btn';
		oldButton = currentButton;
		expanded = true;
		textField.focus();
		currentButton.className = 'btn btn-primary';
		populateForm(arrayOfObjects, index);
		hideElement(result);
		hideElement(theCode);
		showElement(showCode);
		genericForm.reset();
	}
}, false);


// This button is responsible for executing whatever funcion is currently expanded
document.getElementById('submitButton').addEventListener('click', function(e) {
	'use strict';
	var boom = arrayOfObjects[i].primaryFunction(textField.value);
	
	if (textField.value !== '') { // If the user has input data, execute the function and show some stuff
		printInput.innerHTML=textField.value;
		answer.innerHTML=boom;
		genericForm.reset();
		showElement(result);
		textField.focus();
		textField.value = '';
		e.preventDefault();
	} else { // If the input field is empty, do nothing
		hideElement(result);
		textField.focus();
		e.preventDefault();
	}
}, false);


// These buttons show and hide the code for the related function.  Grabbed via 'i' from the array object and pretty printed via whiteSpace function
document.getElementById('showCode').addEventListener('click', function() {
	'use strict';
	var stringCode = arrayOfObjects[i].simpleCode.toString();
	theCode.innerHTML = prettyCode(stringCode);
	showElement(theCode);
}, false);

// document.getElementById('showCode').addEventListener('mouseout', function() {
// 	'use strict';
// 	hideElement(theCode);
// }, false);













