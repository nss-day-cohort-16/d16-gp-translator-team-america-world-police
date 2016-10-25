"use strict";

var Translator = (function(oldTranslator){
	var spanishWords = {
		"happy": "feliz",
		"independence": "de la independencia",
		"day": "dia"
	};

	var translation = [];

	oldTranslator.translateToSpanish = function(english){
		var spanishWord = spanishWords[english];
		console.log("spanishWord", spanishWord);



	};
	
	return oldTranslator;

})(Translator);