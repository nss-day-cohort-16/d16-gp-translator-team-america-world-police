"use strict";

var Translator = (function(oldTranslator){
	var germanKey = {
		"Happy": "Glücklich",
		"Independence": "Unabhängigkeit",
		"Day": "Tag" 
	}

	oldTranslator.translateToGerman = function(inputPhrase){
		inputPhrase = inputPhrase.replace("Happy", germanKey.Happy);
		inputPhrase = inputPhrase.replace("happy", germanKey.Happy);
		inputPhrase = inputPhrase.replace("Independence", germanKey.Independence);
		inputPhrase = inputPhrase.replace("independence", germanKey.Independence);
		inputPhrase = inputPhrase.replace("Day", germanKey.Day);
		inputPhrase = inputPhrase.replace("day", germanKey.Day);
		return inputPhrase;
	}

	return oldTranslator;

})(Translator);