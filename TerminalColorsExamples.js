
/*
* text/background colors: 	| * properties:
* 		- red				| *			- bright
* 		- green				| * 		- dim
* 		- yellow			| * 		- italic
* 		- blue				| * 		- underscore
* 		- magenta			| * 		- blink
* 		- cyan				| * 		- reverse
* 		- white				| * 		- hidden
*/


var tc = require('./TerminalColors');

tc.printWith(console.log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printWith(console.log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'yellow');
tc.printWith(console.log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'white', 'magenta');
tc.printWith(console.log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'cyan', 'magenta', ['italic']);
tc.printWith(console.log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'green', 'black', ['bright', 'underscore']);

tc.print('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.setProperties(console.log, 'red', 'yellow', ['italic', 'underscore']);
tc.print('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printWith(console.log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.setProperties(console.log, 'cyan', 'blue', ['bright', 'underscore']);
tc.print('ABCDEFGHIJKLMNOPQRSTUXWVYZ');

/* Example: any external logging lib*/
function log(text)
{
	console.log(text);
}
tc.printWith(log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'green', 'white', ['dim']);

/* Example: function 0*/
function error(text){
	tc.printWith(log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'white', 'red', ['bright']);
}
error('ABCDEFGHIJKLMNOPQRSTUXWVYZ');

/* Example: function 1*/
function warning(text){
	tc.printWith(log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'white', 'yellow', ['bright']);
}
warning('ABCDEFGHIJKLMNOPQRSTUXWVYZ');

/* Example: function 2*/
function info(text){
	tc.printWith(log, 'ABCDEFGHIJKLMNOPQRSTUXWVYZ', 'white', 'cyan', ['bright']);
}
info('ABCDEFGHIJKLMNOPQRSTUXWVYZ');

tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');
tc.printRandom('ABCDEFGHIJKLMNOPQRSTUXWVYZ');