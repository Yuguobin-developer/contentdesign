<?php
/*
Template Name: Abolish
*/

get_header();

// ACF Fields
$frames = get_field( 'frames' );
$above_parts = get_field( 'above_part' );
$below_parts = get_field( 'below_part' );
$lottie_json = get_field( 'lottie_json' );
?>

<div id="main">

    <div id="fullpage-general" style="padding-bottom: 100px">
        <div class="section top-section">
            <div class="stactic-section" style="">
				
		<?php if (function_exists('tsh_wp_custom_breadcrumbs')) tsh_wp_custom_breadcrumbs(); ?>
                <h1 class="entry-title">Ai-racist language</h1>
                <div class="nav-bar"></div>
                    <?php 
                        while ( have_posts() ) :
                            the_post();
                            get_template_part( 'template-parts/content', 'page' );
                        endwhile;
                    ?>
                <?php foreach ( $above_parts as $above_part ) : ?>
                    <?php echo $above_part['multi_block']; ?>
                <?php endforeach; ?>                
            </div>
        </div>        
        <?php $datas = get_field('general_slider_setting');
        ?>
        <div class="section anim-section position-relative desk-animation">
            <div class="wrapper">
                <?php if ( !empty( $frames ) ) : ?>
                    <div class="content-wrapper">
                        <!-- <div style="height: 50vh;"></div> -->
                        <?php foreach ( $frames as $inx => $item ) : ?>
                            <div id="anim<?php echo $inx; ?>" class="anim-item d-flex align-items-md-center">
                                <div>
                                    <div class="title-area">
                                        <?php echo $item['title']; ?>
                                    </div>
                                    <div class="desc-area">
                                        <?php echo $item['description']; ?> 
                                    </div>
                                </div>
                            </div>        
                        <?php endforeach; ?> 
                        <!-- <div style="height: 50vh;"></div> -->
                    </div>
                <?php endif; ?>

                <?php if ( $lottie_json ) : ?>
                    <div class="lottie-wrapper">
                        <div class="lottie-pin">
                            <lottie-player id="animLottie" src="<?php echo esc_url( $lottie_json ); ?>" background="transparent"></lottie-player>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <div class="mobile-animation" style="display:none;">
        <?php foreach ($datas as $data) { ?>
            <div class="section slider-sec" style="background-color: <?php echo $data['background_color']; ?>" style="height: 100vh">
                <div class="row each-image-slider">
                    <div class="content-area" style="width: 50%">
                      <div style="display: flex; height: 100%;">
                        <div style="margin-left: auto;  margin-top: auto; margin-bottom: auto;">
                          <div class="title-area">
                              <?php echo $data['title']; ?>
                          </div>
                          <div class="desc-area">
                              <?php echo $data['description']; ?> 
                          </div>
                          </div>
                      </div>
                    </div>
                    <div class="image-area" style="width: 50%">                
                        <img src="<?php echo $data['image']['url']; ?>" alt="image">
                    </div>
                </div>
            </div>        
        <?php } ?>
        </div>

        <div class="section bottom-section">
            <div class="stactic-section pb-0">
                <?php foreach ( $below_parts as $below_part ) : ?>
                    <?php echo $below_part['multi_block']; ?>

                    <?php if ( $below_part['example'] ) : ?>
                        <div class="resource">
                            <?php echo $below_part['example']; ?>
                        </div>
                    <?php endif; ?>
                    <?php if ( $below_part['resource'] ) : ?>
                        <div class="resource-1">
                            <?php echo $below_part['resource']['title'] ; ?>
                            <?php echo $below_part['resource']['small_title']; ?>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>                        
            </div>

            <?php foreach ( $below_parts as $below_part ) : ?>
                <?php if ( $below_part['full_side'] ) : ?>                
                    <!-- wp:columns {"align":"full"} -->
                    <div class="wp-block-columns alignfull"><!-- wp:column -->
                        <div class="wp-block-column"><!-- wp:content-design/do -->
                            <img src="<?php echo $below_part['full_side']['left_image']; ?>" style="display:block;margin-bottom:16px; margin-top: 16px;"/>
                            <?php echo $below_part['full_side']['description_left']; ?>
                        </div>
                        <div class="wp-block-column"><!-- wp:content-design/do -->
                            <img src="<?php echo $below_part['full_side']['right_image']; ?>" style="display:block;margin-bottom:16px; margin-top: 16px;"/>
                            <?php echo $below_part['full_side']['description_right']; ?>
                        </div>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>

        <div class="button-next"></div>
    </div>
    <a href="javascript:" id="return-to-top"><img src="https://contentdesign.intuit.com/wp-content/themes/content-design/public/assets/svgs/arrow.svg"></a>  
