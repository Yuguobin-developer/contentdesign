<?php
/**
 * get the navigation as a JSON return
 * @param $theme_location
 * @return string
 */

function content_design_json_menu( $theme_location ) {
    if ( ($theme_location) && ($locations = get_nav_menu_locations()) && isset($locations[$theme_location]) ) {
        $menu = get_term( $locations[$theme_location], 'nav_menu' );
        $menu_items = wp_get_nav_menu_items($menu->term_id);

        $menu_list = [];

        $count = 0;
        $submenu = false;
        foreach( $menu_items as $menu_item ) {

            $link = $menu_item->url;
            $title = $menu_item->title;

            if ( !$menu_item->menu_item_parent ) {
                $parent_id = $menu_item->ID;
                $menu_list[$parent_id] =
                    [
                        'id' => $menu_item->ID,
                        'title' => $menu_item->title,
                        'url' => $menu_item->url,
                    ];
            }

            if ( $parent_id == $menu_item->menu_item_parent ) {

                if ( !$submenu ) {
                    $submenu = true;
                    $menu_list[$parent_id]['children'] = [];
                }
                array_push($menu_list[$parent_id]['children'], [
                    'id' => $menu_item->ID,
                    'title' => $menu_item->title,
                    'url' => $menu_item->url,
                ]);

                if (isset($menu_items[ $count + 1 ]) &&  $menu_items[ $count + 1 ]->menu_item_parent != $parent_id && $submenu ){
                    $submenu = false;
                }

            }

            if ( isset($menu_items[ $count + 1 ]) && $menu_items[ $count + 1 ]->menu_item_parent != $parent_id ) {
                $submenu = false;
            }

            $count++;
        }

        return json_encode($menu_list);

    }
    return '[]';
}
function get_menu() {
    # Change 'menu' to your own navigation slug.
    return '{ data: ' . content_design_json_menu('primary') . '}';
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'api', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
    ) );
} );
