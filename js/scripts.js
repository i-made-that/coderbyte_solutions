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
function populate(obj, target) {
	'use strict';
		description.innerHTML=obj.description;
		functionTitle.innerHTML=obj.title;
		textField.placeholder=obj.placeholder;
		// container.insertBefore(functionContainer, target.nextSibling); // Comment this out if function should appear below buttons
		showElement(functionContainer);
	}



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

var add2Obj = {
	title: 'add2',
	description: 'A function that adds the numeral 2 to anything',
	placeholder: 'Text please!',
	primaryFunction: function add2(str) { 'use strict'; return str + 2; },
	helperFunction: undefined
};

var testObj = {
	title: 'test',
	description: 'testing 1, 2, 3',
	placeholder: 'just a test',
	primaryFunction: function testes(str) { 'use strict'; return 'test'; },
	helperFunction: undefined
};



// Declared DOM variables
var container = document.getElementById('container'),
		functionContainer = document.getElementById('functionContainer'),
		genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result'),
		textField = document.getElementById('textField'),
		description = document.getElementById('description'),
		functionTitle = document.getElementById('functionTitle');

var vowelCountBtn = document.getElementById('vowelCountBtn'),
		add2Btn = document.getElementById('add2Btn'),
		testBtn = document.getElementById('testBtn');

// Declared utility variables
var	currentObject,
		currentButton,
		sameButton,
		resultVisible = false,
		formVisible = false;


// UI Button functionality
vowelCountBtn.onclick = function() {
	'use strict';
	buttonControl(vowelCountObj, vowelCountBtn);
};


testBtn.onclick = function() {
	'use strict';
	buttonControl(testObj, testBtn);
}

function buttonControl(obj, btn) {
	if (formVisible === false) {
		populate(obj, btn);
		showElement(functionContainer);
		currentObject = obj;
		formVisible = true;
	} else if (currentObject === obj) {
			result.innerHTML='';
			hideElement(functionContainer);
			formVisible = false;
		} else if (currentObject !== obj && resultVisible === false) {
			result.innerHTML='';
			populate(obj,btn);
			currentObject = obj;
			formVisible = true;
		} else {
			result.innerHTML='';
			populate(obj, btn);
			currentObject = obj;
			formVisible = true;
		}
	}



add2Btn.onclick = function() {
	'use strict';
	buttonControl(add2Obj, add2Btn);
};


genericForm.onsubmit = function () {
	'use strict';
	var userInput = textField.value;
	result.innerHTML = currentObject.primaryFunction(userInput);
	genericForm.reset();
	resultVisible = true;
	return false;
};









// vowelCountBtn.onclick = function () {
// 	'use strict';
// 	if (visible === false) {
// 		description.innerHTML=vowelCountObj.description;
// 		functionTitle.innerHTML=vowelCountObj.title;
// 		textField.placeholder=vowelCountObj.placeholder;
// 		container.insertBefore(functionContainer, vowelCountBtn.nextSibling);
// 		showElement(functionContainer);
// 		visible = true;
// 	} else {
// 		hideElement(functionContainer);
// 		visible = false;
// 	}
// };





// This is the letterChanges function and it's helper
//
// function capitalizeVowels(str) {
// 	'use strict';
// 	var newStr = '',
// 		len = str.length;
// 	for (var i = 0; i < len; i++) {
// 		if ((/[aeiou]/i).test(str.charAt(i))) {
// 			newStr += str.charAt(i).toUpperCase();
// 		} else newStr += str.charAt(i);
// 	}
// 	return newStr;
// }

// function letterChanges(str) {
// 	'use strict';
// 	var newStr = '',
// 		len = str.length;
// 	for (var i = 0; i < len; i++) {
// 		if ((/z/i).test(str.charAt(i))) {
// 			newStr += 'a';
// 		} else if ((/[a-y]/i).test(str.charAt(i))) {
// 			newStr += String.fromCharCode((str.charCodeAt(i) + 1));
// 		} else newStr += str.charAt(i);
// 	}
// 	return capitalizeVowels(newStr);
// }
