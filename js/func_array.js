//////////////////////////////////
// Big Coderbyte Object Array ///
////////////////////////////////

// {
// 	title: ,
// 	description: ,
// 	placeholder: ,
// 	primaryFunction: ,
// 	helperFunction: undefined,
// 	simpleCode:
// },

var util = {
	toArgs: function(str) {
		return str.split(',').map(function(val) { return eval(val) });
	}
}



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
	title: 'DO ARRAYADDITION!!!',
	description: undefined,
	placeholder: undefined,
	primaryFunction: undefined,
	helperFunction: undefined,
	simpleCode: undefined
},


{
	title: 'arithGeo',
	description: 'Determine whether a set of numbers constitue an arithmetic or geometric sequence.<br>Please enter integers separated by commas.',
	placeholder: 'ex: 5, 10, 15, 20',
	primaryFunction: 
	function arithGeo(arr) { 
		if (arr.match(/[^0-9^\s^,]/g)) {
			return regexpColor('Integers and commas only')
		}

		else {
			arr = util.toArgs(arr);	
  
		  var diff = arr[1] - arr[0],
		      ratio = arr[1] / arr[0],
		      arith = true,
		      geo = true;
		  
		  for (var i = 1; i < arr.length - 1; i++) {
		    if (arr[i + 1] - arr[i] !== diff) {
		      arith = false;
		    }
		    if (arr[i + 1] / arr[i] !== ratio) {
		      geo = false;
		    }
		  }
		  
		  if (arith) {return 'It\'s an arithmetic sequence!'}
		  else if (geo) {return 'It\'s a geometric sequence!'}
		  else return 'Not arithmetic or geometric';  
		  }       
	},
	helperFunction: undefined,
	simpleCode:
	function arithGeo(arr) {
		var diff = arr[1] - arr[0],
      		ratio = arr[1] / arr[0],
      		arith = true,
      		geo = true;

      for (var i = 1; i < arr.length - 1; i++) {
      	if (arr[i + 1] - arr[i] !== diff) {
      		arith = false;
      	}
      	if (arr[i + 1] / arr[i] !== ratio) {
      		geo = false;
      	}
      }
	  if (arith) {return 'Arithmetic'}
	  else if (geo) {return 'Geometric'}
	  else return -1;         
}
},


{
	title: 'dashInsert',
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
	helperFunction: undefined,
	simpleCode:
		function dashInsert (num) {
			var str = num.toString();
			var newStr = '';
			for (var i = 0; i < str.length; i++) {
				if ((str.charAt(i) % 2 === 1) && (str.charAt(i+1) % 2 === 1)) {
					newStr += str.charAt(i) + '-';
				} else newStr += str.charAt(i);
			}
			return newStr;
}
},


