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
	if (str === "") {
		return 0;
	} return str.match(/[aeiou]/gi).length;
}