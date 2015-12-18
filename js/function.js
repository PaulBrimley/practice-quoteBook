function caseSwitcher(str) {
	for(var i = 0; i < str.length; i++) {
		if(str.charAt(i).toUpperCase() === str.charAt(i)) {
			var character = str.charAt(i).toLowerCase();
			str = str.slice(0, i) + character + str.slice(i + 1)
		}
		else {
			var character = str.charAt(i).toUpperCase();
			str = str.slice(0, i) + character + str.slice(i + 1)
		}
	}
	return str;
}

caseSwitcher('Hello World');