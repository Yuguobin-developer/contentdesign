<?php

/**
 * Plugin Name: Content Design Do
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
add_action( 'init', 'content_design_do_load_textdomain' );

function content_design_do_load_textdomain() {
	load_plugin_textdomain( 'content-design', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function content_design_do_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'index.asset.php');

	wp_register_script(
		'content-design-do',
		plugins_url( 'index.js' , __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'content-design/do', array(
		'editor_script' => 'content-design-do',
	) );

    wp_localize_script(
        'content-design-do',
        'do_block',
        array(
            'image' => plugins_url( 'assets/do.svg', __FILE__ )
        )
    );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'content-design-do', 'content-design' );
  }

}
add_action( 'init', 'content_design_do_register_block' );
