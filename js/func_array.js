//////////////////////////////////
// Big Coderbyte Object Array ///
////////////////////////////////

var arrayOfObjects = [
{
	title: 'abCheck',
	description: 'Reports whether the letters \'a\' and \'b\' occur in a string, and are also separated by 3 places.',
	placeholder: 'Type me anything',
	primaryFunction:
	function abCheck(str) {
		if (str.match(/[aA]...[bB]/g) || str.match(/[bB]...[aA]/g)) {
			return 'Well yes, they are!';
		} return 'No such luck...';
	},
	helperFunction: undefined,
	simpleCode:
	function abCheck(str) {
		return str.match(/[aA]...[bB]/g) || str.match(/[bB]...[aA]/g) ? true : false;
}
},

{
	title: 'alphabetSoup',
	description: 'Alphabetizes a string, numbers first',
	placeholder: 'Type me anything',
	primaryFunction:
		function alphabetSoup(str) {
			return str.split('').sort().join('');
		},
	helperFunction: undefined,
	simpleCode:
	function alphabetSoup(str) {
		return str.split('').sort().join('');
	}
},


{
	title: '*dashInsert',
	description: 'Inserts a dash between any two adjacent odd numbers in a string.<br>0 doesn\'t count as odd',
	placeholder: 'Type me anything',
	primaryFunction:
		function dashInsert (num) {
			var str = num.toString();
			var newStr = '';
			for (var i = 0; i < str.length; i++) {
				if ((str.charAt(i) % 2 === 1) && (str.charAt(i+1) % 2 === 1)) {
					newStr += str.charAt(i) + '-';
				} else newStr += str.charAt(i);
			}
			return newStr;
		},
	helperFunction: undefined
},

{
	title: 'firstFactorial',
	description: 'Takes number, returns factorial',
	placeholder: 'Type me a number',
	primaryFunction:
	function firstFactorial (num) {
		if (isNaN(num)) {
			return '<span class="red">I need a number, please!</span>';
		} else if (parseInt(num) === 0) {
			return num + '!' + ' is equal to 1';
		} else if (num < 0) {
			return '<span class="red">I need a POSITIVE number, please!</span>';
		} else {
			var result = num;
			for (var i = num; i > 1; i--) {
				result *= (i -1);
			}
			return num + '!' + ' is equal to ' + Math.round(result);
		}
	},
	helperFunction: undefined,
	simpleCode:
		function firstFactorial(num) { 
  		return num === 0 ? 1 : num * firstFactorial(num - 1);     
}
},

{
	title: 'firstReverse',
	description: 'This function reverses a string',
	placeholder: 'Type me anything',
	primaryFunction:
		function firstReverse(str) {
			return 'Reversed: ' + str.split('').reverse().join('');
		},
	helperFunction: undefined,
	simpleCode:
		function firstReverse(str) {
			return str.split('').reverse().join('');
}
},

{
	title: 'letterCapitalize',
	description: 'Capitalize the first letter of each word.',
	placeholder: 'Type me anything',
	primaryFunction:
		function letterCapitalize (str) {
			var newStr = str.charAt(0).toUpperCase();
			for (var i = 1; i < str.length; i++) {
				if (str.charAt(i - 1) === ' ') {
					newStr += str.charAt(i).toUpperCase();
				} else newStr += str.charAt(i);
			}
		return newStr;
	},
	helperFunction: undefined,
	simpleCode: 
	function letterCapitalize(str) { 
  	var words = str.split(' ');
  	return words.map(function(val) { return val[0].toUpperCase() + val.substring(1) }).join(' ');         
}
},

{
	title: 'letterChanges',
	description: 'A function that takes a string, and replaces every letter in the string with the letter that follows in the alphabet.<br>Then, it capitalizes all vowels.<br>Numbers stay the same.',
	placeholder: 'Type me anything',
	primaryFunction:
		function letterChanges(str) {
str.toLowerCase();
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
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((/[aeiou]/i).test(str.charAt(i))) {
				newStr += str.charAt(i).toUpperCase();
			} else newStr += str.charAt(i);
		}
		return newStr;
	},
	simpleCode:
		function letterChanges(str) {
			str.toLowerCase();
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
		}
},

{
	title: 'longestWord',
	description: 'Returns the longest word in a sentence.<br>If there is more than one longest word with the same length, it returns the first.<br>Symbols and punctuation are <em>not</em> accounted for.',
	placeholder: 'Type me anything',
	primaryFunction:
		function longestWord(sen) {
			var noPunc = sen.replace(/[^a-zA-z^0-9^ ]/g, '').split(' '), longest = '';
  
  		return 'The longest word is ' + noPunc.reduce(function(a, b) { 
    		return b.length > a.length ? b : a; })
},
	helperFunction: undefined,
	simpleCode:
		function longestWord(sen) {
			var noPunc = sen.replace(/[^a-zA-z^0-9^ ]/g, '').split(' '), longest = '';

			return noPunc.reduce(function(a, b) {
				return b.length > a.length ? b : a; })
		}
},

