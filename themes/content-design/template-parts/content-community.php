<script src="<?php echo get_template_directory_uri()?>/template-parts/blocks/global/assets/js/jquery.min.js"></script>
<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Content_Design
 * @see https://wordpress.stackexchange.com/questions/161071/wp-query-by-category-name/161074
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('content-design-community'); ?>>
    <header class="entry-header">
<!--        --><?php //the_title('<h1 class="entry-title">', '</h1>'); ?>
    </header><!-- .entry-header -->

    <div class="entry-content community">
        <?php
        echo the_content();?>
      <!-- end featured items -->
          <?php
          $slugs = ['events', 'articles', 'kitchen-sink'];
          //get_community_categories_html_by_slugs($slugs, 3, 'featured-content');
          wp_reset_postdata();
          ?>
    </div><!-- .entry-content -->

    <?php content_design_edit_footer(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
