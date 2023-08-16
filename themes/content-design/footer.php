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
<!-- <div class="my-footer" style="width: 20px; height: 75px; z-index: 7;  position: absolute;  left: 0; background-color: #f4f5f8; margin-left: 270px;"></div> -->
<div class="mt-auto content-design-footer row">
        <div class="col-12 col-md-6">
        <!--    <ul class="row-logos">
                <li>
                    <a href="https://turbotax.intuit.com/" target="_blank"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/turbotax.svg'; ?>"/></a>
                </li>
                <li>
                    <a href="https://quickbooks.intuit.com/" target="_blank"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/quickbooks.svg'; ?>"/></a>
                </li>
                <li>
                    <a href="https://proconnect.intuit.com/" target="_blank"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/proconnect.svg'; ?>"/></a>
                </li>
                <li>
                    <a href="https://mint.intuit.com/" target="_blank"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/mint.svg'; ?>"/></a>
                </li>
            </ul>-->
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
<a href="javascript:" id="return-to-top"  onclick="ga(‘send’, ‘event’, ‘Back to top Button’, ‘click’, ‘back to top’, {nonInteraction: false});"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/arrow.svg'; ?>" alt="go to top"></a>
<div id="snackbar">Link copied</div>
<?php wp_footer(); ?>

