"use strict";

var Translator = (function(oldTranslator){
	var frenchIndependence = {
		"happy": "joyeux",
		"independence": "de l'Indépendance",
		"day": "Jour"
	};

		oldTranslator.translateToFrench = function(phraseInput){
			phraseInput = phraseInput.replace(/Happy|happy/g , frenchIndependence.happy);
			phraseInput = phraseInput.replace(/Independence|independence/g , frenchIndependence.independence);
			phraseInput = phraseInput.replace(/Day|day/g , frenchIndependence.day);

				return phraseInput;
		};
	

	return oldTranslator;

})(Translator);






