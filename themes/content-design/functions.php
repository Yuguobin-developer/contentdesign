<?php

/**
 * Remove auto p
 */


global $wp_filter;
remove_filter('post_content','wpautop');
remove_filter( 'the_content', 'shortcode_unautop' );
remove_filter('the_content', 'wpautop');
remove_filter( 'the_excerpt', 'wpautop' );
/**
 * Add admin styles
 */
/**
 * Content_Design functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Content_Design
 */
function theme_scripts() {
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'theme_scripts');
// Remove dashboard widgets
function remove_dashboard_meta() {
//    if ( ! current_user_can( 'manage_options' ) ) {
        remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_plugins', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_primary', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_secondary', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
        remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'side' );
        remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' );
        remove_meta_box( 'dashboard_activity', 'dashboard', 'normal');
//    }
}
add_action( 'admin_init', 'remove_dashboard_meta' );

add_action('init','init_redirect');

if(!function_exists('init_redirect')) {
	function init_redirect() {
		if (!session_id()) {
		    session_start();
		}

		// if(! wp_doing_ajax()) {
		// 	var_dump($_SESSION);exit;
		// }

		if(! wp_doing_ajax() && !is_login()) {
			if(is_user_logged_in() && $_SESSION['redirect_url']) {
				$url = $_SESSION['redirect_url'];
				$_SESSION['redirect_url'] = '';
				//session_write_close();
				return wp_redirect($url);
				
			}
			else if($_SESSION['redirect_url']) {
				$_SESSION['redirect_url'] = '';
			}
		}

		//session_write_close();
		
	}
}


if(!function_exists('add_redirect')) {
	function add_redirect() {
		if (!session_id()) {
		    session_start();
		}
		$url = $_POST['url'];

		$_SESSION['redirect_url'] = $url;

		echo json_encode($_SESSION);

		//session_write_close();

		wp_die();

	}
}

add_action('wp_ajax_nopriv_add_redirect','add_redirect');

// Custom Admin footer
function wpexplorer_remove_footer_admin () {
    echo '<span id="footer-thankyou">Built with love.</span>';
}
add_filter( 'admin_footer_text', 'wpexplorer_remove_footer_admin' );

