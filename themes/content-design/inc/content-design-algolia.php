<?php
// to put in the functions.php file of your active theme.
/**
 * @param bool    $should_index
 * @param WP_Post $post
 *
 * @return bool
 */
function exclude_post_ids( $should_index, WP_Post $post )
{
    // Add all post IDs you don't want to make searchable.
    $excluded_ids = array(
        69,   // A
        76,   // B
        457,  // C
        566,  // D
        638,  // E
        706,  // F
        756,  // G
        772,  // H
        822,  // I
        907,  // J
        915,  // K
        923,  // L
        995,  // M
        1046, // N
        1110, // O
        1170, // P
        1308, // Q
        1378, // R
        1458, // S
        1673, // T
        1799, // U
        1849, // V
        1866, // W
        1908, // X
        1914, // Y
        1925, // Z
    );
    if ( false === $should_index ) {
        return false;
    }

    return ! in_array( $post->ID, $excluded_ids, true );
}

// Hook into Algolia to manipulate the post that should be indexed.
add_filter( 'algolia_should_index_searchable_post', 'exclude_post_ids', 10, 2 );