</div>

<style type="text/css">
    .page-template-template-abolish #main .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: .3s opacity;
        transform: translate3d(0,0,0);
        z-index: 10;
        background-image: url('/wp-content/themes/content-design/public/assets/arrow.svg');
        height: 30px;
        width: 30px;
        margin-top: calc(0vh - 50px);
        background-size: cover;
        right: 50%;
        bottom: 10%;
    }
    .page-template-template-abolish #main .section .fp-tableCell {
        position: relative;
    }
    .page-template-template-abolish #main header {
        display: none;
    }    
    .page-template-template-abolish #main .alignfull {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    .page-template-template-abolish #main article {
        padding: 0; 
        margin-top: -90px;
    }
    .page-template-template-abolish #main .section {
        display: none;
        padding-top: 0;
    }
    .page-template-template-abolish #main .section:first-of-type {
        display: block;
    }
    .page-template-template-abolish #main .section h2 {
        color: #393a3d;
        padding-top: 0;
        padding-bottom: 0;
    }
    .page-template-template-abolish #main .section .stactic-section h2 {
        padding-top: 92px; 
        padding-bottom: 64px;
    }
    .page-template-template-abolish #main .title-area h2 {
        font-size: 32px;
        line-height: 42px;
    }
    .page-template-template-abolish #main .wp-block-column ul li {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
        line-height: 30px;
    }
    .page-template-template-abolish #main .button-next {
        display: none;
        background-image: url(/wp-content/themes/content-design/public/assets/arrow.svg);
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-size: cover;
        top: calc(100vh - 110px);
        right: 50%;
        position: absolute;
    }
    .page-template-template-abolish #main article .entry-content > * {
        max-width: unset;
    }
    .page-template-template-abolish #main #fullpage-general .section h1 {
        color: #393a3d;
    }    
    .page-template-template-abolish #main .fullpage-wrapper {
        width: 100%;
        transform: none; 
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        visibility: hidden;
        height: 100vh;
        opacity: 0;
        transition: all 0.25s 0.25s ease-in-out; 
        -webkit-transition: all 0.25s 0.25s ease-in-out; 
        -moz-transition: all 0.25s 0.25s ease-in-out; 
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section.active {
        visibility: visible;
        opacity: 1;
        z-index: 1; 
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section.active .title-area {
        opacity: 1;
        visibility: visible;
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section.active .desc-area {
        opacity: 1;
        visibility: visible;
        bottom: 0;
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section .fp-slidesContainer {
        width: 100%;
        transform: none; 
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section .fp-slidesContainer .fp-slide {
        width: 100%;
        left: 0;
        top: 0;
        visibility: hidden;
        opacity: 0;
        z-index: 0;
        transition: all 0.25s 0.25s ease-in-out; 
    }
    .page-template-template-abolish #main .fullpage-wrapper .fp-section .fp-slidesContainer .fp-slide.active {
        visibility: visible;
        opacity: 1;
        z-index: 1; 
    }
    .page-template-template-abolish #main .stactic-section {
        max-width: 688px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 58px;
    }
    .page-template-template-abolish #main .logged-in .stactic-section {
        margin-top: 0;
    }
    .page-template-template-abolish #main .stactic-section .resource {
        background-color:#f4f5f8;
        padding: 30px;
        margin-top: 12px;
        margin-bottom: 12px;
        border-radius: 8px;
    }
    .page-template-template-abolish #main .stactic-section .resource-1 {
        border: 1px solid #BABEC5;
        border-radius: 8px;
        padding: 30px;
        padding-bottom: 24px;
        margin-top: 60px !important;
    }
    .page-template-template-abolish #main .stactic-section .resource-1 h3 {
        margin: 0 !important;
        color: #393A3D;
        font-size: 20px !important;
        padding: 0px !important;
    }
    .page-template-template-abolish #main .stactic-section .resource-1 ul li {
        padding-top: 6px !important;
        padding-bottom: 6px !important;
    }
    .page-template-template-abolish #main .stactic-section .resource ul {
        margin-left: 0;
        padding-left: 22px;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
    }
    .page-template-template-abolish #main .stactic-section .resource ul li {
        padding-top: 0;
        padding-bottom: 20px;
    }
    .page-template-template-abolish #main .stactic-section .resource ul li:before {
        width: 0.7rem;
        margin-right: 10px; 
    }
    .page-template-template-abolish #main .stactic-section .resource ul li:last-child {
        padding-bottom:0;
    }
    .page-template-template-abolish #main .entry-header {
        max-width: 688px;
        margin-left: auto;
        margin-right: auto;
    }
    .page-template-template-abolish #main .anim-section .wrapper {
        display: flex;
        width: 100%;
        position: relative;
    }
    .page-template-template-abolish #main .anim-item {
        height: 80vh;
        opacity: 0;
        transition: opacity 0.5s ease-out;
        -webkit-transition: opacity 0.5s ease-out;
        -moz-transition: opacity 0.5s ease-out;
    }
    .page-template-template-abolish #main .anim-item:first-child,
    .page-template-template-abolish #main .anim-item:last-child {
        height: 100vh;
    }
    .page-template-template-abolish #main .anim-item.entered {
        opacity: 1;
    }
    .page-template-template-abolish #main .title-area {
        padding-bottom: 0;
    }
    .page-template-template-abolish #main .desc-area {
        position: relative;
    }
    .page-template-template-abolish #main .anim-section .content-wrapper,
    .page-template-template-abolish #main .anim-section .lottie-wrapper {
        width: 100%;
    }        
    .page-template-template-abolish #main .anim-section .content-wrapper {
        z-index: 1;
    }    
    .page-template-template-abolish #main .anim-section .lottie-wrapper .lottie-pin {
        width: 500px; 
        height: 100vh;
        display: block;
        box-sizing: border-box;
        position: sticky;
        top: 0;
    }

    @media (min-width: 1024px) {
        .page-template-template-abolish #main .stactic-section .wp-block-column {
            width: 50%;
        }
        .page-template-template-abolish #main .anim-section .wrapper {
            /* max-width: 830px; */
            width: 940px;
            margin: auto;            
        }
        .page-template-template-abolish #main .anim-section .content-wrapper {
            width: 437px;
        }
        .page-template-template-abolish #main .anim-section .lottie-wrapper {
            /* /* position: absolute; */
            width: calc(100% - 437px);  
            /* left: 437px;
            top: 0; */
            /* width: 100%;
            position: absolute;
            left: 0;
            top: 0; */
        }        
    }

    @media (max-width: 1023px) {
        .page-template-template-abolish #main .wp-block-navigation {
            position: relative;
            margin-left: 0;
            margin-top: -1.5rem;
            transition: none;
        }
        .page-template-template-abolish #main .stactic-section .wp-block-column {
            margin-left: 0;
        }
        .page-template-template-abolish #main .anim-section .content-wrapper {
            padding-left: 15px; 
            padding-right: 15px; 
        }
        .page-template-template-abolish #main .anim-section .content-wrapper,
        .page-template-template-abolish #main .anim-section .lottie-wrapper {
            width: 50%;
        }
        .page-template-template-abolish #main .anim-section .lottie-wrapper .lottie-pin {
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        .page-template-template-abolish #main .stactic-section, 
        .page-template-template-abolish #main .alignfull {
            padding-right: 15px;
            padding-left: 15px;
        }
        .page-template-template-abolish #main .swiper-pagination {
            display: none;
        }
        .page-template-template-abolish #main .content-design-page .content-design-container {
            width: 100%;
        }
        .page-template-template-abolish #main .button-next {
            background-image: none;
        }
        .page-template-template-abolish #main .wp-block-navigation {
            margin-left: 0;
        }
        .page-template-template-abolish #main .anim-section .wrapper {
            flex-direction: column;
        }
        .page-template-template-abolish #main .anim-section .content-wrapper {
            order: 1;
        }
        .page-template-template-abolish #main .anim-section .lottie-wrapper {
            position: sticky;
            top: 0;
            order: 0;
            z-index: 0;                        
        }
        .page-template-template-abolish #main .anim-section .content-wrapper,
        .page-template-template-abolish #main .anim-section .lottie-wrapper {
            width: 100%;
        }
    }

    /* @media (max-height: 450px) {
        .page-template-template-abolish #main .section .fp-tableCell .fp-scrollable .fp-scroller {
            transform: translate(0px, -66px) translateZ(0px);
        }
        .page-template-template-abolish #main .anim-item {
            margin-top: 58px;
        }
        .page-template-template-abolish #main .logged-in .anim-item {
            margin-top: 0;
        }
        .page-template-template-abolish #main .title-area {
            padding-bottom: 0;
        }
        .page-template-template-abolish #main .title-area h2 {
            font-size: 28px;
            line-height: 36px;
        }
        .page-template-template-abolish #main .content-design-page .content-design-container {
            width: 100%;
        }
        .page-template-template-abolish #main h3 {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .page-template-template-abolish #main .fixed_1 {
            position: fixed;
            top:0; right:0;
            z-index: 10;
            margin-top: 58px;
            transition: 1s;
        }
    }     */

    @media (max-width: 450px) {
        .page-template-template-abolish #main .anim-item {
            margin-top: 58px;
            flex-direction: column-reverse;
        }
        .page-template-template-abolish #main .logged-in .anim-item {
            margin-top: 0;
        }
        .page-template-template-abolish #main .title-area {
            padding-bottom: 0;
        }
        .page-template-template-abolish #main .title-area h2 {
            font-size: 28px;
            line-height: 36px;
        }
        .page-template-template-abolish #main .content-design-page .content-design-container {
            width: 100%;
        }
        .page-template-template-abolish #main h3 {
            padding-top: 20px;
            padding-bottom: 20px;
        }
        .page-template-template-abolish #main .fixed_1 {
            position: fixed;
            top:0; 
            right:0;
            z-index: 10;
            margin-top: 58px;
            transition: 1s;
        }
    }    


    @media (min-width: 1025px) {
        .stactic-section .wp-block-column {
            width: 50%;
        }

        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
            max-width: 512px;
            width: calc(100vw - 512px);
            height: 100vh;
        }        
        #fullpage-general .section .image-area img {
            width: auto;
            max-height : 100%;
            height: calc(100vh - 75px);
            margin: auto;
        }
        .desc-area p {
            width: 437px;
        }
        .title-area *{
            width: 437px;
        }
        
        .title-area {
            /*visibility: hidden;
            opacity: 0;*/
            transition: all 0.5s 0.75s ease-in-out;
            padding-bottom: 0px !important;
        }

        .desc-area {
            position: relative;
            bottom: -10px;
            /*visibility: hidden;
            opacity: 0;*/
            transition: all 0.25s 1.25s ease-in-out;
        }
    }

    @media (min-width: 1112px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
            max-width: 534px;
        }        
        #fullpage-general .section .image-area img {
            width: auto;
            max-height : 100%;
            height: calc(100vh - 75px);
            margin: auto;
        }
    }

    @media (min-width: 1366px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
            max-width: 760px;
            width: calc(100vw - 578px);
        }        
    }

    @media (min-width: 1440px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
            max-width: 850px;
            width: calc(100vw - 578px);
        }        
    }

    @media (min-width: 1899px) {
        .each-image-slider .content-area {
            max-width: 651px;
            padding-left: 107px;
            padding-right: 20px;
            margin-left: 150px;
        }
        .each-image-slider .image-area {
            max-width: 1250px;
        }        
    }

    @media (max-width: 1025px) {
        .each-image-slider .content-area {
            max-width: initial;
        }
        .each-image-slider .image-area {
            max-width: 100%;
            padding-top: 5%;
        }        
        #fullpage-general .section .image-area img {
            margin-top: unset;
            max-width: 100%;
        }
        .page-template-default .each-image-slider {
            height: calc(100vh) !important;
        }

        .wp-block-navigation {
            position: absolute;
            top: 0;
            margin-left: 1rem !important;
        }

        .wp-block-navigation {
            position: relative;
            margin-left: 0 !important;
            margin-top: -1.5rem !important;
            transition: none !important;
        }

        .stactic-section .wp-block-column {
            margin-left: 0 !important;
        }
    }

    @media (max-width : 1025px) and (min-width: 769px) {
        .content-area {
            padding-left: 20px; 
            padding-right: 20px; 
        }
    }

    @media (max-width: 1025px) {
        .entry-content {
            margin-top: 140px;
            margin-bottom: -60px;
        }
        .page-template-template-abolish #main article {
            height: 180px;
        }
        /*.wp-block-navigation::before {
            padding-left: 16px;
        }*/
        .stactic-section, .alignfull {
            padding-right: 15px;
            padding-left: 15px;
        }
        .desk-animation {
            display: none !important;
        }
        .mobile-animation {
            display: block !important;
        }
        .swiper-pagination {
            display: none;
        }
        .content-design-page .content-design-container {
            width: 100%;
        }
        #fullpage-general .content-area {
            padding-left: 84px;
            padding-right: 84px;
        }
        .image-area {
            display: flex;
        }
        .image-area img {
            margin-right: auto;
            margin-left: auto;
        }
        .each-image-slider{
            flex-direction: column-reverse;
        }
        .each-image-slider .content-area {
        width: 100% !important;
        }
        .each-image-slider .image-area  {
        width: 100% !important;
        }
        .each-image-slider .content-area {
            /*position: absolute;*/
            /*margin-top: 55vh !important;*/
            margin-left: 0% !important;
            margin-right: 0% !important;
        }
        #fullpage-general .section .image-area img {
            margin-top: unset;
            max-width: 100%;
        }
        #fullpage-general .section .image-area {
                display: flex;
                height: 50vh;
                max-height: 50vh;
                overflow-y: hidden;
                margin-top: 20px;
            }
        #fullpage-general .section .image-area img {
            height: 100vh;
            max-width: 100%;
            margin-left: auto;
            margin-top: -28vh;
        }
        .button-next {
            background-image: none;
        }

        .wp-block-navigation {
            margin-left: 0rem !important;
        }
    }

    @media (max-height: 450px) {
        .section .fp-tableCell .fp-scrollable .fp-scroller{
             transform: translate(0px, -66px) translateZ(0px) !important;
        }
        .each-image-slider {
            margin-top: 58px;
        }
        .logged-in .each-image-slider {
            margin-top: 0px;
        }
        .each-image-slider .content-area {
            /*position: absolute;
            margin-top: 170px !important;*/
        }
        .title-area {
            padding-bottom: 0px !important;
        }
        .title-area h2 {
            font-size: 28px !important;
            line-height: 36px !important;
        }
        .content-design-page .content-design-container {
            width: 100%;
        }
        #fullpage-general .content-area {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 40px;
        }
        h3 {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
        }
        #fullpage-general .section .image-area {
            display: flex;
            height: 170px;
            margin-top: 1px
            
        }

        #fullpage-general .section .image-area img {
            margin: auto;
        }
        #fullpage-general .section .image-area img {
            width: 234px;
        height: 549px;
        max-width: 100%;
        margin-left: auto;
        margin-top: -199px;
        }

        .fixed_1 {
            position: fixed;
            top:0; right:0;
            z-index: 10;
            margin-top: 58px !important;
            transition: 1s !important;
        }
    }


    @media (max-width: 450px) {
        .stactic-section {
            /*height: 50rem !important;*/
        }
        .each-image-slider {
            margin-top: 58px;
            flex-direction: column-reverse;
        }
        .logged-in .each-image-slider {
            margin-top: 0px;
        }
        .each-image-slider .content-area {
            /*margin-top: 170px !important;*/
        }
        .title-area {
            padding-bottom: 0px !important;
        }
        .title-area h2 {
            font-size: 28px !important;
            line-height: 36px !important;
        }
        .content-design-page .content-design-container {
            width: 100%;
        }
        #fullpage-general .content-area {
            padding-left: 20px;
            padding-right: 20px;
        }
        h3 {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
        }
        #fullpage-general .section .image-area {
            display: flex;
            height: 170px;
            margin-top: 1px
            
        }

        #fullpage-general .section .image-area img {
            margin: auto;
        }
        #fullpage-general .section .image-area img {
            width: 234px;
        height: 549px;
        max-width: 100%;
        margin-left: auto;
        margin-top: -199px;
            transform: scale(1.5);
        }

        .fixed_1 {
            position: fixed;
            top:0; right:0;
            z-index: 10;
            margin-top: 58px !important;
            transition: 1s !important;
        }
        #our-principles, #harmful-words, #specific-word-guidance {
            padding-top: 60px !important;
        }
    }

    @media (min-height: 900px){
        #our-principles {
            margin-bottom: -40px !important;
        }
        #harmful-words {
            margin-top: -40px !important;
        }
    }
    @media (min-height: 1100px){
        #our-principles {
            margin-bottom: -100px !important;
        }
        #harmful-words {
            margin-top: -100px !important;
        }
    }
    @media (min-height: 1200px){
        #our-principles {
            margin-bottom: -150px !important;
        }
        #harmful-words {
            margin-top: -150px !important;
        }
    }
    @media (min-height: 1300px){
        #our-principles {
            margin-bottom: -200px !important;
        }
        #harmful-words {
            margin-top: -200px !important;
        }
    }
    @media (min-height: 1400px){
        #our-principles {
            margin-bottom: -250px !important;
        }
        #harmful-words {
            margin-top: -250px !important;
        }
    }
    @media (min-height: 1500px){
        #our-principles {
            margin-bottom: -300px !important;
        }
        #harmful-words {
            margin-top: -300px !important;
        }
    }
    @media (min-height: 1600px){
        #our-principles {
            margin-bottom: -350px !important;
        }
        #harmful-words {
            margin-top: -350px !important;
        }
    }
    @media (min-height: 1700px){
        #our-principles {
            margin-bottom: -400px !important;
        }
        #harmful-words {
            margin-top: -400px !important;
        }
    }
    @media (min-height: 1800px){
        #our-principles {
            margin-bottom: -450px !important;
        }
        #harmful-words {
            margin-top: -450px !important;
        }
    }
    @media (min-height: 1900px){
        #our-principles {
            margin-bottom: -500px !important;
        }
        #harmful-words {
            margin-top: -500px !important;
        }
    }
    @media (min-height: 1900px){
        #our-principles {
            margin-bottom: -550px !important;
        }
        #harmful-words {
            margin-top: -550px !important;
        }
    }