{
	title: '*numberAddition',
	description: 'Adds all numbers found in a string (with or without letters & symbols).<br>Adjacent numbers matter (AKA 88sb3 = 91; 8b8b3 = 19)',
	placeholder: 'Type me anything',
	primaryFunction:
		function numberAddition (str) {
			var total = 0;
			var num = 0;
			for (var i = 0; i < str.length; i++) {
				if (str.charAt(i) === ' ') {
					total += parseInt(num);
					num = 0;
				}
				else if (!isNaN(str.charAt(i))) {
					num += str.charAt(i);
				}
				else {
					total += parseInt(num);
					num = 0;
				}
			}
			total += parseInt(num);
			return total;
		},
	helperFunction: undefined
},

{
	title: '*palindrome',
	description: 'Determines whether or not a string is a Palindrome.<br>Ignores numbers and punctuation.<br>Spaces don\'t count.',
	placeholder: 'Type me anything',
	primaryFunction:
	function palindrome(str) {
    var newStr = '';
	

		var removeSpaces = function(str){
			var noSpaceStr = '';
			for (var i = 0; i < str.length; i++){
				if (str.charAt(i) !== ' '){
					noSpaceStr += str.charAt(i);
				}
			}
			return noSpaceStr;
		};
		for (var i = removeSpaces(str).length; i >= 0; i--){
			newStr = newStr + removeSpaces(str).charAt(i);
		}
		if (removeSpaces(str) === newStr){
			return 'Success! Palindrome!';
		} else return 'Sorry, not a palindrome...';
	},
	helperFunction: undefined
},

{
	title: 'simpleAdding',
	description: 'Adds all the numbers up from 1 to n (n being your input)',
	placeholder: 'Type me a number',
	primaryFunction:
		function simpleAdding(num) {
			if (isNaN(num)) {
				return '<span class="red">I need a number, please!</span>';
			} else if (parseInt(num) === 0) {
				return num + '!' + ' is equal to 1';
			} else if (num > 10000000) {
				return '<span class="red">A number that big might kill your browser!</span>';
			} else if (num < 0) {
				return '<span class="red">I need a POSITIVE number, please!</span>';
			} else if (num % 1 !== 0) {
				return '<span class="red">No decimals, please!</span>';
			} else if (parseInt(num) === 1) {
				return 1;
			} else if (parseInt(num) === 2) {
				return '1 + 2 = 3';
			} else
			{
				var temp = 0;
				for(var i = 1; i <= num; i++){
					temp = temp + i;
				}
				return '1 + 2 + 3 + (...) = ' + temp;
			}
		},
	helperFunction: undefined,
	simpleCode: 
		function simpleAdding(num) {
			if (num === 0) {
				return 0;
			} else return num + SimpleAdding(num - 1);
		}
},

{
	title: 'simpleSymbols',
	description: 'Determines if a string is an acceptable sequence.<br>\'Acceptable\' means that any letter must be surrounded by a \'+\' symbol',
	placeholder: 'Type me anything',
	primaryFunction:
		function simpleSymbols(str) {
			var isIt = false;
			for (var i = 0; i < str.length; i++) {
				if (/[a-zA-Z]/.test(str.charAt(i))) {
					if (str.charAt(i + 1) === '+' && str.charAt(i - 1) === '+') {
						isIt = true;
					} else return '<span class="red">NOT</span>  acceptable!';
				}
			}
			if (isIt) {
				return 'Acceptable!';
			}
		},
	helperFunction: undefined,
	simpleCode: 
	function simpleSymbols(str) {
		if (str === '') {
			return true;
		}
		else if (str.charAt(0).match(/[a-z]/i)) {
			return false;
		}
		else if (str.charAt(1).match(/[a-z]/i)) {
			if (str.substring(0, 3).match(/\+.\+/)) {
				return simpleSymbols(str.substring(2));
			}
			else return false;
		}
		else return simpleSymbols(str.substring(1));
}
},

{
	title: '*swapCase',
	description: 'Swaps the upper/lower case of each letter, depending on their original case.<br>Numbers and symbols stay the same.',
	placeholder: 'Type me anything',
	primaryFunction:
	function swapCase(str) {
		var newStr = '';
		for (var i = 0; i < str.length; i++)
			if (str.charAt(i) == str.charAt(i).toUpperCase()) {
				newStr = newStr + str.charAt(i).toLowerCase();
			} else if (str.charAt(i) == str.charAt(i).toLowerCase()) {
				newStr = newStr + str.charAt(i).toUpperCase();
			}
			return newStr;
		},
	helperFunction: undefined
},


{
	title: 'timeConvert',
	description: 'Calculates the number of hours and minutes that a given number converts to',
	placeholder: 'Type me a number',
	primaryFunction:
	function TimeConvert(num) {
		num = +num;
		if (isNaN(num)) {
			return regexpColor('Please input a number');
		}
		return num + ' = ' + Math.floor(num / 60) + ' hours and ' + num % 60 + ' minutes';
	},
	helperFunction: undefined,
	simpleCode:
	function TimeConvert(num) {
		return Math.floor(num / 60) + ':' + num % 60; 
}
},


{
	title: '*vowelCount',
	description: 'This function counts the number of vowels in a sentence or word.',
	placeholder: 'Type me anything',
	primaryFunction:
		function vowelCount(str) {
			var matchArray = str.match(/[aeiou]/gi);
			if (str === '') {
				return '';
			} else if (matchArray === null) {
				return '0 vowels total';
			} else return matchArray.length + ' vowels total in ' + '"' + regexpColor(str, /[aeiou]/gi) + '"' ;
		},
	helperFunction: undefined
}
];
