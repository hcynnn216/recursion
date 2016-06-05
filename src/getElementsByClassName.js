// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClass = function(className) {
  // your code here
  	var classElements = [];
	function getClassElements (elementsNode) {		
		classList = elementsNode.classList;
		if (classList === null || classList === undefined) {
			if(!elementsNode.hasChildNodes()) {
			return classElements;
			}
			else {
				var childrens = elementsNode.childNodes;
				for (var i = 0; i < childrens.length; i++) {
				getClassElements(childrens[i]);		//Call the inner function getClassElements recursively 
				}									//to get all the child element's classes 
			}

		}
		else {
			for (var i = 0; i < classList.length; i++) {
				if (classList[i] === className){
					classElements.push(elementsNode);
				}
			}	
		}
	};
	getClassElements(document.body);
	return classElements;
};
