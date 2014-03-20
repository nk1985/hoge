		jQuery.event.add(window, "load", function(){
			var select = '#amazon_box img';  
			var fixw = 150;       
			
			$(select).each(function(){
				var w = $(this).width();
				if (w >= fixw) {
					$(this).width(fixw);
				}
				
			});
		});
