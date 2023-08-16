<?php

if (!function_exists('get_community_categories_html_by_slugs')) {
    /**
     * Writes the html that is the community categories section
     * @param array $slugs
     * @param int $numberposts
     * @param string $exclude
     * @return null
     */
	function get_community_categories_html_by_slugs($slugs = [], $numberposts = 3, $exclude = 'featured-posts')
	{
		if (count($slugs) === 0) {
			return null;
		}
		echo '<div class="community-categories">';
		foreach ($slugs as $slug) {
			$category = get_category_by_slug( $slug );
			if (!($category instanceof WP_Term)) {
				continue;
			}
			$excludedCategory = get_category_by_slug( $exclude );
			$exclude_id = -1;
			if ($excludedCategory instanceof WP_Term) {
				$exclude_id = $excludedCategory->term_id;
			}
			$id = $category->term_id;
			echo '<div class="community-categories-items">';
			// write section heading
			echo ' <div class="community-categories-items-heading">';
            echo ' <h3>' . $category->name . '</h3>';
            echo ' <p>' . $category->description . '</p>';
          	echo '</div>';
          	// write section items
            $posts = get_posts_by_category_id_with_sticky($id, $exclude_id, $numberposts);

            foreach ( $posts as $post ) {
                $content = $post->post_content;
                $featured_img_url = get_the_post_thumbnail_url($post->ID,'full');
                $href = get_href_from_community_content($content);
                // if there is a link use an anchor tag, if not use a span tag
                if (!is_null($href)) {
                    echo '<a href="' . $href . '" target="_blank" class="community-categories-item">';
                } else {
                    echo '<span class="community-categories-item">';
                }
                echo '<div class="my_image_area"><img src="' . $featured_img_url . '" /></div>';
                echo '<h3>' . $post->post_title . '</h3>';
                echo remove_link_component_from_content($content);
                if (!is_null($href)) {
                    echo '</a>';
                } else {
                    echo '</span>';
                }
            }
            echo '</div>'; // end community-categories-items
		}
		echo '</div>'; // end community-categories
	}
}

if (!function_exists('get_posts_by_category_id_with_sticky')) {
    /**
     * Gets all posts with the specified category and not in the excluded category. It's meant to handle the case if
     * a post is an article and featured content to exclude it. The multiple queries are to get sticky posts first
     * then the remainder of non sticky posts for a total of number of posts specified.
     *
     * @param int $id
     * @param int $exclude_id
     * @return array
     */
	function get_posts_by_category_id_with_sticky($id, $exclude_id = -1, $numberposts = 3) {
		$sticky = get_posts( array(
			'numberposts' => $numberposts,
			'post_type'   => array('post'),
			'post__in'    => get_option('sticky_posts'),//it should be post__in but not posts__in
			'cat'         => array($id, -$exclude_id),
			'orderby'     => 'date',
			'order'       => 'DESC'
//			'category__not_in' => $exclude_id
		));
		$normal = [];
		$non_sticky = $numberposts - count( $sticky );
		// this has funky smell but the query returns all posts if non of the posts are sticky.
		// might switch to a WPQuery in the future to clean this up, but complex queries in
		// WP are difficult to grok at best.
		if ($non_sticky !== 0) {
			$normal = get_posts( array(
				'numberposts'  => $non_sticky,
				'post_type'    => array('post'),
				'post__not_in' => get_option('sticky_posts'),//it should be post__not_in but not posts__not_in
				'cat'          => array($id, -$exclude_id),
				'orderby'      => 'date',
				'order'            => 'DESC'
			));
		}
		return array_merge($sticky, $normal);
	}
}

if (!function_exists('get_href_from_community_content')) {
    /**
     * This is somewhat funky, but it looks for a href in the content and gets the url. We use the url to make the
     * entire section a link. Later in the code we remove the link for the content.
     *
     * @param null $content
     * @return |null
     */
    function get_href_from_community_content($content = null)
    {
        $doc = new DOMDocument();
        @$doc->loadHTML($content);
        $selector = new DOMXPath($doc);
        $result = $selector->query('//a');
        $href = null;
        foreach($result as $node) {
            $href = $node->getAttribute('href');
        }
        return $href;
    }
}

if (!function_exists('remove_link_component_from_content')) {
    /**
     * Removes the Link component from the content
     * @param string $content
     * @return string|string[]|null
     */
    function remove_link_component_from_content($content = '') {
//        $content = preg_replace('/<p><!-- wp:paragraph -->/', '', $content);
        return preg_replace('/<div class="wp-block-content-design-link">.*<\/div>/','', $content);
    }
}

