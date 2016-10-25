var englishString;

document.getElementById("translate").addEventListener("click", function(){
	console.log("Translator", Translator);

	var englishString = (document.getElementById("input").value).toLowerCase();
	console.log(englishString);
		

	if(document.getElementById("spanish").checked){
		Translator.translateToSpanish(englishString)

	}
});

