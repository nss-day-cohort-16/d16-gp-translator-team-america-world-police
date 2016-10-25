"use strict";

var Translator = (function(oldTranslator){
	var spanishWords = {
		"happy": "feliz",
		"independence": "de la independencia",
		"day": "dia"
z	};

	var translation = [];

	oldTranslator.translateToSpanish = function(english){
		var space = ' ';
		var englishArr = english.split(space);
		console.log(englishArr);

		function translate(englishWord){
			var spanish = spanishWords[englishWord.toLowerCase()];
			translation.push(spanish);
		}

		englishArr.forEach(translate);

		console.log("translation", translation);
		return translation.join(' ');
	}
	
	return oldTranslator;

})(Translator);