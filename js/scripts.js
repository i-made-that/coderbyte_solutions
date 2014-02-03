function capitalizeVowels(str) {
	var newStr = "",
		len = str.length;
	for (var i = 0; i < len; i++) {
		if ((/[aeiou]/i).test(str.charAt(i))) {
			newStr += str.charAt(i).toUpperCase();
		} else newStr += str.charAt(i);
	} return newStr;	
}

function letterChanges(str) {
	var newStr = "",
		len = str.length;
	for (var i = 0; i < len; i++) {
		if ((/z/i).test(str.charAt(i))) {
			newStr += "a";
		} else if ((/[a-y]/i).test(str.charAt(i))) {
			newStr += String.fromCharCode((str.charCodeAt(i) + 1));
		} else newStr += str.charAt(i);
	} return capitalizeVowels(newStr);
} 

function vowelCount(str) {
	var matchArray = str.match(/[aeiou]/gi);
	if (matchArray === null) {
		return 0;
	} else return matchArray.length + " vowels total in " + '"' + vowelColor(str) + '"' ;
}

function vowelColor(str) {
	var newStr = "",
			len = str.length;
	for (var i = 0; i < len; i++) {
		if ((str.charAt(i)).match(/[aeiou]/gi)) {
			newStr += "<span class=\"red\">" + str.charAt(i) + "</span>";
		} else newStr += str.charAt(i);
	} return newStr;
}

var genericForm = document.getElementById('genericForm');
var result = document.getElementById('result');
var textField = document.getElementById('textField');

genericForm.onsubmit = function () {
	var userInput = textField.value;
	result.innerHTML = vowelCount(userInput);
	genericForm.reset();
	return false;
}