</style>

<script type="text/javascript">
    setTimeout( function(){ $(".section").show(); }, 500 );

    $(document).ready(function() {
        // init controller
        var controller = new ScrollMagic.Controller();

        $('.anim-item').each(function(inx) {            
            var $elem = $(this);
            var triggerElement = '#' + $elem.attr('id');
            var triggerHeight = $(triggerElement).outerHeight();   
            var len = $('.anim-item').length;
            var duration = triggerHeight;
            var offset = 0;  
            var triggerHook = 0;
            
            if ( $(window).width() < 768 ) {
                triggerHook = 0.5;
            }

            if (inx == 0) {
                // duration = triggerHeight - $(window).height() / 2;
                offset = -$(window).height() * 0.5;
            } else if (inx == len - 1) {
                offset = -$(window).height() * 0.7;
            } else {
                offset = -$(window).height() * 0.6;
            }

            new ScrollMagic.Scene({
                triggerElement: triggerElement,
                triggerHook: triggerHook,
                duration: duration,
                offset: offset
            })
            .setClassToggle(triggerElement, "entered")
            // .addIndicators({'name': 'box pin'}) // add indicators (requires plugin)
            .addTo(controller);
        });

        // var scrollHeight = $(".anim-section").outerHeight() - $($('.anim-item')[0]).outerHeight() + $(window).height() / 2;              
        
        // new ScrollMagic.Scene({
        //     triggerElement: ".lottie-wrapper",
        //     triggerHook: 0,
        //     duration: scrollHeight
        // })
        // .setPin(".lottie-pin")
        // .setClassToggle(".lottie-wrapper", "pinned")
        // .addIndicators({name: "Pin Trigger"}) // add indicators (requires plugin)
        // .addTo(controller);

        var anim = LottieInteractivity.create({
            player: '#animLottie',
            mode: 'scroll',
            container: ".anim-section",
            actions: [
                {
                    visibility: [0, 0.07],
                    type: "stop",
                    frames: [0]
                },
                {
                    visibility: [0.07, 0.95],
                    type: "seek",
                    frames: [0, 1050]
                },
                {
                    visibility: [0.95, 1.0],
                    type: "stop",
                    frames: [1050]
                },
            ]
        });

        const player = document.querySelector('lottie-player');

        player.addEventListener('frame', function(event) {
            // console.log(event.target.shadowRoot.querySelector('svg').style.transform);
            event.target.shadowRoot.querySelector('svg').style.transform = 'scale(1.2)';
        });
    }); 
</script>

<?php
get_footer();