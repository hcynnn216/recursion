// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === undefined) { return 'undefined';}
  if (obj === null) { return 'null';}
  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }
  else if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return obj.toString();
  }
  else if (Array.isArray(obj)) {
  	if (obj.length === 0) { return '[]';}
  	var arr = [];
  	for (var i = 0; i < obj.length; i++) {
		if (obj[i] === undefined) { arr.push(stringifyJSON(null)); }
		else { arr.push(stringifyJSON(obj[i])); }
  	}
  	return '[' + arr.join() + ']';
  }
  else {
  	if (Object.keys(obj).length === 0) { return '{}';}
  	var arr = [];
  	for (var key in obj) {
  		if (key === undefined || obj[key] === undefined || obj[key] === {} || key === null ) { 
  			delete key;
  		}
  		else { 
  			arr.push('"' + key + '":' + stringifyJSON(obj[key]))
  		};
  	}
  	return '{' + arr.join() + '}';
  }
};
