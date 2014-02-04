function showElement (element) {
	'use strict';
	element.style.display = 'block';
}

function hideElement (element) {
	'use strict';
	element.style.display = 'none';
}

var vowelCountObj = {
	title: 'vowelCount',
	description: 'This function counts the number of vowels in a sentence of word.',
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




var container = document.getElementById('container'),
		functionContainer = document.getElementById('functionContainer'),
		genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result'),
		textField = document.getElementById('textField'),
		description = document.getElementById('description'),
		functionTitle = document.getElementById('functionTitle');

var vowelCountBtn = document.getElementById('vowelCountBtn');

var visible = false;


vowelCountBtn.onclick = function () {
	'use strict';
	if (visible === false) {
		description.innerHTML=vowelCountObj.description;
		functionTitle.innerHTML=vowelCountObj.title;
		textField.placeholder=vowelCountObj.placeholder;
		container.insertBefore(functionContainer, vowelCountBtn.nextSibling);
		showElement(functionContainer);
		visible = true;
	} else {
		hideElement(functionContainer);
		visible = false;
	}
};

genericForm.onsubmit = function () {
	'use strict';
	var userInput = textField.value;
	result.innerHTML = vowelCountObj.primaryFunction(userInput);
	genericForm.reset();
	return false;
};



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