{
	title: 'exOh',
	description: 'Determine whether there are an equal number of x\'s and o\'s in a string',
	placeholder: 'Type me some x\'s and o\'s',
	primaryFunction:
	function ExOh(str) {
		var ex = str.match(/x/g),
		oh = str.match(/o/g);
		if (ex === null || oh === null) { return 'false'; }
		else return (str.match(/x/g).length === str.match(/o/g).length);         
},
	helperFunction: undefined,
	simpleCode:
	function ExOh(str) {
		var ex = str.match(/x/g),
		oh = str.match(/o/g);
		if (ex === null || oh === null) { return false; }
		else return (str.match(/x/g).length === str.match(/o/g).length);         
}
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
	title: 'letterCount',
	description: 'Find the first word with the greatest number of repeated letters.',
	placeholder: 'Type me anything',
	primaryFunction: 
		function letterCount(str) { 
 		  var wordArray = str.split(' '),
		      biggest,
		      biggestReggie,
		      currentWord,
		      count = 0,
		      reggie,
		      i,
		      j;

	  for (i = 0; i < wordArray.length; i++) {
	  	currentWord = wordArray[i];
	  	for (j = 0; j < currentWord.length; j++) {
	  		reggie = new RegExp(currentWord.charAt(j), 'g');
	  		if (currentWord.match(reggie).length > count) {
	  			count = currentWord.match(reggie).length;
	  			biggest = wordArray[i];
	  			biggestReggie = reggie;
	  		}
	  	}
	  }	
	   
	  // code goes here 
	  if (count < 2) return 'There are no repeated letters.';
	  else return '\'' + regexpColor(biggest, biggestReggie) + '\'' + ' has the most repeated letters.';
	},
	helperFunction: undefined,
	simpleCode: 
	function letterCount(str) { 
 		  var wordArray = str.split(' '),
		      biggest,
		      currentWord,
		      count = 0,
		      reggie,
		      i,
		      j;

		  for (i = 0; i < wordArray.length; i++) {
		  	currentWord = wordArray[i];
		  	for (j = 0; j < currentWord.length; j++) {
		  		reggie = new RegExp(currentWord.charAt(j), 'g');
		  		if (currentWord.match(reggie).length > count) {
		  			count = currentWord.match(reggie).length;
		  			biggest = wordArray[i];
		  		}
		  	}
		  }	
		   
		  // code goes here 
		  if (count < 2) return -1;
		  else return biggest;
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
	title: 'numberAddition',
	description: 'Adds all numbers found in a string (with or without letters & symbols).<br>Adjacent numbers matter (\'88sb3\' = 91; \'8b8b3\' = 19)',
	placeholder: 'Type me anything',
	primaryFunction:
		function NumberAddition(str) { 
  		return str.split(/[^\d]+/).reduce(function(a, b) {return +a + +b}) || 0; 
		},
	helperFunction: undefined,
	simpleCode:
		function NumberAddition(str) { 
  		return str.split(/[^\d]+/).reduce(function(a, b) {return +a + +b}) || 0; 
		},
},

{
	title: 'palindrome',
	description: 'Determines whether or not a string is a Palindrome',
	placeholder: 'Type me anything',
	primaryFunction:
	function palindrome(str) {
		var newStr = str.toLowerCase().split(/[^a-z]/).join(''),
  			compareStr = newStr.split('').reverse().join('');
  	return newStr === compareStr ? 'It\'s a palindrome!' : 'No, not a palindrome.';     
},
	helperFunction: undefined,
	simpleCode:
	function palindrome(str) {
		var newStr = str.toLowerCase().split(/[^a-z]/).join(''),
				compareStr = newStr.split('').reverse().join('');
		return newStr === compareStr;     
}
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
	title: 'thirdGreatest',
	difficulty: 'medium',
	description: 'Find the third longest word in a sentence.',
	placeholder: 'Type me a sentence',
	primaryFunction: 
	function thirdGreatest(str) { 
		var arr = str.split(' ');
  	return '\'' + regexpColor(arr.sort(function(a, b) { return b.length - a.length })[2]) + '\'' + ' is the third longest word'; 
	},
	helperFunction: undefined,
	simpleCode:
	function thirdGreatest(str) { 
		var arr = str.split(' ');
  		return arr.sort(function(a, b) { return b.length - a.length })[2]; 
}
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
	function timeConvert(num) {
		return Math.floor(num / 60) + ':' + num % 60; 
}
},


{
	title: 'vowelCount',
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
	helperFunction: undefined,
	simpleCode:
	function VowelCount(str) {
		var vowels = str.match(/[aeiou]/gi);
		return vowels ? vowels.length : 0;   
}
},

{
	title: 'wordCount',
	description: 'Count the number of words in a sentence.',
	placeholder: 'Type me anything',
	primaryFunction:
	function WordCount(str) {
		return str.split(' ').length + ' words total';
	},
	helperFunction: undefined,
	simpleCode:
	function WordCount(str) {
		return str.split(' ').length;
}
},




// {
// 	title: ,
// 	description: ,
// 	placeholder: ,
// 	primaryFunction: ,
// 	helperFunction: undefined,
// 	simpleCode:
// },






];
