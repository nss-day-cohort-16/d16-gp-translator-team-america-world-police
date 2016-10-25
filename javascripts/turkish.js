"use strict";

var Translator = (function(oldTranslator){
	var turkishPhrase = {
		"happy": "mutlu",
		"independence": "bagimsizlik",
		"day": "gunu"
	};
		oldTranslator.translateToTurkish = function(english){
			english = english.replace(/Happy|happy/g, "mutlu");
			english = english.replace(/Independence|independence/g, "bagimsizlik");
			english = english.replace(/Day|day/g, "gunu");
			console.log("test", oldTranslator);
			return english;
		};
	return oldTranslator;

})(Translator);

