var hours = process.argv[2];
var minutes = process.argv[3];
var myDozensDict = {
    	arabic: ['0', '1', '2', '3', '4', '5'],
    	roman: ['-', 'X', 'XX', 'XXX', 'XL', 'L']
	};
var myUnitsDict = {
    	arabic: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    	roman: ['-', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
	};
var romanToASCIIDict = {
	roman: ['-', 'I', 'V', 'X', 'L', ':'],
	ASCII: [
	[[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', '@', '@', '@', ' '],
	[' ', ' ', '@', '@', '@', ' '],
	[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ']],

	[[' ', '@', '@', '@', '@', '@'], 
	[' ', ' ', ' ', '@', ' ', ' '], 
	[' ', ' ', ' ', '@', ' ', ' '], 
	[' ', ' ', ' ', '@', ' ', ' '], 
	[' ', ' ', ' ', '@', ' ', ' '], 
	[' ', '@', '@', '@', '@', '@']],

	[[' ', '@', ' ', ' ', ' ', '@'],
	[' ', '@', ' ', ' ', ' ', '@'],
	[' ', '@', ' ', ' ', ' ', '@'],
	[' ', '@', ' ', ' ', ' ', '@'],
	[' ', ' ', '@', ' ', '@', ' '],
	[' ', ' ', ' ', '@', ' ', ' ']],

	[[' ', '@', ' ', ' ', ' ', '@'],
	[' ', '@', ' ', ' ', ' ', '@'],
	[' ', ' ', '@', ' ', '@', ' '],
	[' ', ' ', '@', '@', '@', ' '],
	[' ', '@', ' ', ' ', ' ', '@'],
	[' ', '@', ' ', ' ', ' ', '@']], 

	[[' ', '@', ' ', ' ', ' ', ' '],
	[' ', '@', ' ', ' ', ' ', ' '],
	[' ', '@', ' ', ' ', ' ', ' '],
	[' ', '@', ' ', ' ', ' ', ' '],
	[' ', '@', ' ', ' ', ' ', ' '],
	[' ', '@', '@', '@', '@', '@']],

	[[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', '@', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', '@', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ']]
	]
};

function arabicToRomanNumber (dictionary, number) {
	if (number in dictionary.arabic){
		var index = dictionary.arabic.indexOf(number);
		return dictionary.roman[index];
	}	
	else{
		console.log('Время указано не верно');
		process.exit();
	}
}

function getRomanNumber(number) {
	if (process.argv.length != 4|| 0 > number.length || number.length > 2 ){
		console.log('Время указано не верно');
		process.exit();
	}
	else if (number.length == 1){
		var romanNumber = '';
		romanNumber += arabicToRomanNumber(myUnitsDict, number[0]);
		return romanNumber;
	}
	else if(number[0] == '0' && number[1] != '0'){
		var romanNumber = '';
		romanNumber += arabicToRomanNumber(myUnitsDict, number[1]);
		return romanNumber;
	}
	else if(number[0] != '0' && number[1] == '0'){
		var romanNumber = '';
		romanNumber += arabicToRomanNumber(myDozensDict, number[0]);
		return romanNumber;	
	}
	else{
		var romanNumber = '';
		romanNumber += arabicToRomanNumber(myDozensDict, number[0]);
		romanNumber += arabicToRomanNumber(myUnitsDict, number[1]);
		return romanNumber;
	}
}

function romanToASCII (romanTime) {
	var resultArray = [[], [], [], [], [], []];
	for (var i = 0, len = romanTime.length; i < len; i++) {
		var index = romanToASCIIDict.roman.indexOf(romanTime[i]);
		for (var line = 0, l = resultArray.length; line < l; line++){
			resultArray[line] = resultArray[line].concat(romanToASCIIDict.ASCII[index][line]);
		}
	};
	
	for (var i = 0, len = resultArray.length; i < len; i++) {
		var line = '';
		for (var index = 0, l = resultArray[0].length; index < l; index++){
			line += resultArray[i][index];
		}
		console.log(line);
	}
}

function getRomanTime(hours, minutes) {
	var romanTime = '';
	romanTime += getRomanNumber(hours);
	romanTime += ':';
	romanTime += getRomanNumber(minutes);
	return romanTime;
}

romanToASCII(getRomanTime(hours, minutes));