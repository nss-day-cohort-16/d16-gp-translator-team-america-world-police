"use strict";

var Translator = (function(oldTranslator){
	var turkishPhrase = {
		"happy": "mutlu",
		"independence": "bagimsizlik",
		"day": "gunu"
	};

		return {


		translateToTurkish: function(english){
			return turkishPhrase[english];
		}


	};
})(Translator);