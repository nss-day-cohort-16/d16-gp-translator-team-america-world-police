"use strict";

var Translator = (function(oldTranslator){
	var germanKey = {
		"Happy": "Glücklich",
		"Independence": "Unabhängigkeit",
		"Day": "Tag" 
	}


	oldTranslator.translateToGerman = function(inputPhrase){
		inputPhrase.replace("Happy Independence Day", "Fröhlichen Unabhängigkeitstag");
		inputPhrase.replace(/Happy|happy/g, "Glücklich");
		inputPhrase.replace(/Independence|Independence/g, "unabhängigkeit");
		inputPhrase.replace(/Day|day/g, "tag");

			return inputPhrase;
		};
	return oldTranslator;

})(Translator);