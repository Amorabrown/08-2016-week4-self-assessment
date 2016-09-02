// define loop here
var loop = function (collection, callback){
	if (typeOf collection === "object") {
		for (var key in Jon) {
			callback (collection[key], key)
		}
	}
}
console.log(loop)
// define extendObj here
var extendObj = function(value, object2){
	loop(collection, function(object){
		return jon;
	})
}

// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above