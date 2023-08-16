// jQuery(document).ready(function () {
  (function ($) {
    $(function () {
      toggleSearchBox();
      disableSearchReturnKey();
    });
  const scrollTo = (offset, duration = 500) => {
    jQuery('body,html').animate({
      scrollTop : offset                      // Scroll to top of body
    }, duration)
  }
  // Chevron scroll to top
  // ===== Scroll to Top ====
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(500);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(1000);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    scrollTo(0, 500)
    const href = String( document.location.href ).replace( /#[a-z\-A-Z]*/, "" );
    console.log(href)
    window.history.pushState({},"", href);

  });
  const links = jQuery('.scroll-to-link')
    .on('click', e => {
      // e.preventDefault();
      const name = '#scroll-to-' + jQuery(e.target).attr('href').replace('#', '');
      console.log(name)
      scrollTo(jQuery(name).offset().top, 500)
      // return false;
    })
  // let pageLoaded = false;
  // const lis = jQuery('.primary-menu-class > ul > li');
  // lis.each(m => {
  //   const menu = jQuery(lis[m]);
  //   if (!pageLoaded && ( menu.hasClass('current_page_parent') || menu.hasClass('current_page_item') )) {
  //     menu.find('> ul').css('display', 'block');
  //     menu.find('> a > i').addClass('open');
  //     pageLoaded = true;
  //   }
  // });
  // const menus = jQuery('.primary-menu-class > ul > li > a > i');
  // menus.click(e => {
  //   e.preventDefault();
  //   const i = jQuery(e.target);
  //   i.parents('li')
  //     .find('> ul')
  //     .slideToggle();
  //   if (i.hasClass('open')) {
  //     i.removeClass('open');
  //     return;
  //   }
  //   i.addClass('open');
  // });
 $('.search-field-desk').addClass('active');
  function toggleSearchBox() {
    $('.search-field').on('click', function (e) {
      $(this).addClass('active');
      $('.my-header .mobile-logo').css('display', 'none');
      $('.my-header .desk-logo').css('display', 'flex');
    }).on('blur', function (e) {
      if ($(this).val() == '') {
        $(this).removeClass('active');
      $('.my-header .mobile-logo').css('display', 'flex');
      $('.my-header .desk-logo').css('display', 'none');
      }
    });
  }
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 330) {
		$('.content-design-navbar').addClass('fixed');
	   }
	   else {
		$('.content-design-navbar').removeClass('fixed');
	   }
	});
  function disableSearchReturnKey() {
    $('.search-field').on('keypress', function (e) {
      if (e.which === 13)
        return false
    });
  }
  $('.home .my_blog1').parent().find('.wp-block-content-design-post:before').eq(0).css('width', '42.5% !important');
})(jQuery);
// });
