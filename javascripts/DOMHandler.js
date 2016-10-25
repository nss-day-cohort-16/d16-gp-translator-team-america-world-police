"use strict";

function outputTranslation(translation){
	document.getElementById("output").innerHTML = translation;
}



document.getElementById("translate").addEventListener("click", function(){
	var englishString = (document.getElementById("input").value);

	if(document.getElementById("french").checked){
		outputTranslation(Translator.translateToFrench(englishString));
	} else if(document.getElementById("spanish").checked){
		outputTranslation(Translator.translateToSpanish(englishString));
	} else if (document.getElementById("german").checked){
		outputTranslation(Translator.translateToGerman(englishString));
	} else if (document.getElementById("turkish").checked){
		outputTranslation(Translator.translateToTurkish(englishString));
	} else {
		document.getElementById("output").innerHTML = "Please select a language.";
	}
});



