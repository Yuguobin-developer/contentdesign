<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function( $ ){
     var mediaQuery = window.matchMedia('(min-width: 1024px)');
    if (mediaQuery.matches) {
        if ($('.entry-header').height() > "160" && $('.entry-header').height() < "181.188") {
			console.log($('.entry-header').height());
            $(this).find('.wp-block-navigation').attr('style', 'margin-top:243px');
        }else {
            $(this).find('.wp-block-navigation').attr('style', 'margin-top:323px');
        }
    }

    if (mediaQuery.matches) {
        if($('.wp-block-navigation').next()[0].tagName === 'H3'){
            if ($('.entry-header').height() > "160" && $('.entry-header').height() < "181.188") {
                $(this).find('.wp-block-navigation').attr('style', 'margin-top:287px');
            }else {
                $(this).find('.wp-block-navigation').attr('style', 'margin-top:360px');
            }
        }
    }
	setTimeout(function(){ $('.wp-block-navigation').attr('style', 'display:block !important'); }, 3000);
	
});
</script>
<!-- end Simple Custom CSS and JS -->
