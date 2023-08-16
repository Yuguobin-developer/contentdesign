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

        // Get the top list letters
        $pages = get_child_pages_by_parent_id_list(get_the_ID());
        //write_child_pages_toc($pages, 'word-list');
        write_child_pages_content($pages, 'word-list');
        ?>
    </div><!-- .entry-content -->

    <?php content_design_edit_footer(); ?>
</article><!-- #post-<?php the_ID(); ?> -->
