console.log('debug in the console of your index.html file');

// define loop here:


// we've written filterBy for you here:
var filterBy = function(collection, predicate) {
	var result = [];
	loop(collection, function(elem) {
		if (predicate(elem)) {
			result.push(elem);
		}
	});
	return result;
};

// use filterBy on the `numbers collection` to return an array of odd numbers
var numbers = [22, 25, 78, 61, 36, 981, 313];

// use filterBy on the `numbers collection` to return an array of numbers that are smaller
// than the threshold.
var threshold = 75;


// use filterBy on the `people collection` to return an array of objects who's age is between 27 and 35.
var people = [{name: "Albrey", age: 25}, {name: "Dion", age: 26}, {name: "Kmack", age: 28}, {name: "Kanye", age: 32}, {name: "Beyonce", age: 39}, {name: "Jay-z", age: 42}];


//I know I need to create transform, then from there I would create an if statement with an module % 2 ===0, somehow I would set it to be general. I would use the .push method to push the new odd numbers into an array, then return that array. 
//Next, console.log that function to see the results 
//for the filterBy, I would need to again loop through the people object and set and if else statement of ages between 27 and 35. 