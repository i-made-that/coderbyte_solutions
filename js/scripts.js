var vowelCountObj = {
	title: "vowelCount",
	description: "This function counts the number of vowels in a sentence of word.",
	placeholder: "Enter some things here",
	primaryFunction: 
		function vowelCount(str) {
			'use strict';
			var matchArray = str.match(/[aeiou]/gi);
			if (matchArray === null) {
				return '0 vowels total';
			} else return matchArray.length + ' vowels total in ' + '"' + vowelColor(str) + '"' ;
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
}

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
	return capitalizeVowels(newStr);
}

function vowelCount(str) {
	'use strict';
	var matchArray = str.match(/[aeiou]/gi);
	if (matchArray === null) {
		return '0 vowels total';
	} else return matchArray.length + ' vowels total in ' + '"' + vowelColor(str) + '"' ;
}

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

var genericForm = document.getElementById('genericForm');
var result = document.getElementById('result');
var textField = document.getElementById('textField');
var description = document.getElementById('description');

genericForm.onsubmit = function () {
	'use strict';
	var userInput = textField.value;
	result.innerHTML = vowelCount(userInput);
	genericForm.reset();
	return false;
};

