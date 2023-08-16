<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Content_Design
 */
content_design_check_for_redirect(get_the_ID());
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
  <link rel="shortcut icon" href="<?= get_template_directory_uri() . '/public/assets/favicon.ico'; ?>">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<!--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">-->
    <?php wp_head(); ?>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M8D6J2K');</script>
<!-- End Google Tag Manager -->
    <!-- Google search console-->
    <meta name="google-site-verification" content="KRt_Czqls55vMpA0ZOCv-Ol7KAjrGnurto14MeozMUw" />
</head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/fullpage.js@3.0.8/vendors/scrolloverflow.min.js"></script>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script type="text/javascript">
  $(document).ready(function(){  
    if(window.innerWidth >= 1024) {
    }
    $(window).scroll(function(){
      var sticky = $('.wp-block-navigation'),
          scroll = $(window).scrollTop();

      if (scroll >= 320 && window.innerWidth >= 1024) sticky.addClass('fixed_1');
      else sticky.removeClass('fixed_1');
    });
    var stickyOffset = $('.wp-block-navigation').offset().top;

  
    // $('.wp-block-navigation-link__content').click(function(){
    //   $('.wp-block-navigation-link').removeClass('mylink');
    //   $(this).parent().addClass('mylink');
    // })
        
    $('.cancel-icon').click(function(){
        $('.agoria-search').val('');
    })
  })
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154879881-1"></script>
<script>
  if (document.location.hostname.search("contentdesign.intuit.com") !== -1) {
    window.dataLayer = window.dataLayer || [];
    function gtag () {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-154879881-1');
  }

</script>
<body <?php body_class(); ?>>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8D6J2K"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	
<div class="d-flex flex-column content-design content-design-page">
    <header class="mt-auto content-design-navbar d-flex">
        <div class="flex-grow-1">
            <button id="content-design-menu" class="mdc-icon-button material-icons content-design-menu" onclick="window.toggle()" style="float: right; background-image: url('/wp-content/themes/content-design/public/assets/svgs/menu.svg');background-repeat: no-repeat;background-position: center center;" aria-label = "menu icon"></button>
            <div class="my-header">
                  <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'content-design' ); ?></a>
                <a href="/" class="desk-logo" style="display: flex;">
                    <?php
                    echo '<img style="height: 20px; width: auto; margin-left: -20px;margin-top: 12px;margin-right: 7px;" alt="Content Design Logo" ';
                    echo 'src="' . get_template_directory_uri() . '/public/assets/svgs/Intuit-Content-Design.svg" />' ;
                    ?>
                </a>
				
                <a href="/" class="mobile-logo" style="">
                    <?php
                    echo '<img style="height: 20px; width: auto; margin-left: -20px;margin-top: 12px;margin-right: 7px;"  alt="Content Design Logo" ';
                    echo 'src="' . get_template_directory_uri() . '/public/assets/svgs/Intuit-Content-Design.svg" />' ;
                    ?>
                </a>
				
            </div>
			
        </div>
		
        <form class="search-wrap" aria-label="search form">
            <?php //get_search_form() ?>
            <input type="text" class="search-field-desk search-field aa-input agoria-search active desk-active" placeholder="Search all things content" aria-label="search text" value="" name="s" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="">
            <input type="text" class="search-field aa-input agoria-search mobile-active" placeholder="Search all things content" value="" name="s" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="">
            <img class="cancel-icon" src="<?php echo get_template_directory_uri()?>/public/Vector.png" alt="Cancel button" style="position: absolute; margin: 12px; z-index: 10000; cursor: pointer;">
        </form>
		
    </header>
    <div class="designtoggle">
        <div class="designtoggle-nav">
            <img class="form-cancel" src="<?php echo get_template_directory_uri()?>/public/vendor_close.png" alt="Cancel button" style="position: absolute; right: 0; margin: 13px; cursor: pointer;">
            <?php echo do_shortcode( '[gravityform id="3" ajax="true"]' ); ?>
        </div>
    </div>

    <div class="flex-grow-1 row my-con">
        <div class="content-design-drawer">

            <div class="drawer-wrap" style="width: 100%; height: 100%;">
                <button id="content-design-menu" class="mdc-icon-button material-icons content-design-clear" onclick="window.toggle()">clear</button>
                <div class="content-design-drawer-hr"></div>
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container_class' => 'primary-menu-class',
                    'link_after' => '<i class="material-icons" tabindex="0" >keyboard_arrow_down</i>',) );
                ?>
            </div>
        </div>
        <div class="content-design-scrim" onclick="toggle();"></div>
        <div class="col content-design-body">
            <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'content-design' ); ?></a>
            <div class="corner top-left"></div>
            <div class="corner top-right"></div>
            <div class="corner bottom-left"></div>
            <div class="corner bottom-right"></div>

