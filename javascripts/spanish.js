"use strict";

var Translator = (function(oldTranslator){
	var spanishWords = {
		"happy": "feliz",
		"independence": "de la independencia",
		"day": "dia"
	};

	var translation = [];

	oldTranslator.translateToSpanish = function(english){
		var space = ' ';
		var englishArr = english.split(space);

		function translate(englishWord){
			var spanish = spanishWords[englishWord.toLowerCase()];
			translation.push(spanish);
		}

		englishArr.forEach(translate);
		return translation.join(' ');
	}

	return oldTranslator;

})(Translator);