function solve(){
  return function(selector){
	 var index,
	     selectors=$(selector).children(),
	     len=selectors.length;
	  
        $(selector).attr('id', 'the-select');
	$('<div class="dropdown-list"></div>').appendTo('body');
	$(selector).appendTo('.dropdown-list')
	.css("display", "none");
	$('<div class="current" data-value="">Option 1</div>')
	.appendTo('.dropdown-list');
	$('<div class="options-container" style="position: absolute; display: none">')
	.appendTo('.dropdown-list');
	
	for(index=0;index<len;index+=1) {  
		$(' <div class="dropdown-item" data-value="'+
		(index-1)+'" data-index = "'+index+'">'+selectors.eq(index).text()+'</div>')
		.appendTo('.options-container');
	}  
	
	$('.current').click(function(){
		$('.options-container').show();
	});
	 
	$('.dropdown-item').click(function(){
	$('.current').text($(this).text());
	$('.options-container').hide();
	});
	
  };
}