<script type="text/javascript">
    $('i').on('keydown', function(e) {
        if(e.which == 13) {
            $(this).click();
        }
    })
    $('.gchoice input').on('keydown', function(e) {
        if(e.which == 13) {
            $(this).click();
        }
    })
    $('.wp-block-advgb-accordions h4:before').on('keydown', function(e) {
        if(e.which == 13) {
            $(this).click();
        }
    })
    $('.give_feedback').on('keydown', function(e) {
        if(e.which == 13) {
            $(this).click();
            $('#input_3_2').focus();
        }
    })
    // $('.search-field').on('keydown', function(e) {
    //     if(e.which == 9) {
    //         window.setTimeout(()=>{
    //             $('.algolia-autocomplete').css('display','block');
    //             $('.aa-suggestion:first-child .suggestion-link').focus();
    //         },100)   
    //     }
    // })

    $('.search-field').on('keydown', function(e) {
        if(e.which == 9) {
            window.setTimeout(()=>{
                $('.algolia-autocomplete').css('display','block');
                $('.aa-suggestion:first-child .suggestion-link').focus();
            },100)   
            
           // console.log($(this).val());
            if($(this).val() == '') {
               $('#menu-primary-navigation-menu').focus();
               //alert('dd');
            }                   
            
        }
    })

    $('.aa-suggestion:last-child .suggestion-link').on('keydown', function(e) {
        if(e.which == 9) {
            $('.algolia-autocomplete').css('display','none');
        }
    })

    $(document).on('keydown', function(e) {
       if(e.which === 9)
       {
        if(e.target.isEqualNode($('.aa-suggestion:last-child .suggestion-link')[0]))
        {
            $('.algolia-autocomplete').css('display','none');
            $('#menu-primary-navigation-menu').focus();
        } 
       }
    })

    $(document).click(function(e){
        if($(e.target).parents('.algolia-autocomplete').length === 0 && $(e.target).parents('.agoria-search').length === 0 && !$(e.target).hasClass('agoria-search'))
        {
            $('.algolia-autocomplete').css('display','none');
        }
    })

    $('.gfield_radio .gchoice:last-child input').on('keydown', function(e) {
        if(e.which == 9) {
            if($('.designtoggle-nav').hasClass('open')) {
                if($(this)[0].checked == false){
                    $('.designtoggle').removeClass('open')
                    $('.designtoggle-nav').removeClass('open')
                    $('.designtoggle').css('width', '0%');       
                    $('.turbotax').focus();
                }        
            }
                     
        }
    })

    // $('input[type="submit"]').on('keydown', function(e) {
    //     if(e.which == 9) {
    //         $('.give_feedback').click();    
    //         $('.turbotax').focus();
    //     }
    // })

    $(document).on('keydown','.gform_footer input[type="submit"]', function(e) {
        if(e.which == 9) {
            if($('.designtoggle-nav').hasClass('open')) {
                $('.designtoggle').removeClass('open')
                $('.designtoggle-nav').removeClass('open')
                $('.designtoggle').css('width', '0%');       
                $('.turbotax').focus();
            }
        }
        else if(e.which == 13) {
			$(this).click();
			 $('.form-cancel').focus();
        }
    })
    $(document).on('keydown','.form-cancel', function(e) {
        if(e.which == 9) {
            if($('.designtoggle-nav').hasClass('open')) {
                $('.designtoggle').removeClass('open')
                $('.designtoggle-nav').removeClass('open')
                $('.designtoggle').css('width', '0%'); 
            }
        }
    })

    document.getElementById("gform_3").onkeypress = function(e) {
        var key = e.charCode || e.keyCode || 0;     
        if (key == 13) {
          e.preventDefault();
        }
    } 
