// Declared DOM variables
var	genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result'),
		expanded = false,
		oldButton,
		i,
		functionContainer = document.getElementById('functionContainer'),
		answer = document.getElementById('answer'),
		printInput = document.getElementById('printInput'),
		textField = document.getElementById('textField');

// Object literal template
//
// var XXX = {
// 	title: '',
// 	description: '',
// 	placeholder: '',
// 	primaryFunction:,
// 	helperFunction:
// };


// Coderbyte Objects
var arrayOfObjects = [
{
	title: 'vowelCount',
	description: 'This function counts the number of vowels in a sentence or word.',
	placeholder: 'Enter some things here',
	primaryFunction:
		function vowelCount(str) {
			'use strict';
			var matchArray = str.match(/[aeiou]/gi);
			if (str === '') {
				return '';
			} else if (matchArray === null) {
				return '0 vowels total';
			} else return matchArray.length + ' vowels total in ' + '"' + this.helperFunction(str) + '"' ;
		},
	helperFunction:
		function vowelColor(str) {
		'use strict';
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((str.charAt(i)).match(/[aeiou]/gi)) {
				newStr += '<span class=\"red\">' + str.charAt(i) + '</span>';
			} else newStr += str.charAt(i);
		} return newStr;
	}
},

{
	title: 'letterChanges',
	description: 'A function that takes a string, and replaces every letter in the string with the letter that follows in the alphabet.  Then, it capitalizes all vowels.',
	placeholder: 'Enter some words',
	primaryFunction:
		function letterChanges(str) {
		'use strict';
		var newStr = '',
			len = str.length;
		for (var i = 0; i < len; i++) {
			if ((/z/i).test(str.charAt(i))) {
				newStr += 'a';
			} else if ((/[a-y]/i).test(str.charAt(i))) {
				newStr += String.fromCharCode((str.charCodeAt(i) + 1));
			} else newStr += str.charAt(i);
		}
		return this.helperFunction(newStr);
	},
	helperFunction:
		function capitalizeVowels(str) {
		'use strict';
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((/[aeiou]/i).test(str.charAt(i))) {
				newStr += str.charAt(i).toUpperCase();
			} else newStr += str.charAt(i);
		}
		return newStr;
	}
},

{
	title: 'add2',
	description: 'A function that adds the numeral 2 to anything',
	placeholder: 'Text please!',
	primaryFunction: 
		function add2(str) { 
			'use strict'; 
			if (str !== '') {
				return str + 2; 
			} else return '';
		},
	helperFunction: undefined
}
];







// Generic Helper functions usable in any project
function showElement (element) {
	'use strict';
	element.style.display = 'block';
}

function hideElement (element) {
	'use strict';
	element.style.display = 'none';
}

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

function populateForm (array, index) {
	'use strict';
	var	functionTitle = document.getElementById('functionTitle'),
			description = document.getElementById('description'),
			textField = document.getElementById('textField');

	functionTitle.innerHTML=arrayOfObjects[index].title;
	description.innerHTML=arrayOfObjects[index].description;
	textField.placeholder=arrayOfObjects[index].placeholder;
}


buildButtons(arrayOfObjects);



document.getElementById('buttons').addEventListener('click', function(e) {
	'use strict';

	var currentButton = e.srcElement,
			index = currentButton.getAttribute('data-index');
			i = index;
	
	if (expanded === false) {
		console.log('first');
		oldButton = currentButton;
		expanded = true;
		hideElement(result);
		genericForm.reset();
		currentButton.className = 'btn btn-primary';
		populateForm(arrayOfObjects, index);
		showElement(functionContainer);
	} else if (expanded === true && index === oldButton.dataset.index) {
		console.log('second');
		oldButton = currentButton;
		expanded = false;
		textField.value = '';
		hideElement(functionContainer);
		hideElement(result);
		genericForm.reset();
		currentButton.className = 'btn';
		oldButton.className = 'btn';
	} else if (expanded === true && index !== oldButton.dataset.index) {
		oldButton.className = 'btn';
		console.log('third');
		expanded = true;
		oldButton = currentButton;
		currentButton.className = 'btn btn-primary';
		populateForm(arrayOfObjects, index);
		hideElement(result);
		genericForm.reset();
	}
}, false);


document.getElementById('submitButton').addEventListener('click', function(e) {
			var boom = arrayOfObjects[i].primaryFunction(textField.value),
					submitButton = document.getElementById('submitButton');

			if (textField.value !== '') {
			printInput.innerHTML=textField.value;
			answer.innerHTML=boom;
			genericForm.reset();
			showElement(result);
			textField.focus();
			textField.value = '';
			e.preventDefault();
				} else {
					hideElement(result);
					textField.focus();

					e.preventDefault();
				}


		}, false);




