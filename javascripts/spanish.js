"use strict";

var Translator = (function(oldTranslator){
	var spanishWords = {
		"happy": "feliz",
		"independence": "de la independencia",
		"day": "dia"
	};

	oldTranslator.translateToSpanish = function(englishWord){
		var spanishWord = spanishWords[englishWord];
		console.log("spanishWord", spanishWord);
		oldTranslator.translate(spanishWord);
	};

	return oldTranslator;

})(Translator);
