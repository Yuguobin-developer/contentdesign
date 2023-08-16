<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Content_Design
 */

$id = get_the_ID();

$post_blocks = parse_blocks($post->post_content);
$ids = [];
foreach ($post_blocks as $key => $block) {
  if ($block['blockName'] === 'core/gallery') {
      $ids = $block['attrs']['ids'];
      $html = '<div class="content-design-pageflip"><div id="pageflip">';
      foreach ($ids as $image_id) {
        $image = wp_get_attachment_image_src($image_id, 'full');
          $html .= '<div class="page"><img src="' . $image[0] . '"/></div>';
      }
      $html .= '</div></div>';

      echo do_shortcode($html);
//      echo '<div class="content-design-magazine">' . $block['innerHTML'] . '</div>';
      unset($post_blocks[$key]);
      break;
  }
}

?>
<article id="post-<?php the_ID(); ?>" <?php post_class('content-design-container'); ?>>
    <header class="entry-header">
        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
    </header><!-- .entry-header -->

    <?php content_design_post_thumbnail(); ?>

    <div class="entry-content">
        <?php

        foreach ($post_blocks as $key => $block) {
            echo render_block($block);
        }
        wp_link_pages( array(
            'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'content-design' ),
            'after'  => '</div>',
        ) );
        ?>
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
