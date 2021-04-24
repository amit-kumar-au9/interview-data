/*Given a non zero length string. Change the order of characters in a string to make the given string a palindrome. Output the palindrome if it is possible to make the string a palindrome else output error

Example: 
Input: ratotor     output: rotator
Input: ssttmaallm     output: stmallamts
Input: text          output: cannot make palindrome from given string
*/

var convertString = function (str) {
	var new_one = str.sort();
	var front = '';
	var end = '';
	var extra = '';
	var i = 0;
	while (i < new_one.length) {
		if (new_one[i] === new_one[i + 1]) {
			front += new_one[i];
			end = new_one[i] + end;
			i += 2;
		} else if (!extra) {
			extra = new_one[i];
			i += 1;
		} else {
			return 'error';
		}
	}
	return front + extra + end;
};
var new_string = 'ratotor';
console.log(convertString(new_string));