</script>


<style type="text/css">
    @media (max-width: 1024px){
        .my-header {
            display: flex;
            margin-left : 0px !important;
        }

        .my-header a {
            margin: auto;
        }
    }
    .my-header {
        margin-left: 25px;
        position: relative;
        padding-top: 2px;
    }
    .my-header a {
        color: #6b6c72;
        text-decoration:none;
    }
    @media (min-width: 1367px){
        .my-header a {
            padding-left: 23px;
            margin-left: 23px;
        }
    }
    @media (max-width: 1366px) and (min-width:  1025px){
        .my-header a {
            padding-left: 23px;
            margin-left: 50px;
        }
    }
    .my-header a span:hover{
        color: #c9007a;
    }
    .my-header a span{
        margin: 1px;
        font-size: 16px;
        position: absolute;
        margin-left: 10px;
    }
    .fixed_1 {
        display: flex !important;
        position: fixed;
        top:0; right:0;
        z-index: 10;
        margin-top: 58px !important;
    }

    @media (min-width: 3000px){
        .entry-content .fixed{
            margin-right: 16vw !important;
        }
        .wp-block-navigation{
            margin-right: 16vw !important;
        }
        #return-to-top {
            margin-right: calc(16vw - 4.5vw) !important;
        }
    }            
    @media (max-width: 3000px){
        .entry-content .fixed{
            margin-right: 15vw !important;
        }
        .wp-block-navigation{
            margin-right: 15vw !important;
        }
    }             
    @media (max-width: 2800px){
        .entry-content .fixed{
            margin-right: 14vw !important;
        }
        .wp-block-navigation{
            margin-right: 14vw !important;
        }
    }             
    @media (max-width: 2700px){
        .entry-content .fixed{
            margin-right: 13vw !important;
        }
        .wp-block-navigation{
            margin-right: 13vw !important;
        }
    }             
    @media (max-width: 2600px){
        .entry-content .fixed{
            margin-right: 11.9vw !important;
        }
        .wp-block-navigation{
            margin-right: 11.9vw !important;
        }
    }            
    @media (max-width: 2500px){
        .entry-content .fixed{
            margin-right: 9.1vw !important;
        }
        .wp-block-navigation{
            margin-right: 9.1vw !important;
        }
    }            
    @media (max-width: 2400px){
        .entry-content .fixed{
            margin-right: 8.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 8.6vw !important;
        }
    }            
    @media (max-width: 2300px){
        .entry-content .fixed{
            margin-right: 8vw !important;
        }
        .wp-block-navigation{
            margin-right: 8vw !important;
        }
    }            
    @media (max-width: 2250px){
        .entry-content .fixed{
            margin-right: 7.2vw !important;
        }
        .wp-block-navigation{
            margin-right: 7.2vw !important;
        }
    }         
    @media (max-width: 2200px){
        .entry-content .fixed{
            margin-right: 6.3vw !important;
        }
        .wp-block-navigation{
            margin-right: 6.3vw !important;
        }
        #return-to-top {
            margin-right: calc(3.2vw) !important;
        }
    }        
    @media (max-width: 2150px){
        .entry-content .fixed{
            margin-right: 5.4vw !important;
        }
        .wp-block-navigation{
            margin-right: 5.4vw !important;
        }
        #return-to-top {
            margin-right: calc(2.4vw) !important;
        }
    }        
    @media (max-width: 2100px){
        .entry-content .fixed{
            margin-right: 3.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 3.6vw !important;
        }
        #return-to-top {
            margin-right: calc(1vw) !important;
        }
    }        
    @media (max-width: 2050px){
        .entry-content .fixed{
            margin-right: 1.4vw !important;
        }
        .wp-block-navigation{
            margin-right: 1.4vw !important;
        }
        #return-to-top {
            margin-right: calc(-1vw) !important;
        }
    }        
    @media (max-width: 2000px){
        .entry-content .fixed{
            margin-right: 0vw !important;
        }
        .wp-block-navigation{
            margin-right: 0vw !important;
        }
        #return-to-top {
            margin-right: calc(-2vw) !important;
        }
    }        
    @media (max-width: 1919px){
        .entry-content .fixed{
            margin-right: 7.3vw !important;
        }
        .wp-block-navigation{
            margin-right: 7.3vw !important;
        }
        #return-to-top {
            margin-right: calc(5.5vw) !important;
        }
    }        
    @media (max-width: 1900px){
        .entry-content .fixed{
            margin-right: 6.2vw !important;
        }
        .wp-block-navigation{
            margin-right: 6.2vw !important;
        }
        #return-to-top {
            margin-right: calc(4.5vw) !important;
        }
    }        
    @media (max-width: 1850px){
        .entry-content .fixed{
            margin-right: 5.1vw !important;
        }
        .wp-block-navigation{
            margin-right: 5.1vw !important;
        }
        #return-to-top {
            margin-right: calc(4vw) !important;
        }
    }        
    @media (max-width: 1800px){
        .entry-content .fixed{
            margin-right: 3.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 3.6vw !important;
        }
        #return-to-top {
            margin-right: calc(2.7vw) !important;
        }
    }        
    @media (max-width: 1750px){
        .entry-content .fixed{
            margin-right: 2.5vw !important;
        }
        .wp-block-navigation{
            margin-right: 2.5vw !important;
        }
        #return-to-top {
            margin-right: calc(2.1vw) !important;
        }
    }        
    @media (max-width: 1700px){
        .entry-content .fixed{
            margin-right: 1vw !important;
        }
        .wp-block-navigation{
            margin-right: 1vw !important;
        }
        #return-to-top {
            margin-right: calc(1vw + 0.5vw) !important;
        }
    }    
    @media (max-width: 1650px){
        .entry-content .fixed{
            margin-right: -0.5vw !important;
        }
        .wp-block-navigation{
            margin-right: -0.5vw !important;
        }
        #return-to-top {
            margin-right: calc(0.6vw) !important;
        }
    }    
    @media (max-width: 1600px){
        .entry-content .fixed{
            margin-right: 1.1vw !important;
        }
        .wp-block-navigation{
            margin-right: 1.1vw !important;
        }
        #return-to-top {
            margin-right: calc(-1vw) !important;
        }
    }     
    @media (max-width: 1550px){
        .entry-content .fixed{
            margin-right: 0.4vw !important;
        }
        .wp-block-navigation{
            margin-right: 0.4vw !important;
        }
        #return-to-top {
            margin-right: calc(-1.4vw) !important;
        }
    } 
    @media (max-width: 1530px){
        .entry-content .fixed{
            margin-right: -0.6vw !important;
        }
        .wp-block-navigation{
            margin-right: -0.6vw !important;
        }
        #return-to-top {
            margin-right: calc(-2.2vw) !important;
        }
    } 
    @media (max-width: 1500px){
        .entry-content .fixed{
            margin-right: 0.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 0.6vw !important;
        }
        #return-to-top {
            margin-right: calc(-2.7vw) !important;
        }
    } 
    @media (max-width: 1480px){
        .entry-content .fixed{
            margin-right: -0.6vw !important;
        }
        .wp-block-navigation{
            margin-right: -0.6vw !important;
        }
        #return-to-top {
            margin-right: calc(-3.8vw) !important;
        }
    } 
    @media (max-width: 1440px){
        .entry-content .fixed{
            margin-right: 1.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 1.6vw !important;
        }
        #return-to-top {
            margin-right: calc(-4vw) !important;
        }
    } 
    @media (max-width: 1430px){
        .entry-content .fixed{
            margin-right: 0.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 0.6vw !important;
        }
        #return-to-top {
            margin-right: calc(-4.9vw) !important;
        }
    } 
    @media (max-width: 1400px){
        .entry-content .fixed{
            margin-right: -0.4vw !important;
        }
        .wp-block-navigation{
            margin-right: -0.4vw !important;
        }
        #return-to-top {
            margin-right: calc(-5.7vw) !important;
        }
    } 
    @media (max-width: 1365px){
        .entry-content .fixed{
            margin-right: 8.6vw !important;
        }
        .wp-block-navigation{
            margin-right: 8.6vw !important;
        }
        #return-to-top {
            margin-right: calc(3.5vw) !important;
        }
    } 
    @media (max-width: 1320px){
        .entry-content .fixed{
            margin-right: 7.4vw !important;
        }
        .wp-block-navigation{
            margin-right: 7.4vw !important;
        }
        #return-to-top {
            margin-right: calc(2.7vw) !important;
        }
    } 
    @media (max-width: 1280px){
        .entry-content .fixed{
            margin-right: 6.1vw !important;
        }
        .wp-block-navigation{
            margin-right: 6.1vw !important;
        }
        #return-to-top {
            margin-right: calc(1.6vw) !important;
        }
    } 
    @media (max-width: 1240px){
        .entry-content .fixed{
            margin-right: 4.4vw !important;
        }
        .wp-block-navigation{
            margin-right: 4.4vw !important;
        }
        #return-to-top {
            margin-right: calc(0.2vw) !important;
        }
    } 
    @media (max-width: 1200px){
        .entry-content .fixed{
            margin-right: 44px !important;
        }
        .wp-block-navigation{
            margin-right: 44px !important;
        }
        #return-to-top {
            margin-right: calc(-0.2vw) !important;
        }
    } 
    @media (max-width: 1170px){
        .entry-content .fixed{
            margin-right: 34px !important;
        }
        .wp-block-navigation{
            margin-right: 34px !important;
        }
        #return-to-top {
            margin-right: calc(-0.7vw) !important;
        }
    } 
    @media (max-width: 1150px){
        .entry-content .fixed{
            margin-right: 30px !important;
        }
        .wp-block-navigation{
            margin-right: 30px !important;
        }
        #return-to-top {
            margin-right: calc(-1vw) !important;
        }
    } 
    @media (max-width: 1140px){
        .entry-content .fixed{
            margin-right: 25px !important;
        }
        .wp-block-navigation{
            margin-right: 25px !important;
        }
        #return-to-top {
            margin-right: calc(-1.5vw) !important;
        }
    }
    @media (max-width: 1130px){
        .entry-content .fixed{
            margin-right: 20px !important;
        }
        .wp-block-navigation{
            margin-right: 20px !important;
        }
        #return-to-top {
            margin-right: calc(-1.8vw) !important;
        }
    }
    @media (max-width: 1120px){
        .entry-content .fixed{
            margin-right: 10px !important;
        }
        .wp-block-navigation{
            margin-right: 10px !important;
        }
        #return-to-top {
            margin-right: calc(-2.2vw) !important;
        }
    }
    @media (max-width: 1110px){
        .entry-content .fixed{
            margin-right: 28px !important;
        }
        .wp-block-navigation{
            margin-right: 28px !important;
        }
        #return-to-top {
            margin-right: calc(-3.1vw) !important;
        }
    }
    @media (max-width: 1080px){
        .entry-content .fixed{
            margin-right: 12px !important;
        }
        .wp-block-navigation{
            margin-right: 12px !important;
        }
        #return-to-top {
            margin-right: calc(-4.3vw) !important;
        }
    }
    @media (max-width: 1050px){
        .entry-content .fixed{
            margin-right: 0px !important;
        }
        .wp-block-navigation{
            margin-right: auto !important;
        }
        #return-to-top {
            margin-right: calc(-5.1vw) !important;
        }
    }
    @media (max-width: 1023px){
        .entry-content .fixed{
            margin-right: 70px !important;
            position: relative !important;
        }
        .wp-block-navigation{
            margin-right: 70px !important;
        }
        .hide-part {
            display: none;
        }
        .page-id-67 .entry-content .fixed{
            margin-right: 0px !important;
            position: relative !important;
        }
        .page-id-67 .wp-block-navigation{
            margin-right: 0px !important;
        }
    }
    .mylink {
      border-left:1px solid #C9007A !important;
    }
    .mylink a span{
      color:#C9007A !important;
    }
</style>
