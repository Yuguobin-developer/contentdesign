<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Content_Design
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('content-design-container'); ?>>
    <header class="entry-header">
        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
    </header><!-- .entry-header -->

    <div class="entry-content">
        <a href="javascript:" id="return-to-top"><img src="<?= get_template_directory_uri() . '/public/assets/svgs/arrow.svg'; ?>"></a>
        <?php
        echo the_content();

        $posts = get_child_posts_by_category_name();
        write_category_posts_content($posts);
 ?>
    </div><!-- .entry-content -->

    <?php content_design_edit_footer(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
