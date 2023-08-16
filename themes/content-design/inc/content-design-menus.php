<?php

/**
 * Register navigation menus uses wp_nav_menu in five places.
 */
function content_design_menus() {

    $locations = array(
        'primary'   => __( 'Primary navigation', 'content-design' ),
        'footer'   => __( 'Footer links', 'content-design' ),
        'social'   => __( 'Social menu', 'content-design' ),
    );

    register_nav_menus( $locations );
}

add_action( 'init', 'content_design_menus' );
