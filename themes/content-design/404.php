<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Content_Design
 */

get_header();
?>

  	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="content-box">
				<div class="text-box">
					<h1 class="entry-title">404 </h1>
					<p>Let’s get you back on the right path.</p>
					 <a class="my_animation" href="/">Head home</a><br/>
				</div>	      
				<div class="image-box">
					<img src="/wp-content/uploads/2021/06/Art.svg" />
				</div>
			</div>
		</main><!-- .site-main -->
	</div><!-- .content-area -->
<?php
//get_sidebar();
get_footer(); ?>
<style type="text/css">
	@media (max-width: 768px) {
		.content-box {
			padding-left: 30px;
			padding-right: 30px;
		}
	}
	.content-box .text-box {
	  margin: auto;
	  max-width: 688px;
	}
	.content-box .image-box {
		margin: auto;
		max-width: 1000px;
		padding-top: 50px;
		padding-bottom: 50px;
	}
	.content-box .text-box p {
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 30px;
		color: #393A3D;
	}
	.content-box .text-box a {
	  text-decoration: underline;
	  color: #c9007a;
		line-height: 30px;
	}

</style>