if (!function_exists('get_child_pages_by_parent_id')) {
    /**
     * Get all children from a parent page id
     * @param $parent_id
     * @return array
     */
	function get_child_pages_by_parent_id($parent_id)
	{
		$query = new WP_Query(array(
			'post_type' => 'page',
			'posts_per_page' => -1,
			'post_parent' => $parent_id,
			'order' => 'ASC',
			'orderby' => 'menu_order'
		));
		return $query->posts;
	}

}
if (!function_exists('get_child_pages_by_parent_id_list')) {
    /**
     * Get all children from a parent page id
     * @param $parent_id
     * @return array
     */
    function get_child_pages_by_parent_id_list($parent_id)
    {
        $query = new WP_Query(array(
            'post_type' => 'page',
            'posts_per_page' => -1,
            'post_parent' => $parent_id,
            'order' => 'ASC',
            'orderby' => 'title'
        ));
        return $query->posts;
    }

}
if (!function_exists('get_child_posts_by_category_name')) {
    /**
     * Write html for the What's New section
     * @param string $category_name
     * @return int[]|WP_Post[]
     */
    function get_child_posts_by_category_name($category_name = "New content")
    {
        $catId = get_cat_ID($category_name);
        $args = array('category' => $catId, 'post_type' => 'post');
        return get_posts($args); //change this

    }
}
if (!function_exists('write_category_posts_content')) {

    function write_category_posts_content($posts)
    {
        foreach ($posts as $post) {
            echo '<div>';
            echo '<hr/>';
            echo '<a name="' . $post->post_name . '" id="scroll-to-' . $post->post_name . '" title="' . $post->post_title . '"></a>';
            echo '<div id="' . $post->post_name . '" name="' . $post->post_name . '"></div>';
            echo '<p>' . get_the_date( 'F d, Y', $post->ID ) . '</p>';
            echo '<h3>' . print_r($post->post_title, true);

            edit_post_link(
                '<i class="material-icons">edit</i>',
                '',
                '',
                $post->ID,
                ''
            );
            echo '</h3>';
            echo '<div>';
            echo $post->post_content;
            echo '</div>';
            echo '</div>';
        }
    }

}
if (!function_exists('write_child_pages_links')) {

    /**
     * Write the links for the child pages
     * @param $pages
     */
    function write_child_pages_links($pages)
    {
        foreach ($pages as $page) {
            $meta = get_post_meta($page->ID);
            $description = $meta['_content_design_page_description_key'][0];
            echo '<div class="child-page-links child-desc-temp">';
            echo '<a style="margin-bottom: 10px;display: block;" href="' . esc_url(get_permalink($page->ID)) . '">';
            echo print_r($page->post_title, true);
            echo '<img src="' . get_template_directory_uri() . '/public/assets/svgs/chevron.svg" style="width: 12px; height: 12px;"/>';
            echo '</a>';
            if (isset($description)){
                echo '<div style="margin-bottom: 20px;">' . $description . '</div>';
            }
            echo '</div>';
        }
    }

}
if (!function_exists('write_child_pages_toc')) {
    /**
     * Writes the TOC for child pages and word list
     * @param $pages
     * @param string $type
     */
    function write_child_pages_toc($pages, $type = 'children')
    {
        $class = ($type === 'children') ? 'columned-list' : 'word-list-toc';
        echo '<ul class="' . $class . '">';
        foreach ($pages as $page) {
            echo '<li><a href="#' . print_r($page->post_name, true) . '" class="scroll-to-link">' . print_r($page->post_title, true) . '</a></li>';
        }
        echo '</ul>';
    }

}
if (!function_exists('write_child_pages_content')) {
    /**
     * Write the content for the child pages and word list
     * @param $pages
     * @param string $type
     */
    function write_child_pages_content($pages, $type = 'children')
    {
        echo '<div class="content-' . $type . '">';
        foreach ($pages as $page) {
            // Do your stuff, e.g.
            //echo '<hr/ id="my-space">';
            echo '';
            echo '<a name="' . $page->post_name . '" id="scroll-to-' . $page->post_name . '" title="' . $page->post_title . '"></a>';
            echo '<div id="' . $page->post_name . '" name="' . $page->post_name . '"></div>';
            echo '<h3>' . print_r($page->post_title, true);

            edit_post_link(
                '<i class="material-icons">edit</i>',
                '',
                '',
                $page->ID,
                ''
            );
            echo '</h3>';
            
            if ($type === 'word-list') {
                $children = get_child_pages_by_parent_id_list($page->ID);
                foreach ($children as $child) {
                    echo '<a name="' . $child->post_name . '" id="scroll-to-' . $child->post_name . '" title="' . $child->post_title . '"></a>';
                    echo '<div id="' . $child->post_name . '" name="' . $child->post_name . '"></div>';
                    echo '<div class="word-list-item">';
                    echo '<div class="heading sub-titles">';
                    echo '<h3 id="' . $child->post_name . '" name="' . $child->post_name . '">' . print_r($child->post_title, true);

                    edit_post_link(
                        '<i class="material-icons">edit</i>',
                        '',
                        '',
                        $child->ID,
                        ''
                    );
                    echo '</h3>';
                    echo '</div>';
                    echo '<div class="col">';
                    echo $child->post_content;
                    echo '</div>';
                    echo '</div>';
                }
            } else {
                echo $page->post_content;
            }
        }
        echo '</div>';
    }

}

