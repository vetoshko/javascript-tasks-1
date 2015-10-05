var hours = parseInt(process.argv[2]);
var minutes = parseInt(process.argv[3]);

var myDozensDict = ['-', 'X', 'XX', 'XXX', 'XL', 'L']
var myUnitsDict = ['-', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
var romanToASCIIDict = {
	roman: ['-', 'I', 'V', 'X', 'L', ':'],
	ASCII: [
	['      ', '      ', '  @@@ ', '  @@@ ', '      ', '      '],
	[' @@@@@', '   @  ', '   @  ', '   @  ', '   @  ', ' @@@@@'],
	[' @   @', ' @   @', ' @   @', ' @   @', '  @ @ ', '   @  '],
	[' @   @', ' @   @', '  @ @ ', '  @@@ ', ' @   @', ' @   @'],
	[' @    ', ' @    ', ' @    ', ' @    ', ' @    ', ' @@@@@'],
	['      ', '      ', '   @  ', '      ', '   @  ', '      ']
	]
};

function getRomanNumber(number) {
	if (number.toString().length == 1) {
		var romanNumber = '';
		romanNumber += myUnitsDict[number];
		return romanNumber;
	}
	else if(number.toString()[0] != 0 && number.toString()[1] == 0) {
		var romanNumber = '';
		romanNumber += myDozensDict[number.toString()[0]];
		return romanNumber;	
	}
	else {
		var romanNumber = '';
		romanNumber += myDozensDict[number.toString()[0]];
		romanNumber += myUnitsDict[number.toString()[1]];
		return romanNumber;
	}
}

function romanToASCII (romanTime) {
	var resultArray = ['', '', '', '', '', ''];
	for (var i = 0, len = romanTime.length; i < len; i++) {
		var index = romanToASCIIDict.roman.indexOf(romanTime[i]);
		for (var line = 0, l = resultArray.length; line < l; line++) {
			resultArray[line] = resultArray[line] + romanToASCIIDict.ASCII[index][line] ;
		}
	};
	
	for (var i = 0, len = resultArray.length; i < len; i++) {
		var line = '';
		for (var index = 0, l = resultArray[0].length; index < l; index++) {
			line += resultArray[i][index];
		}
		console.log(line);
	}
}

function ifDataCorrect () {
	return (typeof(hours) != NaN && typeof(minutes) != NaN
		&& hours > -1 && hours < 25 && minutes > -1 && minutes < 60)
}
function getRomanTime(hours, minutes) {
	if (ifDataCorrect()) {
		var romanTime = '';
		romanTime += getRomanNumber(hours);
		romanTime += ':';
		romanTime += getRomanNumber(minutes);
		return romanTime;
	}
	else {
		console.log('Время указано не верно');
		process.exit(1);
	}
}

romanToASCII(getRomanTime(hours, minutes));
