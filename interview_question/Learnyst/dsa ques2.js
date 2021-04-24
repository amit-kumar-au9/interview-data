/*Given an array, cyclically rotate the array clockwise by one
Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}*/

function shiftArray(arr) {
	var last = arr[-1];
	var prev = arr[0];
	var curr;
	for (var i = 1; i < arr.length; i++) {
		Curr = arr[i];
		arr[i] = prev;
		prev = curr;
	}
	arr[0] = last;
	return arr;
}

var arr = [1, 2, 3, 4, 5];
new_arr = shiftArray(arr);
