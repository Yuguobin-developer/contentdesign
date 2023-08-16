<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Content_Design
 */

$id = get_the_ID();
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('content-design-container'); ?>>
    <header class="entry-header">
		<?php if (function_exists('tsh_wp_custom_breadcrumbs')) tsh_wp_custom_breadcrumbs(); ?>
        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>

    </header><!-- .entry-header -->

    <?php content_design_post_thumbnail(); ?>

    <div class="entry-content">
        <?php
        the_content();

        wp_link_pages( array(
            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'content-design' ),
            'after'  => '</div>',
        ) );
        ?>
		<?php //wpb_related_pages(); ?> 
		
		
    </div><!-- .entry-content -->

    <?php if (get_edit_post_link()) : ?>
        <footer class="entry-footer"><?php
            edit_post_link(
                '<div class="mdc-fab__ripple"></div><span class="mdc-fab__icon material-icons">edit</span>',
                '',
                '',
                null,
                'mdc-fab app-fab--absolute'
            );
            ?><br/><br/></footer><!-- .entry-footer -->
    <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
