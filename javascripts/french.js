"use strict";

var Translator = (function(oldTranslator){
	var frenchIndependence = {
		"happy": "joyeux",
		"independence": "de l'Indépendance",
		"day": "Jour"
	};

		oldTranslator.translateToFrench = function(phraseInput){
			phraseInput = phraseInput.replace( /Happy | happy/g , "joyeux" );
			phraseInput = phraseInput.replace( /Independence | independence/g , "de l'Indépendance" );
			phraseInput = phraseInput.replace( /Day | day/g , "Jour" );

				return phraseInput;
		};
	

	return oldTranslator;

})(Translator);






