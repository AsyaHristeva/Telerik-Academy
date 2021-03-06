/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents
* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/
    
module.exports = function () {

  return function (idOrDomElement,contents) {
    var element,
        i,
        len;
		
    if(typeof idOrDomElement !='string' && !idOrDomElement.tagName){
      throw new Error('The first parameter is not a valid parameter');
    }
    
    if(!contents||contents.some(function(item){
      return typeof item != 'string' && typeof item != 'number';
    	})){
      	   throw new Error('The array should contains only strings and numbers');
    }
	
    if (typeof idOrDomElement  == 'string') {
      element = document.getElementById(idOrDomElement);
      } else {
           element = idOrDomElement;
    }

    element.innerHTML='';
    for (i=0,len=contents.length; i<len;i+=1) {
        element.innerHTML += '<div>'+contents[i]+'</div>';
    }
  };
};
