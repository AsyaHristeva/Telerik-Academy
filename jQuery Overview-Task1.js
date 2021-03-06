function solve() {
  return function (selector, count) {
	    var	index;
		
		if (count<1||count%1!=0) {
			throw new Error('Count must be a positive integer');
		}
		
		$(selector).prepend('<ul class="items-list"></ul>');
		
		for (index=0;index<count;index+=1) {
			$("<li class='list-item'>List item #"+index+"</li>").appendTo('.items-list');
		}
  };
};
