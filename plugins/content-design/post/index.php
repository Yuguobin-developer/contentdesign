<?php

/**
 * Plugin Name: Content Design Do and Don't
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'content_design_post_load_textdomain' );

function content_design_post_load_textdomain() {
	load_plugin_textdomain( 'content-design', false, basename( __DIR__ ) . '/languages' );
}

function content_design_post_render_callback( $attributes, $content ) {
//    echo($attributes[selectedId]);
    if (!isset($attributes['selectedPost'])) {
        return null;
    }

    $post = get_post($attributes['selectedPost']);
    $thumbnail = get_the_post_thumbnail_url( $post->ID, 'large' );
    $html = '<div class="wp-block-content-design-post"><div class="wp-block-content-design-post-image" style="background-image: url(' . $thumbnail . ');"></div><h3>%2$s</h3>%3$s</div>';
    $content = $post->post_content;
    return sprintf(
        $html,
        $thumbnail,
        esc_html( get_the_title( $attributes['selectedPost'] ) ),
        $content
    );
}
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function content_design_post_register_block() {


	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'index.asset.php');

	wp_register_script(
		'content-design-post',
		plugins_url( 'index.js' , __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);


    wp_register_style(
        'content-design-post-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    wp_register_style(
        'content-design-post',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
    );

    register_block_type( 'content-design/post', array(
        'style' => 'content-design-post',
        'editor_style' => 'content-design-post-editor',
        'editor_script' => 'content-design-post',
        'render_callback' => 'content_design_post_render_callback'
    ) );


  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'content-design-post', 'content-design' );
  }

}
add_action( 'init', 'content_design_post_register_block' );
function content_design_create_categories(){
    // add category
    $category1 = array(
        'cat_name' => 'Featured content',
        'category_description' => 'A category used to identify featured content.',
        'category_nicename' => 'featured-content',
        'category_parent' => '');
    // add category
    $category2 = array(
        'cat_name' => 'New content',
        'category_description' => 'A category used to identify new content on the site.',
        'category_nicename' => 'whats-new',
        'category_parent' => '');

// Create the category
    wp_insert_category($category1, false);
    wp_insert_category($category2, false);

    $category_id = get_cat_ID('Featured content');

    wp_localize_script(
        'content-design-post',
        'post_block',
        array(
            'category_id' => $category_id
        )
    );

}
add_action('admin_init','content_design_create_categories');
