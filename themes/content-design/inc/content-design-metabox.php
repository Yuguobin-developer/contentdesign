<?php
/**
 * This function adds a meta box with a callback function of my_metabox_callback()
 */
function add_content_design_page_description_meta_box() {
    $var1 = 'this';
    $var2 = 'that';
    add_meta_box(
        'content_design_page_description_metabox',
        __( 'Page description', 'textdomain' ),
        'render_content_design_page_description_metabox',
        'page',
        'side',
        'high',
        array( 'foo' => $var1, 'bar' => $var2 )
    );
}
//add_action( 'load-nav-menus.php', 'op_register_menu_meta_box' );
add_action( 'add_meta_boxes', 'add_content_design_page_description_meta_box' );
/**
 * Get post meta in a callback
 *
 * @param WP_Post $post    The current post.
 * @param array   $metabox With metabox id, title, callback, and args elements.
 */

function render_content_design_page_description_metabox( $post, $metabox ) {
    // Output last time the post was modified.


    // Add an nonce field so we can check for it later.
    wp_nonce_field( 'content_design_page_description', 'content_design_page_description_nonce' );

    // Use get_post_meta to retrieve an existing value from the database.
    $value = get_post_meta( $post->ID, '_content_design_page_description_key', true );

    // Display the form, using the current value.
    echo '<div class="components-base-control">';
    echo '<label for="content_design_page_description_field" class="components-base-control__label">';
    echo 'Brief description of this page<br/>(8 to 15 words)';
    echo '</label>';
    echo '<textarea id="content_design_page_description_field" name="content_design_page_description_field" ';
    echo 'class="components-textarea-control__input" rows="3" style="width: 100%;">';
    echo esc_attr( $value );
    echo '</textarea>';
    echo '</div>';

}

/**
 * Save meta box content.
 *
 * @param int $post_id Post ID
 */
function content_design_page_description_save_meta_box( $post_id ) {

    /*
     * We need to verify this came from the our screen and with proper authorization,
     * because save_post can be triggered at other times.
     */

    // Check if our nonce is set.
    if ( ! isset( $_POST['content_design_page_description_nonce'] ) ) {
        return $post_id;
    }

    $nonce = $_POST['content_design_page_description_nonce'];

    // Verify that the nonce is valid.
    if ( ! wp_verify_nonce( $nonce, 'content_design_page_description' ) ) {
        return $post_id;
    }

    /*
     * If this is an autosave, our form has not been submitted,
     * so we don't want to do anything.
     */
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return $post_id;
    }

    // Check the user's permissions.
    if ( 'page' == $_POST['post_type'] ) {
        if ( ! current_user_can( 'edit_page', $post_id ) ) {
            return $post_id;
        }
    } else {
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return $post_id;
        }
    }

    /* OK, it's safe for us to save the data now. */

    // Sanitize the user input.
    $mydata = sanitize_text_field( $_POST['content_design_page_description_field'] );

    // Update the meta field.
    update_post_meta( $post_id, '_content_design_page_description_key', $mydata );
}
add_action( 'save_post', 'content_design_page_description_save_meta_box' );
