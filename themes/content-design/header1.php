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
	<!-- Google search console-->
	<meta name="google-site-verification" content="KRt_Czqls55vMpA0ZOCv-Ol7KAjrGnurto14MeozMUw" />
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
<div class="my-static-header" style="height: 8px; background: linear-gradient(  rgba(245,245,248), rgba(237,238,239)); width: 100%;"></div>
<body <?php body_class(); ?>>

<div class="d-flex flex-column content-design content-design-page">    
    <header class="mt-auto content-design-navbar d-flex">
        <button id="content-design-menu" class="mdc-icon-button material-icons content-design-menu" onclick="window.toggle()">menu</button>
        <div class="flex-grow-1">
            <div class="my-header">
            <a href="/" style="display: flex;">
                <?php
                echo '<img style="height: 20px; width: auto; margin-left: -20px;margin-top: 12px;margin-right: 7px;" ';
                echo 'src="' . get_template_directory_uri() . '/public/assets/svgs/intuit.svg" />' ;
                ?><div>Content Design</div>
            </a>
            </div>
        </div>
      <div class="search-wrap">
          <?php get_search_form() ?>
      </div>
<!--        <button id="content-design-menu" class="mdc-icon-button material-icons content-design-search">search</button>-->
    </header>

    <div class="flex-grow-1 row my-con">
        
        <div class="content-design-scrim" onclick="toggle();"></div>
        <div class="col content-design-body">
            <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'content-design' ); ?></a>
            <div class="corner top-left"></div>
            <div class="corner top-right"></div>
            <div class="corner bottom-left"></div>
            <div class="corner bottom-right"></div>
            <div class="content-design-drawer">
                <button id="content-design-menu" class="mdc-icon-button material-icons content-design-clear" onclick="window.toggle()">clear</button>
                <div class="content-design-drawer-hr"></div>
                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container_class' => 'primary-menu-class',
                    'link_after' => '<i class="material-icons">keyboard_arrow_down</i>',) );
                ?>
            </div>
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
                        margin-left: 22px;
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
            </style>
