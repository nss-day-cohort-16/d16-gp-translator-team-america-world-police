"use strict";

var Translator = (function(oldTranslator){
	var germanKey = {
		"Happy": "Glücklich",
		"Independence": "Unabhängigkeit",
		"Day": "Tag" 
	}


	oldTranslator.translateToGerman = function(inputPhrase){
		inputPhrase = inputPhrase.replace("Happy Independence Day", "Frohlichen Unabhangigkeitstag");
		inputPhrase = inputPhrase.replace(/Happy|happy/g, "Glucklich");
		inputPhrase = inputPhrase.replace(/Independence|Independence/g, "unabhangigkeit");
		inputPhrase = inputPhrase.replace(/Day|day/g, "tag");

			return inputPhrase;
		};
	return oldTranslator;

})(Translator);