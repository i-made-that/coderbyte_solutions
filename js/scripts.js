// Declared DOM variables
var	functionContainer = document.getElementById('functionContainer'),
		genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result');
		



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
	primaryFunction: function add2(str) { 'use strict'; return str + 2; },
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








