"use strict";

var Translator = (function(oldTranslator){

	var turkishPhrase = {
		"happy": "mutlu",
		"independence": "bagimsizlik",
		"day": "gunu"
	};
		oldTranslator.translateToTurkish = function(english){
			english = english.replace(/Happy|happy/g, turkishPhrase.happy);
			english = english.replace(/Independence|independence/g, turkishPhrase.independence);
			english = english.replace(/Day|day/g, turkishPhrase.day);
			console.log("test", oldTranslator);
			return english;
		};
	return oldTranslator;

})(Translator);