add_filter('show_admin_bar', '__return_false');
//add_action( 'after_setup_theme', 'my_theme_setup' );
if ( ! function_exists( 'content_design_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function content_design_theme_setup() {

        add_theme_support( 'editor-styles' );
        add_editor_style( 'public/editor-style.css' );
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Content_Design, use a find and replace
		 * to change 'content-design' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'content-design', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'content_design_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
        /**
         * wide image alignment support
         */
        add_theme_support( 'align-wide' );

	}
endif;
add_action( 'after_setup_theme', 'content_design_theme_setup' );


if ( ! function_exists( 'content_design_theme_add_editor_css' ) ) :

    function content_design_theme_add_editor_css() {

        add_theme_support( 'editor-styles' );
        add_editor_style( get_template_directory() . '/public/editor-style.css' );
//        echo get_template_directory_uri() . '/public/editor-style.css';
    }
endif;

add_action( 'admin_init', 'content_design_theme_add_editor_css' );
/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function content_design_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'content_design_content_width', 640 );
}
add_action( 'after_setup_theme', 'content_design_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function content_design_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'content-design' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'content-design' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'content_design_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
if ( ! function_exists( 'content_design_scripts' ) ) :
	function content_design_scripts() {

		// Loads required CSS header only.
		wp_enqueue_style( 'content-design-style', get_stylesheet_uri() );

		// Loads bundled frontend CSS.
		wp_enqueue_style( 'content-design-frontend-styles', get_stylesheet_directory_uri() . '/public/style.css?' . (new DateTime())->getTimestamp() );

		wp_enqueue_script( 'content-design-frontend-scripts', get_template_directory_uri() . '/public/frontend.js', array(), null, true );
		wp_enqueue_script( 'content-design-frontend-scripts-jquery', get_template_directory_uri() . '/public/index-jquery.js', array(), null, true );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		if ( is_page_template('components/template-abolish.php') ) {
			wp_enqueue_script( 'lottie-player', 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', array(), null, true );
			wp_enqueue_script( 'lottie-interactivity', 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js', array(), null, true );

			// Scroll Magic
			wp_enqueue_script( 'gsap', get_stylesheet_directory_uri() . '/public/assets/gsap3/gsap.min.js', array('jquery'), false, false );
			wp_enqueue_script( 'ScrollMagic', get_stylesheet_directory_uri() . '/public/assets/scrollmagic/ScrollMagic.min.js', array('jquery'), false, false );
			wp_enqueue_script( 'animation-gsap', get_stylesheet_directory_uri() . '/public/assets/scrollmagic/plugins/animation.gsap.min.js', array('jquery'), false, false );
			wp_enqueue_script( 'debug-addIndicators', get_stylesheet_directory_uri() . '/public/assets/scrollmagic/plugins/debug.addIndicators.min.js', array('jquery'), false, false );
		}
	}
	add_action( 'wp_enqueue_scripts', 'content_design_scripts' );
endif;

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}

/**
 * Content Design custom menus.
 */
require get_template_directory() . '/inc/content-design-menus.php';
/**
 * Content Design custom json.
 */
require get_template_directory() . '/inc/content-design-json-menu.php';
/**
 * Content Design custom queries.
 */
require get_template_directory() . '/inc/content-design-queries.php';
require get_template_directory() . '/inc/content-design-helpers.php';
require get_template_directory() . '/inc/content-design-settings.php';
require get_template_directory() . '/inc/content-design-algolia.php';
require get_template_directory() . '/inc/content-design-metabox.php';

function cc_mime_types( $mimes ){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter( 'upload_mimes', 'cc_mime_types' );

$a     = 'rgb(0, 0, 0)';
$b = 'rgb(171, 184, 195)';
$c      = 'rgb(255, 255, 255)';
$d     = 'rgb(247, 141, 167)';
$e      = 'rgb(207, 46, 46)';
$f    = 'rgb(0, 208, 132)';
$g       = 'rgb(6, 147, 227)';
$h    = 'rgb(155, 81, 224)';
$i     = '#BABEC5';
$j     = '#F4F5F8';
$k     = '#00C1BF';
$l     = '#F25A52';

add_theme_support(
	'editor-color-palette',
	array(
		array(
			'name'  => esc_html__( 'Gray background', 'twentytwentyone' ),
			'slug'  => 'j',
			'color' => $j,
		),
		array(
			'name'  => esc_html__( 'Gray', 'twentytwentyone' ),
			'slug'  => 'i',
			'color' => $i,
		),
		array(
			'name'  => esc_html__( 'Teal', 'twentytwentyone' ),
			'slug'  => 'k',
			'color' => $k,
		),
		array(
			'name'  => esc_html__( 'Red', 'twentytwentyone' ),
			'slug'  => 'l',
			'color' => $l,
		),
	)
);

add_action('acf/init', 'my_acf_init_two');
add_action('acf/init', 'slider');
add_action('acf/init', 'my_acf_init_one');
add_action('acf/init', 'ui_images');
add_action('acf/init', 'single_image');
add_action('acf/init', 'image_text_slider');
add_action('acf/init', 'articles_three_col');
add_action('acf/init', 'community_hero_image');

function slider() {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'slider',
			'title'				=> __('General Slider'),
			'description'		=> __('A custom slider.'),
			'render_template'	=> 'template-parts/blocks/community/slider.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}

function my_acf_init_two() {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'image_text_two',
			'title'				=> __('Community 2 col images'),
			'description'		=> __('A custom image_text_two block.'),
			'render_template'	=> 'template-parts/blocks/community/community_2column_images.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}
function ui_images () {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'ui_images',
			'title'				=> __('ui images'),
			'description'		=> __('A custom ui_images block.'),
			'render_template'	=> 'template-parts/blocks/community/ui_images.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}
function my_acf_init_one() {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'image_text_one',
			'title'				=> __('Community 1 col image'),
			'description'		=> __('A custom Community 1 col image block.'),
			'render_template'	=> 'template-parts/blocks/community/community_single_column_image.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}

function single_image() {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'single_image',
			'title'				=> __('Single_Image'),
			'description'		=> __('A custom single image block.'),
			'render_template'	=> 'template-parts/blocks/global/single_image.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}

function image_text_slider () {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'image_text_slider',
			'title'				=> __('Community Feature article image'),
			'description'		=> __('A Custom Community Feature article image block.'),
			'render_template'	=> 'template-parts/blocks/global/image_text_slider.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}

function articles_three_col () {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'Community 3 col images',
			'title'				=> __('Community 3 col images'),
			'description'		=> __('A custom Community 3 col images block.'),
			'render_template'	=> 'template-parts/blocks/community/community_3column_images.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}

function community_hero_image () {
	
	// check function exists
	if( function_exists('acf_register_block') ) {
		
		// register a Image_text_two block
		acf_register_block(array(
			'name'				=> 'Community Hero Image',
			'title'				=> __('Community Hero Image'),
			'description'		=> __('A custom Community Hero Image block.'),
			'render_template'	=> 'template-parts/blocks/community/community_hero_image.php',
			'render_callback'	=> 'my_acf_block_render_callback',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'testimonial', 'quote' ),
		));
	}
}

// Function to change email address
function wpb_sender_email( $original_email_address ) {
    return 'contentdesign@intuit.com';
}
 
 
// Hooking up our functions to WordPress filters 
add_filter( 'wp_mail_from', 'wpb_sender_email' );


/**
 * Add mime type - application/json
 */
if ( ! function_exists( 'pten_mime_types' ) ) :
	function pten_mime_types($mimes) {
		$mimes['json'] = 'application/json';
		$mimes['svg'] = 'image/svg+xml';
		return $mimes;
	}
	add_filter('upload_mimes', 'pten_mime_types');
endif;

// Register the admin column for modified date
function bf_post_modified_column_register( $columns ) {
    $columns['post_modified'] = __( 'Modified Date', 'contentdomain' );
    return $columns;
}
add_filter( 'manage_edit-post_columns', 'bf_post_modified_column_register' );
add_filter( 'manage_edit-page_columns', 'bf_post_modified_column_register' );

// Display the modified date column content
function bf_post_modified_column_display( $column_name, $post_id ) {
    if ( 'post_modified' != $column_name ){
        return;
    }
    $post_modified = get_post_field('post_modified', $post_id);
    if ( !$post_modified ){
        $post_modified = '' . __( 'undefined', 'contentdomain' ) . '';
    }
    echo $post_modified;
}
add_action( 'manage_posts_custom_column', 'bf_post_modified_column_display', 10, 2 );
add_action( 'manage_pages_custom_column', 'bf_post_modified_column_display', 10, 2 );

// Register the modified date column as sortable
function bf_post_modified_column_register_sortable( $columns ) {
    $columns['post_modified'] = 'post_modified';
    return $columns;
}
add_filter( 'manage_edit-post_sortable_columns', 'bf_post_modified_column_register_sortable' );
add_filter( 'manage_edit-page_sortable_columns', 'bf_post_modified_column_register_sortable' );

// add tags to pages
function add_tags_to_pages() {
 register_taxonomy_for_object_type( 'post_tag', 'page' );
 }
add_action( 'init', 'add_tags_to_pages');


/**
 * WordPress Breadcrumbs
 */
function tsh_wp_custom_breadcrumbs() {

    $separator              = '/';
    $breadcrumbs_id         = 'tsh_breadcrumbs';
    $breadcrumbs_class      = 'tsh_breadcrumbs';
    $home_title             = esc_html__('Home', 'your-domain');

    // Add here you custom post taxonomies
    $tsh_custom_taxonomy    = 'product_cat';

    global $post,$wp_query;
       
    // Hide from front page
    if ( !is_front_page() ) {
       
        echo '<ul id="' . $breadcrumbs_id . '" class="' . $breadcrumbs_class . '">';
           
        // Home
        echo '<li class="item-home"><a class="bread-link bread-home" href="' . get_home_url() . '" title="' . $home_title . '">' . $home_title . '</a></li>';
        echo '<li class="separator separator-home"> ' . $separator . ' </li>';
         
		if ( is_page() ) {
               
            // Standard page
            if( $post->post_parent ){
                   
                // Get parents 
                $anc = get_post_ancestors( $post->ID );
                   
                // Get parents order
                $anc = array_reverse($anc);
                   
                // Parent pages
                if ( !isset( $parents ) ) $parents = null;
                foreach ( $anc as $ancestor ) {
                    $parents .= '<li class="item-parent item-parent-' . $ancestor . '"><a class="bread-parent bread-parent-' . $ancestor . '" href="' . get_permalink($ancestor) . '" title="' . get_the_title($ancestor) . '">' . get_the_title($ancestor) . '</a></li>';
                    $parents .= '<li class="separator separator-' . $ancestor . '"> ' . $separator . ' </li>';
                }
                   
                // Render parent pages
                echo $parents;
                   
                // Active page
                echo '<li class="item-current item-' . $post->ID . '"><p title="' . get_the_title() . '"> ' . get_the_title() . '</p></li>';
                   
            } else {
                   
                // Just display active page if not parents pages
                echo '<li class="item-current item-' . $post->ID . '"><p class="bread-current bread-' . $post->ID . '"> ' . get_the_title() . '</p></li>';
                   
            }
               
        }  elseif ( is_404() ) {
               
            // 404 page
            echo '<li>' . 'Error 404' . '</li>';
        }

        echo '</ul>';  
    }
}


function wpb_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(/wp-content/themes/content-design/public/assets/svgs/Intuit-Content-Design.svg);
        height:100px;
        width:300px;
        background-size: 300px 100px;
        background-repeat: no-repeat;
        padding-bottom: 10px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'wpb_login_logo' );

function wpb_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'wpb_login_logo_url' );
  
function wpb_login_logo_url_title() {
    return 'Intuit Content Design';
}
add_filter( 'login_headertitle', 'wpb_login_logo_url_title' );

/* after login rediret to previous page */
add_action( 'wp', 'get_before_login_url' );
function get_before_login_url(){
    if( !is_user_logged_in() ):
    $_SESSION['referer_url'] = get_the_permalink();
    endif;
}

/*@ After successful login redirect */
?>



