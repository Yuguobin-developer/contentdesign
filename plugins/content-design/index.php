<?php

/**
 * Plugin Name: Content Design Helper
 * Plugin URI: https://github.com/whoacowboy/intuit-contentdesign-plugins
 * Description: A collection of plugins that make the content design theme tick.
 * Version: 1.0.0
 * Author: James Butler
 *
 * @package content-design
 */
defined( 'ABSPATH' ) || exit;


function content_design_block_category( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'content-design',
                'title' => __( 'Content Design', 'content-design' ),
            ),
        )
    );
}
add_filter( 'block_categories', 'content_design_block_category', 10, 2);
function content_design_gutenberg_setup() {
    wp_enqueue_script( 'content_design_gutenberg_setup', plugins_url( 'index.js', __FILE__ ));
}
add_action( 'enqueue_block_editor_assets', 'content_design_gutenberg_setup' );

include 'do/index.php';
include 'dont/index.php';
include 'examples/index.php';
include 'attributes/index.php';
include 'hero/index.php';
include 'link/index.php';
include 'mini-hr/index.php';
include 'post/index.php';
include 'community-feature/index.php';
include 'community-hero/index.php';
//include 'description/index.php';
