<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Content_Design
 */

?>
</div>
</div>
<div class="mt-auto content-design-footer row">
        <div class="col-12 col-md-6">
            <ul class="row-logos">
                <li>
                    <a href="https://turbotax.intuit.com/"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/turbotax.svg'; ?>"/></a>
                </li>
                <li>
                    <a href="https://quickbooks.intuit.com/"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/quickbooks.svg'; ?>"/></a>
                </li>
                <li>
                    <a href="https://proconnect.intuit.com/"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/proconnect.svg'; ?>"/></a>
                </li>
                <li>
                    <a href="https://mint.intuit.com/"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/mint.svg'; ?>"/></a>
                </li>
            </ul>
        </div>
        <div class="col-12 col-md-6 copyright">
          <div class="copyright-info">
            Intuit Content Design &copy; <?php echo date("Y"); ?> Intuit Inc.
            <br class="d-block d-md-none">All rights reserved.
          </div>
        <?php
        wp_nav_menu( array(
            'theme_location' => 'footer',
            'container_class' => 'footer-menu-class' ) );
        ?>
        </div>
</div>
<?php wp_footer(); ?>
<link type="text/css" rel="stylesheet" href="<?php echo get_template_directory_uri();?>/public/assets/pageflip/css/pageflip.css"></link>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/public/assets/pageflip/js/pageflip5-min.js"></script>
<script>
  function loadApp() {
    jQuery("#pageflip").pageflipInit({
      Copyright: '© 2020 Intuit',
      Key: 'K36gEePpaumndQj4IygVfYrfCrGz',
      SinglePageMode: true,
      PageWidth: 702,
      PageHeight: 541 ,
      Margin: 0,
      MarginBottom: 10,
      PerformanceAware: true,
      AutoScale: true,
      HardCover: true,
      HardPages: false,
      RightToLeft: false,
      VerticalMode: false,
      AlwaysOpened: false,
      AutoFlipEnabled: true,
      StartAutoFlip: false,
      AutoFlipLoop: -1,
      DropShadow: true,
      NoFlipShadow: false,
      Emboss: true,
      DropShadowOpacity: 0.05,
      FlipTopShadowOpacity: 0.2,
      FlipShadowOpacity: 0.2,
      HardFlipOpacity: 0.1,
      EmbossOpacity: 0.1,
      HashControl: true,
      PageCache: 5,
      MouseControl: true,
      HotKeys: false,
      ShowCopyright: false,
      ControlbarToFront: true,
      Controlbar: true,
      controlbarbtn: true,
      ControlbarFile: "<?php echo get_template_directory_uri();?>/public/assets/pageflip/js/controlbar_svg.html",
      FullScreenEnabled: false,
      autoflipenabled: true,
      startautoflip: true
    });
  }
  jQuery( document ).ready(function() {
    loadApp();
  });
</script>

</body>
</html>
