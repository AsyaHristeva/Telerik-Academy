/* globals $ */

/*   
 Create a function that takes an id or DOM element and:
 If an id is provided, select the element
Finds all elements with class `button` or `content` within the provided element
 Change the content of all `.button` elements with "hide"
When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
Throws if:
The provided DOM element is non-existant
 id is either not a string or does not select any DOM element */

function solve(){
  return function (selector) {
	var element,
	    elementsClassButton,
		elementsClassContent,
		onButtonClick;
		
    if(typeof selector !='string' && !selector.tagName){
      throw new Error("The function's parameter is not a valid parameter");
    }
	
	if (typeof selector == 'string') {
      element = document.getElementById(selector);
    } else {
      element = selector;
    }
    
	elementsClassContent=element.querySelectorAll('.content');
	
	elementsClassButton=element.querySelectorAll('.button');
	
	[].forEach.call(elementsClassButton, function (button) {
		button.innerHTML = "hide"; 
		button.addEventListener("click", function() {  
           var next = this.nextElementSibling;

           while (next.className == 'button') {
				next = next.nextElementSibling;
           }
		   next = next.nextElementSibling;
			if (next.style.display == '') {
              this.innerHTML = 'show';
              next.style.display = "none";
           }
              else if (next.style.display == 'none') {
                 this.innerHTML = "hide";
                 next.style.display = '';
              }
	}, false);  
	}); 
  };
};

