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
</head>
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
<div class="d-flex flex-column content-design community-page content-design-page">
    <header class="mt-auto content-design-navbar d-flex">
        <div class="flex-grow-1">
          <button id="content-design-menu" aria-label="menu" class="mdc-icon-button material-icons content-design-menu" onclick="window.toggle()" style="float: right; background-image: url('/wp-content/themes/content-design/public/assets/svgs/menu.svg');background-repeat: no-repeat;background-position: center center;"></button>
          <div class="my-header">
			   <a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'content-design' ); ?></a>
            <a href="/" style="display: flex;">
              <?php
              echo '<img style="height: 20px; width: auto; margin-left: -20px;margin-top: 12px;margin-right: 7px;" alt="Content Design Logo"';
              echo 'src="' . get_template_directory_uri() . '/public/assets/svgs/Intuit-Content-Design.svg" />' ;
              ?>
            
            </a>
          </div>
        </div>
      <!-- <div class="search-wrap">
          <?php get_search_form() ?>
      </div> -->
      <div class="search-wrap" aria-label="search form">
          <?php //get_search_form() ?>
          <input type="text" class="search-field search-field-desk aa-input agoria-search active desk-active" placeholder="Search all things content" aria-label="search text" value="" name="s" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="">
          <input type="text" class="search-field aa-input agoria-search mobile-active" placeholder="Search all things content" value="" name="s" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="">
          <img class="cancel-icon" src="<?php echo get_template_directory_uri()?>/public/Vector.png" style="position: absolute; margin: 12px; z-index: 10000; cursor: pointer;" alt="cancel icon">
      </div>
    </header>
    <div class="designtoggle">
        <div class="designtoggle-nav">
            <img class="form-cancel" aria-label="search cancel" src="<?php echo get_template_directory_uri()?>/public/vendor_close.png" style="position: absolute; right: 0; margin: 13px; cursor: pointer;" alt="cancel icon">
            <?php echo do_shortcode( '[gravityform id="3" ajax="true"]' ); ?>
        </div>
    </div>
    <div class="flex-grow-1 row">

    
		<div class="content-design-drawer">
      <div class="drawer-wrap" style="width: 100%; height: 100%;">
  			
  			<div class="content-design-drawer-hr"></div>
    			<?php
    			wp_nav_menu( array(
    				'theme_location' => 'primary',
    				'container_class' => 'primary-menu-class',
    				'link_after' => '<i class="material-icons">keyboard_arrow_down</i>',) );
    			?>
      </div>
		</div>
  <div class="content-design-scrim" onclick="toggle();"></div>
        <div class="col content-design-body">
            <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'content-design' ); ?></a>
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
  }
</style>