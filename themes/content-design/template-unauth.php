<?php
/*
Template Name: Abolish
*/


get_header();
?>
<div id="main">
    
    <div class="unauthorized-page">
        <h1>Unauthorized Page</h1>
        <p>You need to sign in to access this page.</p>
        <a href="<?php echo wp_login_url(); ?>" class="button">Sign in</a>
    </div>
</div>


<?php
//get_sidebar();
get_footer();
