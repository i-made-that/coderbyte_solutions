describe('capitalizeVowels', function() {
	it('should capitalize all vowels in a string', function() {
		expect(capitalizeVowels('abcde')).toBe('AbcdE');
	});
});

describe('letterChanges', function() {
    it('should turn z into upper case A', function() {
        expect(letterChanges('z')).toBe('A');
    });

    it('should change each letter into its subsequent alphabet letter', function() {
    	expect(letterChanges('abc')).toBe('bcd');
    });

    it('should return numbers and symbols without alteration', function() {
    	expect(letterChanges('123!@#')).toBe('123!@#');
    });

    it('should capitalize all vowels, after they are changed', function() {
    	expect(letterChanges('gdkkn')).toBe('hEllO');
    });
});

describe('vowelColor', function() {
	it('should return a string with all vowels enclosed in <span class="red"></span>', function() {
		expect(vowelColor('abe')).toBe('<span class="red">a</span>b<span class="red">e</span>');
	});
});

describe('vowelCount', function() {
	it('should return 0 if the string is empty', function() {
		expect(vowelCount('')).toBe(0);
	})
	it('should return 0 if the string has no vowels in it', function() {
		expect(vowelCount('bbzz34$')).toBe(0);
	});
	it('should return the total number of vowels in a string', function() {
		expect(vowelCount('abcdefg')).toBe('2 vowels total in "<span class="red">a</span>bcd<span class="red">e</span>fg"');
	});
});