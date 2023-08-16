<?php

if (!function_exists('content_design_edit_footer')) {

    function content_design_edit_footer()
    {
        if (get_edit_post_link()) :
            echo '<footer class="entry-footer">';
            edit_post_link(
                '<div class="mdc-fab__ripple"></div><span class="mdc-fab__icon material-icons">edit</span>',
                '',
                '',
                null,
                'mdc-fab app-fab--absolute'
            );
            echo '<br/><br/></footer><!-- .entry-footer -->';
        endif;
    }

}
if (!function_exists('content_design_check_for_redirect')) {
    function content_design_check_for_redirect($id = 0)
    {
        $parents = get_post_ancestors($id);
        $page = get_post($id);
        $permalink = null;
        foreach ($parents as $item) {
            $parent = get_post($item);
            $template_name = get_page_template_slug($item);
            if (($template_name === 'template-word-list.php') || ($template_name === 'template-children.php')) {
                $permalink = get_the_permalink($item);
            }
            $parent = null;
        }
        if (!is_null($permalink)) {
            $link = $permalink . '#' . $page->post_name;
//            echo '<a href="' . $link . '">' . $page->post_name . '</a>';
            header("Location: $link", true, 307);
            exit();

        }

    }
}
