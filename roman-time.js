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
	if (number < 10) {
		var romanNumber = '';
		romanNumber += myUnitsDict[number];
		return romanNumber;
	}
	else if(number / 10 != 0 && number % 10 == 0) {
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
	for (var symbol = 0, len = romanTime.length; symbol < len; symbol++) {
		var index = romanToASCIIDict.roman.indexOf(romanTime[symbol]);
		for (var line = 0, l = resultArray.length; line < l; line++) {
			resultArray[line] = resultArray[line] + romanToASCIIDict.ASCII[index][line] ;
		}
	};
	
	for (var resultLine = 0, len = resultArray.length; resultLine < len; resultLine++) {
		var line = '';
		for (var index = 0, l = resultArray[0].length; index < l; index++) {
			line += resultArray[resultLine][index];
		}
		console.log(line);
	}
}

function isDataCorrect () {
	return (!isNaN(hours) && !isNaN(minutes)
		&& hours > -1 && hours < 25 && minutes > -1 && minutes < 60)
}
function getRomanTime(hours, minutes) {
	if (isDataCorrect()) {
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
