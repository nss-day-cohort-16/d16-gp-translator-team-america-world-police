"use strict";

var Translator = (function(){
	var translatedPhrase;

	return {
		translate: function(foreignWord){
			console.log("foreignWord", foreignWord);
			translatedPhrase = foreignWord(english);
		}
	};
})();

