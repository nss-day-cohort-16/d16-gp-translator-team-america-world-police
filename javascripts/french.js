"use strict";

var Translator = (function(oldTranslator){
	var frenchIndependence = {
		"happy": "joyeux",
		"independence": "de l'Indépendance",
		"day": "Jour"
	}


	return {
		translateToFrench: function(translateFromEnglish){
			return frenchIndependence
		}
	};


})(Translator);






