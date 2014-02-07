

// Declared DOM variables
var	functionContainer = document.getElementById('functionContainer'),
		genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result'),
		textField = document.getElementById('textField'),
		description = document.getElementById('description'),
		functionTitle = document.getElementById('functionTitle');

var vowelCountBtn = document.getElementById('vowelCount'),
		add2Btn = document.getElementById('add2'),
		letterChangesBtn = document.getElementById('letterChanges');

// Declared utility variables
var	currentObject,
		currentButton,
		resultVisible = false,
		formVisible = false;

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
var vowelCountObj = {
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
};

var letterChangesObj = {
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
		return letterChangesObj.helperFunction(newStr);
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
};

var add2Obj = {
	title: 'add2',
	description: 'A function that adds the numeral 2 to anything',
	placeholder: 'Text please!',
	primaryFunction: function add2(str) { 'use strict'; return str + 2; },
	helperFunction: undefined
};








// Generic Helper functions usable in any project
function showElement (element) {
	'use strict';
	element.style.display = 'block';
}

function hideElement (element) {
	'use strict';
	element.style.display = 'none';
}

// Project specific functions 
//
// Takes an object and a target (in this case a button), and populates HTML with appropriate text and function
// Change value passed to target to determine where in DOM the element is placed
function populateWith(obj) {
	'use strict';
		description.innerHTML=obj.description;
		functionTitle.innerHTML=obj.title;
		textField.placeholder=obj.placeholder;
		showElement(functionContainer);
	}


function buttonControl(thisObj, thisBtn) {
	'use strict';
	if (formVisible === false) {
		thisBtn.className='btn btn-primary';
		populateWith(thisObj);
		showElement(functionContainer);
		currentObject = thisObj;
		currentButton = thisBtn;
		formVisible = true;
	} else if (currentObject === thisObj) {
			thisBtn.className='btn';
			currentButton = '';
			result.innerHTML='';
			hideElement(functionContainer);
			formVisible = false;
	} else if (currentObject !== thisObj && resultVisible === false) {
			currentButton.className='btn';
			thisBtn.className='btn btn-primary';
			result.innerHTML='';
			populateWith(thisObj);
			currentObject = thisObj;
			currentButton = thisBtn;
			formVisible = true;
	} else {
			currentButton.className='btn';
			thisBtn.className='btn btn-primary';
			result.innerHTML='';
			populateWith(thisObj);
			currentObject = thisObj;
			currentButton = thisBtn;
			formVisible = true;
		}
	}

document.getElementById('container').addEventListener('click', function(e) {
	var x = e.srcElement.id + "Obj";
	var y = e.srcElement.id + "Btn";
	buttonControl(x, y); 
}, false);

// Buttons & Interactions 
// vowelCountBtn.onclick = function() {
// 	'use strict';
// 	buttonControl(vowelCountObj, vowelCountBtn);
// };

// letterChangesBtn.onclick = function() {
// 	'use strict';
// 	buttonControl(letterChangesObj, letterChangesBtn);
// };

// add2Btn.onclick = function() {
// 	'use strict';
// 	buttonControl(add2Obj, add2Btn);
// };

genericForm.onsubmit = function () {
	'use strict';
	var userInput = textField.value;
	result.innerHTML = currentObject.primaryFunction(userInput);
	genericForm.reset();
	resultVisible = true;
	return false;
};





















