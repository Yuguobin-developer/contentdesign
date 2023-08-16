window.onload = function() {
    if(window.location.hash) {
       elmnt = document.getElementById(window.location.hash.substring(1));
      elmnt.scrollIntoView(true);
    }
}

var keys = { 38: 1,  40: 1};

jQuery(document).ready(function($){
    let enable_click = true;
    var lastscrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var pagex = 0;
    var pagey = 0;

    if($('.search-field').val() == '') {
        $('.cancel-icon').css('display', 'none');
    }

    $('.algolia-autocomplete').on('click','a',function(){

        var keyword = $(this).parent().find('em').eq(0).html();

        var text = $(this).parent().text();

        var textarray = text.split(' ');

        for(let item in textarray)
        {
            if(textarray[item].includes(keyword))
            {
                keyword = textarray[item];
            }
        }

        var query = $('.search-field').val();

        var href = $(this).attr('href');

        var url = new URL(href)
        $(this).attr('href',url.pathname)
        window.location.href = url.pathname;
        $.ajax({
            url:"/wp-admin/admin-ajax.php",
            type:'POST',
            data:{url:url.pathname,keyword:keyword,action:"add_keyword",query:query},
            success:function(res)
            {}
        })
    })
    
    $('.menu-item i').click(function(e){
        e.preventDefault()
        let parent = $(this).parents('.menu-item').eq(0)
        if(parent.hasClass('current-menu-item'))
        {
            parent.removeClass('current-menu-item')
            parent.removeClass('current_page_item')
        }
        else
        {
            $('.menu-item').each(function(){
                if($(this).hasClass('current-menu-item'))
                {
                    $(this).removeClass('current-menu-item')
                }

                if($(this).hasClass('current_page_item'))
                {
                    $(this).removeClass('current_page_item')
                }
            })

            parent.addClass('current-menu-item')
            parent.addClass('current_page_item')
        }
    })

    $('.search-field').change(function(){
        var keyword = $(this).val();
        var query = $(this).val();


        if($('.aa-empty').css('display') != 'none')
        {
            $.ajax({
                url:"/wp-admin/admin-ajax.php",
                type:"POST",
                data:{url:'noresult',keyword:keyword,action:'add_keyword'},
                success:function(res){
                    
                }
            })
        }
    })

    var element = ['h1','h2','h3','h4','h5'];
    element.map((item)=>{
        $(item).each(function(){
            let id = $(this).attr('id');
            if(id && id.indexOf('h-') > -1)
            {
                id = id.split('h-')[1];
                $(this).attr('id',id);              
            }
        })
    })

    function scrollcontrol()
    {   
        let top = -1;
        let idselect = "";
        if($('.wp-block-navigation').length == 0)
        {
            return ;
        }

        if(window.pageYOffset > 80)
        {
            $('.wp-block-navigation').addClass('fixed')
        }

        $('.wp-block-navigation-item__content').each(function(){

            $(this).parent().removeClass('mylink');
            let id = $(this).attr('href');
            if(id[0] == '#')
            {
                if($(id).length)
                {
                    var viewportOffset = $(id)[0].getBoundingClientRect();
                    var viewportwindow = document.body.getBoundingClientRect();
                    if(viewportOffset.top - viewportwindow.top <= window.pageYOffset + 8)
                    {
                        if(viewportOffset.top > top || top === -1)
                        {
                            top = viewportOffset.top;
                            idselect = id;    
                        }
                        
                    }
                }
            }
            
        })

        console.log(idselect)

        if(idselect)
        {
            $('a[href="' + idselect + '"]').parent().addClass('mylink');
        }

        let enable = false;
        $('.alignfull').each(function(){

            var viewportoffset = $('.wp-block-navigation')[0].getBoundingClientRect();
            var viewportfull = this.getBoundingClientRect();


            if(viewportfull.right > viewportoffset.left)
            {
                if((viewportoffset.bottom >= viewportfull.top && viewportoffset.bottom <= viewportfull.bottom) || (viewportoffset.top >= viewportfull.top && viewportoffset.top <= viewportfull.bottom) || (viewportfull.top > viewportoffset.top && viewportfull.top < viewportoffset.bottom))
                {
                    enable = true;
                    //console.log('enabled')  
                    if(!$('.wp-block-navigation').css('opacity') || $('.wp-block-navigation').css('opacity') != 0)
                    {
                        $('.wp-block-navigation').animate({opacity:0},100); 
                    }
                }   
            }

        })
        if(!enable)
        {
            $('.wp-block-navigation').css('opacity',1);
        }
    }

    scrollcontrol()

    $(document).mousemove(function(event){
        pagex = event.pageX;
        pagey = event.pageY;
    })

    function getcountslider(element)
    {
        let index = 0;
        $(element).find('.slick-slide').each(function(){
            if(!$(this).hasClass('slick-cloned'))
            {
                index ++;
            }
        })

        return index;
    }

    function controlScrollEvent(event)
    {
        if(keys[event.keyCode])
        {
            var sliders = $(".cwp-block-slider-main").not(".cwp_edit");
            let slide = false;
             let top = $(document).scrollTop();
            var st = window.pageYOffset || document.documentElement.scrollTop;

            sliders.each(function(){
                var clientRect = this.getBoundingClientRect();  
                if(clientRect.top > 0 && clientRect.bottom < window.innerHeight)
                {
                    if(pagex > clientRect.left && pagex < clientRect.right && pagey < clientRect.bottom + top && pagey > clientRect.top + top)
                    {
                        let length = getcountslider(this) - 1;
                        if(event.keyCode == 38 && $('.slick-current').attr('data-slick-index') != 0)
                        {
                            $(this).slick('slickPrev');
                            slide = true;
                        }
                        else if(event.keyCode == 40 && $('.slick-current').attr('data-slick-index') != length)
                        {
                            $(this).slick('slickNext');
                            slide = true;
                        }
                        
                    }
                }

                
            })
            lastscrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if(slide)
            {
                event.preventDefault();
                return false;
            }
        }
    }

    function controlScroll(event)
    {
        var sliders = $(".cwp-block-slider-main").not(".cwp_edit");
        let slide = false;
         let top = $(document).scrollTop();
        var st = window.pageYOffset || document.documentElement.scrollTop;

        sliders.each(function(){
            var clientRect = this.getBoundingClientRect();  
            if(clientRect.top > 0 && clientRect.bottom < window.innerHeight)
            {
                if(pagex > clientRect.left && pagex < clientRect.right && pagey < clientRect.bottom + top && pagey > clientRect.top + top)
                {
                    let length = getcountslider(this) - 1;
                    if(event.deltaY < 0 && $('.slick-current').attr('data-slick-index') != 0)
                    {
                        $(this).slick('slickPrev');
                        slide = true;
                    }
                    else if(event.deltaY >= 0 && $('.slick-current').attr('data-slick-index') != length)
                    {
                        $(this).slick('slickNext');
                        slide = true;
                    }
                    
                }
            }

            
        })
        lastscrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if(slide)
        {
            event.preventDefault();
            return false;
        }
    }

    
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    var supportsPassive = true;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
      }));
    } catch(e) {}
    addeventlistener();
    function addeventlistener()
    {
        var wheelOpt = { passive: false };
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
        window.addEventListener('DOMMouseScroll', controlScroll, false); // older FF
        window.addEventListener(wheelEvent, controlScroll, wheelOpt); // modern desktop
        window.addEventListener('keydown', controlScrollEvent, false);
    }

    $(window).scroll(function(event){
        // var event = event || window.event;
        // let top = $(document).scrollTop();
        // var sliders = $(".cwp-block-slider-main").not(".cwp_edit");
        // let slide = false;
        // var st = window.pageYOffset || document.documentElement.scrollTop;
        // sliders.each(function(){
        //  var clientRect = this.getBoundingClientRect();                                              
        //  if(pagex > clientRect.left && pagex < clientRect.right && pagey < clientRect.bottom + top && pagey > clientRect.top + top)
        //  {
        //      if(st > lastscrollTop)
        //      {
        //          $(this).slick('slickPrev');
        //      }
        //      else
        //      {
        //          $(this).slick('slickNext');
        //      }
        //      slide = true;
        //  }
        // })

        // lastscrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // if(slide)
        // {
        //  event.preventDefault();
        //  return false;
        // }

        scrollcontrol()
    })

    function showalert(evt)
    {
         var x = document.getElementById("snackbar");
         $(x).css('left',evt.clientX + 70);
         $(x).css('top',evt.clientY - 58);
          // Add the "show" class to DIV
          x.className = "show";



          // After 3 seconds, remove the show class from DIV
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    $('h2').each(function(){
        let id = $(this).prev().attr('id');
        
        if(!id)
        {
            id = $(this).attr('id');
        }

        if(id)
        {
           $(this).append('<span class="link"></span>');
        }
        
    })

    $('h3').each(function(){
        let id = $(this).prev().attr('id');
            
        if(!id)
        {
            id = $(this).attr('id');
        }
        
        
        if(id)
        {
           $(this).append('<span class="link"></span>');
        }
    })

    $(document).on('click','.link',function(evt){
        let id = $(this).parent().prev().attr('id');
        if(!enable_click)
        {
            enable_click = true;
            return;
        }
        if(!id)
        {
            id = $(this).parent().attr('id');
        }
        //console.log(window.location.origin + window.location.pathname + '#' + id)
        if(id)
        {
            navigator.clipboard.writeText(window.location.origin + window.location.pathname + '#' + id).then(function() {
              
              showalert(evt)
            }, function(err) {
              console.error('Async: Could not copy text: ', err);
            });
        }
    })

    

    $('.wp-block-navigation-link__content').click(function(){
        enable_click = false;
    })

    $('.cancel-icon').click(function(){
        $('.agoria-search').val('');
    })

    $('.form-cancel').click(function(){
        // $('.designtoggle').removeClass('open')
        // $('.designtoggle-nav').removeClass('open')
        // $('.designtoggle').css('width', '0%');   
        window.location.href = "http://localhost:81/contentdesign";     
    })

    $('#input_3_14').change(function(e){
        //console.log(e.target.files[0]['name']);
        //alert('Uploaded ' + e.target.files[0]['name'] + ' Successfully');
        $('#field_3_14 .gfield_label').append('</br>' + '<span style="margin-left:-20px;">Uploaded </span>' + e.target.files[0]['name']);
    })
    // $(document).on('click', '.give_feedback', function(){
    //     let text = $(this).text();
    //     if(text.split('Get Feedback').length > 0)
    //     {
    //         if($('.designtoggle').hasClass('open'))
    //         {
    //             $('.designtoggle').removeClass('open')
    //             $('.designtoggle-nav').removeClass('open')
    //             $('.designtoggle').css('width', '0%');
    //         }
    //         else
    //         {
    //             $('.designtoggle').addClass('open');
    //             $('.designtoggle-nav').addClass('open');
    //             $('.designtoggle').css('width', 'calc(100% - 278px)');
    //             $('.designtoggle').css('height', 'calc(100%)');
    //             $('.designtoggle').css('z-index', '11');
    //             //$('.designtoggle').css('transition', 'left 0.25s ease-in-out');
    //         }
    //     }
    // })
   
    if (location.href=="http://localhost:81/contentdesign/give-feedback/"){
        let text = $(this).text();
        if(text.split('Get Feedback').length > 0)
        {
            if($('.designtoggle').hasClass('open'))
            {
                $('.designtoggle').removeClass('open')
                $('.designtoggle-nav').removeClass('open')
                $('.designtoggle').css('width', '0%');
            }
            else
            {
                $('.designtoggle').addClass('open');
                $('.designtoggle-nav').addClass('open');
                $('.designtoggle').css('width', 'calc(100% - 278px)');
                $('.designtoggle').css('height', 'calc(100%)');
                $('.designtoggle').css('z-index', '11');
                //$('.designtoggle').css('transition', 'left 0.25s ease-in-out');
            }
        }
    }
    
//  $('.mylogin').attr('href', `/wp-login.php?redirect_to=${window.location.href}`);
//      $('.mylogin').click(function(){
//         window.sessionStorage.setItem('url_ref',window.location.href)
//     })

//     const url = window.sessionStorage.getItem('url_ref')

//     if(url && (window.location.pathname === '' || window.location.pathname === '/') ) {
//         window.location.href = url;
//     }
//     else {
//         window.sessionStorage.removeItem('url_ref')
//     }
    
    $('#gform_submit_button_3').attr('disabled', true);

    $('#input_3_1 input').change(function(){
        // if(this.checked) {
        //     $('#gform_submit_button_3').attr('disabled', 'false');
        // }
        $('#input_3_1 input').each(function(){
            if(this.checked) {
                $('#gform_submit_button_3').attr('disabled', false);
            }
        })
    })  
        $('.mylogin').attr('href', `/wp-login.php`);

    $('.mylogin').click(function(event){
        $.ajax({
            url:'/wp-admin/admin-ajax.php',
            type:'POST',
            data:{
                action:'add_redirect',
                url:window.location.href
            },
            success:function(res) {
                
            }
        })
        
    })

    $('.pin').append('<img src="http://cdesignstage.wpengine.com/wp-content/uploads/2023/08/pin.svg">');
    
    $(".wp-block-content-design-attributes").attr("aria-label", "Resources");
    $(".wp-block-content-design-do").attr("aria-label", "Do");
    $(".wp-block-content-design-do img").attr("alt", "Best practice");
    $(".wp-block-content-design-dont img").attr("alt", "Avoid");
    $("#return-to-top img").attr("alt", "Go to top of page");
    $(".wp-block-content-design-dont").attr("aria-label", "Dont");
    $(".wp-block-content-design-examples").attr("aria-label", "Examples");
    $(".wp-block-advgb-accordions").attr("aria-label", "Collapse");
    $("#menu-primary-navigation-menu").attr("tabindex", "0");
    $(".gchoice").attr("tabindex", "0");
    $(".gchoice input").attr("tabindex", "0");
    $(".give_feedback").attr("tabindex", "0");
    $(".advgb-accordion-header-title").attr("tabindex", "0");
    $(".suggestion-link").attr("tabindex", "0");
    $(".form-cancel").attr("tabindex", "0");
    
    //$('.search-field').on('keydown', function() {
    $(document).on("keydown", ".search-field", function() {
    });
    $('.anim-section .wrapper').addClass('alignfull');

    var mediaQuery = window.matchMedia('(min-width: 1024px)');
    if (mediaQuery.matches) {
        if($('.entry-header').height() == '171.188') {
            $(this).find('.wp-block-navigation').attr('style', 'margin-top:243px');
        }else {
            $(this).find('.wp-block-navigation').attr('style', 'margin-top:323px');
        }
    }

    if (mediaQuery.matches) {
        if($('.wp-block-navigation').next()[0].tagName === 'H3'){
            if($('.entry-header').height() == '171.188') {
                $(this).find('.wp-block-navigation').attr('style', 'margin-top:287px');
            }else {
                $(this).find('.wp-block-navigation').attr('style', 'margin-top:360px');
            }
        }
    }
})

