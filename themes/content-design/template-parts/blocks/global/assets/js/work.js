var pagex = 0;
var pagey = 0;

$(document).ready(function(){
	addeventlistener();
	var swiper = {}
	$('.mySwiper').each(function(){
		swiper[$(this).attr('id')] = new Swiper("#" + $(this).attr('id'), {
        direction: "vertical",
        buttons:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        speed:1200
      });
	})
	



	$('.swiper-button-next').click(function(){
		let id = $(this).parents('.mySwiper').eq(0).attr('id')
		swiper[id].slideNext()
	})
	function controlScroll(event)
    {
    	var sliders = $(".swiper-container");
    	let slide = false;
    	 let top = $(document).scrollTop();
    	var st = window.pageYOffset || document.documentElement.scrollTop;

    	sliders.each(function(){
    		var clientRect = this.getBoundingClientRect();
    		let id = $(this).attr('id')	
    		if(clientRect.top >= 0 && clientRect.bottom <= window.innerHeight + 0)
    		{
				if(pagex > clientRect.left && pagex < clientRect.right && pagey < clientRect.bottom + top && pagey > clientRect.top + top)
	    		{
	    			let length = $(this).find('.swiper-slide').length;
	    			console.log(length)
	    			if(event.deltaY < 0 && getindex(this) != 0)
	    			{
	    				swiper[id].slidePrev();
	    				slide = true;
	    			}
	    			else if(event.deltaY >= 0 && getindex(this) != length - 1)
	    			{
	    				swiper[id].slideNext();
	    				slide = true;
	    			}
	    			
	    		}
    		}

    		
    	})

    	console.log(slide)    
    	if(slide)
    	{
    		event.preventDefault();
    		return false;
    	}
    }

    function getindex(element)
    {
    	let curindex = 0;
    	$(element).find('.swiper-slide').each(function(index){
    		if($(this).hasClass('swiper-slide-active'))
    		{
    			curindex = index;
    		}
    	})

    	return curindex
    }

 	function addeventlistener()
 	{
 		var wheelOpt = { passive: false };
		var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
 		window.addEventListener('DOMMouseScroll', controlScroll, false); // older FF
		window.addEventListener(wheelEvent, controlScroll, wheelOpt); // modern desktop
 	}

	$('.toggle').click(function(){
		$(this).parent().find('.info').eq(0).toggle();
		$(this).parent().find('.content').eq(0).toggle();
		if($(this).hasClass('fa-angle-down'))
		{
			$(this).removeClass('fa-angle-down');
			$(this).addClass('fa-angle-up');
		}
		else
		{
			$(this).removeClass('fa-angle-up');
			$(this).addClass('fa-angle-down');	
		}
	})	
})

$(document).mousemove(function(event){
	pagex = event.pageX;
	pagey = event.pageY;
})