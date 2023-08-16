<?php
/*
Template Name: Abolish-c
*/


//get_header();
get_header('community');
?>
<div id="main">
    <?php 
        while ( have_posts() ) :
            the_post();
            get_template_part( 'template-parts/content', 'community' );
        endwhile;
    ?>
    <div id="fullpage-general" style="">
        <?php $datas = get_field('general_slider_setting');
         $above_parts = get_field('above_part');
         $below_parts = get_field('below_part');
        ?>

        <div class="section" style="height:100vh;">

            <div class="stactic-section" style="height:100%;">
                <div class="nav-bar"></div>
                <?php foreach ($above_parts as $above_part) { 
                     if($above_part['community_hero_image']) { ?>
                        <div class="community_hero_image">
                            <div class="row main-content" style="margin: auto;">
                                <div class="col-12 title-text">     
                                    <div class="title_wrap">
                                        <?php echo $above_part['community_hero_image']['title']; ?> 
                                    </div>
                                    <div class="description_wrap">
                                        <?php echo $above_part['community_hero_image']['description'];  ?>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                <?php }
                } ?>
                
            </div>

        </div>
        <?php foreach ($datas as $data) { ?>
            <div class="section slider-sec" style="background-color: <?php echo $data['background_color']; ?>" style="height: 100vh; margin-top:58px;">
                <div class="row each-image-slider">
                    <div class="content-area" >
                      <div style="display: flex; height: 100%;">
                        <div style="margin: auto;">
                          <div class="title-area">
                              <?php echo $data['title']; ?>
                          </div>
                          <div class="desc-area">
                              <?php echo $data['description']; ?> 
                                <a href="<?php echo $data['link']['url']; ?>" class="slider-link" style="font-size: 20px; color: #C9007A; text-decoration: underline;"><?php echo $data['link']['title'] ; ?></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="image-area">                
                        <img src="<?php echo $data['image']['url']; ?>" alt="image">
                    </div>
                </div>
            </div>        
        <?php } ?>

        <div class="section" style="padding: 5rem 0;">

            <div class="stactic-section pb-0">

                <?php 
                    foreach ($below_parts as $below_part) {
                        ?>

                    <?php if($below_part['example']) { ?>
                        <div class="resource">
                            <?php 
                             echo $below_part['example']; ?>
                        </div>
                <?php }
                    } 
                ?>                        
            </div>

            <?php 
                foreach ($below_parts as $below_part) { 
            ?>

                <?php if ($below_part['full_side'])  { ?>
                    
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

                <?php   }

                if ($below_part['community_2_col_images'])  { ?>
                    
                <div class="row image-text-part-two">
                    <div class="col-sm-6">       
                        <div class="com-image-text-one com-image-text-left">
                            <div class="img_wrap">
                                <img src="<?php echo $below_part['community_2_col_images']['left_image']['url'];?>" alt="image"  >
                            </div>
                            <div class="text_wrap text_wrap_left">
                                <?php echo $left_title = $below_part['community_2_col_images']['left_title']; ?>
                                <?php echo $left_text = $below_part['community_2_col_images']['left_text']; ?>
                                
                                <div style="margin-top: 12px !important;"><a href="<?php echo $left_link = $below_part['community_2_col_images']['left_link']['url']; ?>"><?php echo $left_link = $below_part['community_2_col_images']['left_link']['title']; ?></a></div> 
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 sec-one">      
                        <div class="com-image-text-two com-image-text-right" >
                            <div class="img_wrap">
                                <img src="<?php echo $right_image = $below_part['community_2_col_images']['right_image']['url'];?>"  alt="image"  >
                            </div>
                            <div class="text_wrap text_wrap_right">
                                <div class="text_wrap_contents">
                                    <?php echo $left_title = $below_part['community_2_col_images']['right_title']; ?>
                                    <?php echo $left_text = $below_part['community_2_col_images']['right_text']; ?>
                                    
                                    <div style="margin-top: 12px !important;"><a href="<?php echo $right_link = $below_part['community_2_col_images']['right_link']['url']; ?>"><?php echo $right_link = $below_part['community_2_col_images']['right_link']['title']; ?></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <?php   }
                if ($below_part['community_3_col_images'])  {  ?>
                    
                <div class="community-3column-image">
                    <div class="">
                        <div class="row">
                            <div class="col-sm-12 articles-title">
                                <?php echo $left_text = $below_part['community_3_col_images']['article_title']; ?>
                            </div>
                        </div>
                        <div class="article-line">
                            <div class="hr"></div>
                        </div>
                        <div class="row articles_three_col">
                            <div class="col-sm-4 fir-part">     
                                <a class="com-each-section" href="<?php echo $left_text = $below_part['community_3_col_images']['article_i']['link']['url']; ?>">
                                    <div class="com-each-section" >
                                        <div class="img_wrap">
                                            <img src="<?php echo $left_image = $below_part['community_3_col_images']['article_i']['image']['url'];?>" alt="icon">
                                        </div>
                                        <div class="text_wrap">
                                            <div class="">
                                                <?php echo $left_title = $below_part['community_3_col_images']['article_i']['title']; ?>                    
                                            </div>
                                            <div class="content">
                                                <?php echo $left_text = $below_part['community_3_col_images']['article_i']['content']; ?>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="home-each-section" style="display: none;">
                                    <div class="img_wrap">
                                        <img src="<?php echo $left_image = $below_part['community_3_col_images']['article_i']['image']['url'];?>" alt="icon">
                                    </div>
                                    <div class="text_wrap">
                                        <div class="title">
                                            <?php echo $left_title = $below_part['community_3_col_images']['article_i']['title']; ?>                    
                                        </div>
                                        <div class="content">
                                            <?php echo $left_text = $below_part['community_3_col_images']['article_i']['content']; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 sec-part">     
                                <a class="com-each-section" href="<?php echo $left_text = $below_part['community_3_col_images']['article_ii']['link']['url']; ?>">
                                    <div class="com-each-section" >
                                        <div class="img_wrap">
                                            <img src="<?php echo $center_image = $below_part['community_3_col_images']['article_ii']['image']['url'];?>" alt="icon">
                                        </div>
                                        <div class="text_wrap">
                                            <div class="">
                                                <?php echo $center_title = $below_part['community_3_col_images']['article_ii']['title']; ?>                 
                                            </div>
                                            <div class="content">
                                                <?php echo $center_text = $below_part['community_3_col_images']['article_ii']['content']; ?>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="home-each-section" style="display: none;">
                                    <div class="img_wrap">
                                        <img src="<?php echo $center_image = $below_part['community_3_col_images']['article_ii']['image']['url'];?>" alt="icon">
                                    </div>
                                    <div class="text_wrap">
                                        <div class="title">
                                            <?php echo $center_title = $below_part['community_3_col_images']['article_ii']['title']; ?>                 
                                        </div>
                                        <div class="content">
                                            <?php echo $center_text = $below_part['community_3_col_images']['article_ii']['content']; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 third-part">       
                                <a class="com-each-section" href="<?php echo $left_text = $below_part['community_3_col_images']['article_iii']['link']['url']; ?>" >
                                    <div class="com-each-section" >
                                        <div class="img_wrap">
                                            <img src="<?php echo $right_image = $below_part['community_3_col_images']['article_iii']['image']['url'];?>" alt="icon">
                                        </div>
                                        <div class="text_wrap">
                                            <div class="">
                                                <?php echo $right_title = $below_part['community_3_col_images']['article_iii']['title']; ?>         
                                            </div>
                                            <div class="content">
                                                <?php echo $right_text = $below_part['community_3_col_images']['article_iii']['content']; ?>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div class="home-each-section" style="display: none;">  
                                    <div class="img_wrap">
                                        <img src="<?php echo $right_image = $below_part['community_3_col_images']['article_iii']['image']['url'];?>" alt="icon">
                                    </div>
                                    <div class="text_wrap">
                                        <div class="title">
                                            <?php echo $right_title = $below_part['community_3_col_images']['article_iii']['title']; ?>         
                                        </div>
                                        <div class="content">
                                            <?php echo $right_text = $below_part['community_3_col_images']['article_iii']['content']; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <?php   }

                if ($below_part['community_1_col_image'])  {  ?>
                    <div class="component-container" style="background-color: <?php echo $com_background = $below_part['community_1_col_image']['com_background'];?>" id="<?php echo uniqid();?>">
                        <div class="row image-text-part-one" style="margin: auto;">
                            <div class="col-12">        
                                <div class="com-image-text" >
                                    <div class="text_wrap" style="width: 100%;">
                                        <?php 
                                        echo $com_title = $below_part['community_1_col_image']['com_title']; 
                                         echo $com_text = $below_part['community_1_col_image']['com_text'];  ?>
                                    <a href="<?php echo $com_link = $below_part['community_1_col_image']['com_link']['url']; ?>"><?php echo $com_link = $below_part['community_1_col_image']['com_link']['title']; ?></a> 
                                    </div>
                                    <div class="img_wrap">
                                        <img src="<?php echo $com_image = $below_part['community_1_col_image']['com_image']['url'];?>" alt="community image"  loading=”lazy”>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php   }

                if ($below_part['multi_block'])  {  ?>
                    <div class="alignwide">        
                        <div class="com-last-text" >
                            <?php 
                                echo $below_part['multi_block']; 
                            ?>
                        </div>
                    </div>
                <?php   }
                }
            ?>
        </div>

        <div class="button-next"></div>
    </div>
    <a href="javascript:" id="return-to-top"><img src="https://contentdesign.intuit.com/wp-content/themes/content-design/public/assets/svgs/arrow.svg"></a>  
</div>
<style type="text/css">
    .swiper-pagination {
        position: absolute;
        text-align: center;
        transition: .3s opacity;
        transform: translate3d(0,0,0);
        z-index: 10;
        background-image: url('/wp-content/themes/content-design/public/assets/arrow.svg');
        height: 30px;
        width: 30px;
        /*margin-top: calc(0vh - 50px);*/
        background-size: cover;
        right: 50%;
        bottom: 10%;
    }
	.slider-sec .swiper-pagination {
		background-image: none;
	}
    .mobile {
        display: none;
    }
    .section .fp-tableCell {
        position: relative;
    }

    header {
        display: none;
    }
    #main {
        min-height:  calc(100vh);
    }
    #main .alignfull {
        max-width: 1000px !important;
        margin-left: auto;
        margin-right: auto;
    }
    article {
        padding: 0px !important; 
        /*margin-top: -90px !important;*/
    }
    .section {
        padding-top: 0px !important;
    }
    .button-next {
        display: none;
    }

    .slider-sec .button-next {
        display: none;
    }


    .button-next {
        background-image: url(/wp-content/themes/content-design/public/assets/arrow.svg);
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-size: cover;
        top: calc(100vh - 110px);
        right: 50%;
        position: absolute;
    }

    .title-area {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s 0.75s ease-in-out;
        padding-bottom: 0px !important;
    }

    .desc-area {
        position: relative;
        bottom: -10px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.25s 1.25s ease-in-out;
    }

    #main article .entry-content>* {
        max-width: unset !important;
    }

    #fullpage-general .section h1 {
        color: #393a3d;
    }

    .fullpage-wrapper {
        width: 100% !important;
        transform: none !important; 
    }

    .fullpage-wrapper .fp-section {
        width: 100% !important;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
        visibility: hidden;
        height: 100vh;
        opacity: 0;
        transition: all 0.25s 0.25s ease-in-out; 
    }

    .fullpage-wrapper .fp-section.active {
        visibility: visible;
        opacity: 1;
        z-index: 1; 
    }

    .fullpage-wrapper .fp-section.active .content-area .title-area {
        opacity: 1;
        visibility: visible;
    }

    .fullpage-wrapper .fp-section.active .content-area .desc-area {
        opacity: 1;
        visibility: visible;
        bottom: 0;
    }

    .fullpage-wrapper .fp-section .fp-slidesContainer {
        width: 100% !important;
        transform: none !important; 
    }

    .fullpage-wrapper .fp-section .fp-slidesContainer .fp-slide {
        width: 100% !important;
        /* position: absolute; */
        left: 0;
        top: 0;
        visibility: hidden;
        opacity: 0;
        z-index: 0;
        transition: all 0.25s 0.25s ease-in-out; 
    }

    .fullpage-wrapper .fp-section .fp-slidesContainer .fp-slide.active {
        visibility: visible;
        opacity: 1;
        z-index: 1; 
    }

    .stactic-section {
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 5rem;
        margin-top: 58px;
    }
    .logged-in .stactic-section {
        margin-top: 0px;
    }

    .stactic-section .resource {
        background-color:#f4f5f8;
        padding: 30px;
        margin-top: 12px;
        margin-bottom: 12px;
        border-radius: 8px;
    }

    .stactic-section .resource ul {
        margin-left: 0;
        padding-left: 22px;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
    }

    .stactic-section .resource ul li {
        padding-top: 0px !important;
        padding-bottom: 20px !important;
    }

    .stactic-section .resource ul li:before {
        width: 0.7rem !important;
        margin-right: 10px !important; 
    }

    .stactic-section .resource ul li:last-child {
        padding-bottom:0 !important;
    }

    .wp-block-columns:last-child {
        padding-bottom: 100px !important;
    }

    .entry-header {
        max-width: 688px !important;
        margin-left: auto;
        margin-right: auto;
    }


    .page-template-template-abolish-c .flex-grow-1 .content-design-drawer {
        display: none;
    }
    .page-template-template-abolish-c #main {
        margin-left: 0;
    }
    @media (min-width: 1024px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
        }        
      
    }

    @media (min-width: 1440px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
            width: 52%;
        }   
    }

    @media (min-width: 1899px) {
        .each-image-slider .content-area {
            max-width: 651px;
            padding-left: 107px;
            padding-right: 20px;
        }
        .each-image-slider .image-area {
        }        
    }


    @media (max-width: 1025px) {
        .each-image-slider .content-area {
            max-width: initial;
        }
        .each-image-slider .image-area {
            max-width: 100%;
            padding-top: 5%;
            width: 43%;
        }        
       
        .page-template-default .each-image-slider {
            height: calc(100vh) !important;
        }

        .wp-block-navigation {
            display: none !important;
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

    @media (max-width: 768px) {
        .mobile{
            display: block;
        }
        .desk {
            display: none;
        }
        .swiper-pagination {
            display: none;
        }
        .content-design-page .content-design-container {
            width: 100%;
        }
        .image-area {
            display: flex;
        }
        .image-area img {
            margin-right: auto;
            margin-left: auto;
        }
        .each-image-slider .content-area {
        width: 100% !important;
        }
        .each-image-slider .image-area  {
        width: 100% !important;
        }
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 55vh !important;
            margin-left: 0% !important;
            margin-right: 0% !important;
        }
      
        .button-next {
            background-image: none;
        }

        .wp-block-navigation {
            margin-left: 0rem !important;
        }
    }

    @media (max-width: 450px) {
        .each-image-slider {
            margin-top: 58px;
        }
        .logged-in .each-image-slider {
            margin-top: 0px;
        }
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 170px !important;
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
        h3 {
            padding-top: 20px !important;
            padding-bottom: 20px !important;
        }
     

        .fixed_1 {
            position: fixed;
            top:0; right:0;
            z-index: 10;
            margin-top: 58px !important;
            transition: 1s !important;
        }
    }
/*# sourceMappingURL=style.css.map */
</style>

<!-- Col-2-image-text -->
<style type="text/css">

    .page-template-template-abolish-c .image-text-part-two {
        width: 1380px;
		margin-top: 92px !important; 
		margin-bottom: 0px !important; 
    }
    .page-template-template-abolish-c .my-header a {
        margin-left: 45px;
    }
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left {
        width: 675px;
        border-radius: 22px;
        box-shadow: 0px 1px 36px 4px rgba(107, 108, 114, 0.12);
        background: #AFE8E2;
        overflow: hidden;
    }
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right {
        width: 675px;
        border-radius: 22px;
        box-shadow: 0px 1px 36px 4px rgba(107, 108, 114, 0.12);
        background: #FF500A;
        overflow: hidden;
    }
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap {
        width: 100%;
        height: 0;
        padding-bottom: 472px;
        position: relative;
        border-radius: 22px 22px 0px 0px;
        overflow: hidden;
    }
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap,  
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap  {
        padding: 50px;
        background: linear-gradient(112.49deg, rgba(255, 255, 255, 0.88) 21.9%, rgba(255, 255, 255, 0.7) 73.86%);
    } 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap img, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .page-template-template-abolish-c .image-text-part-two a {
        text-decoration: underline;
        font-size: 20px ;
         line-height: 30px ;
    }
    
    @media (max-width: 1919px) and (min-width: 1440px) {        
        .page-template-template-abolish-c .image-text-part-two {
            width: 1306px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right {
            width: 638px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 446px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap {
            padding: 40px;
        } 
    }

    @media (max-width: 1439px) and (min-width: 1024px) {        
        .page-template-template-abolish-c .image-text-part-two {
            width: 1052px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right {
            width: 511px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 357px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap {
            padding: 40px;
        } 
    }

    .page-template-template-abolish-c .image-text-part-two { 
        margin: auto;
    }
    @media (max-width: 1024px) and (min-width: 1024px) {        
        .page-template-template-abolish-c .image-text-part-two {
            width: 970px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right {
            width: 470px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 328px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap {
            padding: 40px;
        } 
    }

    @media (max-width: 1024px) and (min-width: 768px) {     
        .page-template-template-abolish-c .image-text-part-two {
            width: 728px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left , 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right {
            width: 354px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap , 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 247px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap {
            padding: 28px;
            padding-top: 40px;
        } 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap h3, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h3 {
            font-size: 28px !important;
        } 
    }

    @media (max-width: 768px) {     
        .page-template-template-abolish-c .image-text-part-two {
            max-width: 728px;
            width: 100%;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left,
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right {
            max-width: 728px;
            width: 100%;
            margin-bottom: 20px;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .img_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 247px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap {
            padding: 16px;
            padding-top: 40px;
            padding-bottom: 40px;
        } 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap h3, 
        .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h3 {
            font-size: 24px !important;
        } 
    }

    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap h1, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h1 {
        padding-top: 0px !important;
    } 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap p, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap p {
        padding: 0px !important;
    } 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap h2, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h2 {
        padding-top: 0px !important;
    } 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap h3, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h3 {
        padding-top: 0px !important;
    } 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left .text_wrap h4, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h4 {
        padding-top: 0px !important;
    } 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-left. text_wrap h5, 
    .page-template-template-abolish-c .image-text-part-two .com-image-text-right .text_wrap h5 {
        padding-top: 0px !important;
    } 

</style>

<!-- Col-3-image-text -->
<style type="text/css">
    .page-template-template-abolish-c .img_wrap {
        overflow: hidden;
    }
    
    .article-line .hr {
        border-top: 1px solid #393A3D;    
        margin-bottom: 0px !important;
        margin-top: 0px !important;
    }
    @media(min-width: 768px) {
        .page-template-template-abolish-c .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-abolish-c .articles_three_col .col-sm-4 {
            padding-top: 24px !important;
            padding-left: 18px !important;
            padding-right: 18px !important;
            padding-bottom: 24px !important;
        }
        .articles-title, .article-line {
            padding-left: 18px !important;
            padding-right: 18px !important;         
        }
        .page-template-template-abolish-c .articles_three_col .title {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-abolish-c .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
    }
    @media(min-width: 1024px) {
        .page-template-template-abolish-c .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-abolish-c .articles_three_col .col-sm-4 {
            padding-top: 28px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-bottom: 28px !important;
        }
        .articles-title, .article-line {
            padding-left: 24px !important;
            padding-right: 24px !important; 
        }
        .page-template-template-abolish-c .articles_three_col .title {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-abolish-c .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
        .articles_three_col {
            padding-left: 0px;
            padding-right: 0px;
        }
    }
    @media(min-width: 1441px) {
        .page-template-template-abolish-c .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-abolish-c .articles_three_col .col-sm-4 {
            padding-top: 30px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-bottom: 30px !important;
        }
        .articles-title, .article-line {
            padding-left: 50px !important;
            padding-right: 50px !important; 
        }
        .page-template-template-abolish-c .articles_three_col .title {
            font-size: 24px !important;
            line-height: 32px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-abolish-c .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
        .articles-title, .article-line {
            padding-left: 24px !important;
            padding-right: 24px !important; 
        }
        #main .community-3column-image {
            max-width: 1344px !important;
            margin-left: auto;
            margin-right: auto;
        }
        .articles-title, .article-line {
            padding-left: 24px !important;
            padding-right: 24px !important; 
        }
    }
    @media(min-width: 1920px) {
        #main .community-3column-image {
            max-width: 1746px !important;
            margin-left: auto;
            margin-right: auto;
        }
        .articles-title, .article-line {
            padding-left: 25px !important;
            padding-right: 25px !important; 
        }
    }
    @media(max-width: 767px) {
        .page-template-template-abolish-c .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-abolish-c .articles_three_col .col-sm-4 {
            padding-top: 24px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 24px !important;
        }
        .articles-title, .article-line {
            padding-left: 20px !important;
            padding-right: 20px !important; 
        }
        .page-template-template-abolish-c .articles_three_col .title {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-abolish-c .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
    }

    .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
        font-family: "AvenirNext forINTUIT bold" !important;
    }
    .articles_three_col p {
        color: black;
    }
</style>

<!-- Col-1-image -->
<style type="text/css">
    .page-template-template-abolish-c .component-container {
        box-shadow: 0px 1px 36px 4px rgba(107, 108, 114, 0.1);
        border-radius: 22px;
        margin-bottom:20px;
        margin-top: 60px;
        overflow: hidden;
        max-width: 1380px !important; 
        margin-left: auto;
        margin-right: auto;
    }
    @media(min-width: 1920px) {
        .page-template-template-abolish-c #main article .entry-content>*.component-container {
            max-width: 1380px !important; 
        }
    }
    .page-template-template-abolish-c .image-text-part-one {
        width: 1380px;
    }

    .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
    }

    .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
        width: 100%;
        height: 0;
        padding-bottom: 600px;
        position: relative;
        overflow: hidden;
    }

    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap {
        /*padding-left: 15%;
        padding-right: 15%;*/
        width: 688px;
        margin: auto;
    }
    .page-template-template-abolish-c .image-text-part-one a {
        text-decoration: underline;
        font-size: 20px ;
        line-height: 30px ;
    }

    @media (max-width: 1919px) and (min-width: 1440px) {        
        .component-container, .page-template-template-abolish-c .image-text-part-one {
            width: 1306px;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 550px;
            position: relative;
        }
    }

    @media (max-width: 1439px) and (min-width: 1024px) {        
        .component-container, .page-template-template-abolish-c .image-text-part-one {
            width: 1052px;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
            width: 109%;
            height: 0;
            margin-left: -4.4%;
            padding-bottom: 500px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap img{
            left: -17%;
            width: 134%;
            max-width: 134%;
        }
    }

    @media (max-width: 1024px) and (min-width: 1024px) {        
        .component-container, .page-template-template-abolish-c .image-text-part-one {
            width: 970px;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
            width: 109%;
            height: 0;
            margin-left: -4.4%;
            padding-bottom: 450px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap img{
            left: -18%;
            width: 135%;
            max-width: 144%;
        }
    }

    @media (max-width: 1024px) and (min-width: 768px) {     
        .component-container, .page-template-template-abolish-c .image-text-part-one {
            width: 728px;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
            width: 115%;
            height: 0;
            margin-left: -10%;
            padding-bottom: 360px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap img{
            left: -10%;
            width: 124%;
            max-width: 144%;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap {
        width: 644px;
        margin: auto;
    }
    }

    @media (min-width: 568px) and (max-width: 767px) {
        .component-container, .page-template-template-abolish-c .image-text-part-one {
            width: 528px;
            }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
            width: 100%;
            height: 0;
            padding-bottom: 200px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap img{
            left: -10%;
            width: 124%;
            max-width: 144%;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap {
            width: 444px;
            margin: auto;
        }
    }

    @media (min-width: 375px) and  (max-width: 568px){  
        .component-container, .page-template-template-abolish-c .image-text-part-one {
            width: 500px;
            width: 100%;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap {
            width: 120%;
            height: 0;
            margin-left: -10%;
            padding-bottom: 385px;
            position: relative;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .img_wrap img {
                width: 280%;
                max-width: 300%;
                margin-left: -140%;
                margin-top: 20px;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap {
            width: 380px;
            margin: auto;
        }
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h1 {
            padding-bottom: 0px !important;
            padding-top: 40px !important;
        } 
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h2 {
            padding-bottom: 0px !important;
            padding-top: 40px !important;
        } 
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h3 {
            padding-bottom: 0px !important;
            padding-top: 40px !important;
        } 
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h4 {
            padding-bottom: 0px !important;
            padding-top: 40px !important;
        } 
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h5 {
            padding-bottom: 0px !important;
            padding-top: 40px !important;
        } 
        .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap {
            text-align: center;
        }
    }

    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h1 {
        padding-bottom: 0px !important;
        padding-top: 40px !important;
    } 
    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h2 {
        padding-bottom: 0px !important;
        padding-top: 40px !important;
    } 
    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h3 {
        padding-bottom: 0px !important;
        padding-top: 40px !important;
    } 
    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h4 {
        padding-bottom: 0px !important;
        padding-top: 40px !important;
    } 
    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap h5 {
        padding-bottom: 0px !important;
        padding-top: 40px !important;
    } 
    .page-template-template-abolish-c .image-text-part-one .com-image-text .text_wrap {
        text-align: center;
    }
</style>

<!-- Slider part -->
<style type="text/css">
    .each-image-slider h1, .each-image-slider h2, .each-image-slider h3, .each-image-slider h4 {
        padding: 0px !important;
    }
    .desc-area {
        margin-top: 28px;
    }
    .mobile-version {
        display: none;
    }
    .row {
        margin: 0;
    }

    .each-image-slider {     
        margin: unset;
        height: calc(100vh);
    }

    .each-image-slider .swiper-wrapper {
        margin: auto;
        width: 100%;
    }
	
    .each-image-slider .image-area {
        margin: auto;
        height: 100%;
        display: flex;
    }
    .each-image-slider .swiper-wrapper .image-area img {
        max-height: 90%;
        margin-top: auto;
        margin-bottom: auto;
        max-width: initial;
    }
    .each-image-slider .swiper-wrapper .content-area {
        margin: auto;
    }
    .swiper-button-next {
        background-image: url('/wp-content/themes/content-design/public/assets/arrow.svg');
        height: 30px;
        width: 30px;
        background-repeat: no-repeat;
        background-size: cover;
        top: 96.5%;
        right: 47%;
    }
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
        display: none;
    }
    .swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
        display: none;
    }
    .page-template-default .each-image-slider {
        height: calc( 100vh - 58px );
    }
    .each-image-slider .image-area {
        max-width: 688px;
    }
    .each-image-slider .image-area img {
        width: 100%;
        max-width: initial;
    }
    @media (max-width: 1130px) and (min-width: 1024px) {

        .each-image-slider .image-area {
            width: 43%;
        }   
    }
    @media (max-width: 1024px) {
        .each-image-slider .content-area {
            max-width: 512px;
            padding-left: 10px;
            padding-right: 16px;
        }
        .each-image-slider .image-area {
            max-width: 512px;
        }        
        .each-image-slider .image-area img {
            width: auto;
            max-height : 100%;
            height: auto;
            margin: auto;
        }
    }
    @media (min-width: 1024px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 70px;
        }
        .each-image-slider .image-area {
            max-width: 534px;
        }        
        .each-image-slider .image-area img {
            width: auto;
            max-height : 100%;
            height: auto;
            margin: auto;
        }
    }
    @media (min-width: 1366px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 70px;
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
            padding-right: 70px;
        }
        .each-image-slider .image-area {
            max-width: 850px;
            width: calc(100vw - 578px);
        }        
    }
    @media (min-width: 1919px) {
        .each-image-slider .content-area {
            max-width: 651px;
            padding-left: 107px;
            padding-right: 107px;
        }
        .each-image-slider .image-area {
            max-width: 1250px;
        }        
    }
    @media (max-width: 1023px) {
        
        .each-image-slider .content-area {
            max-width: initial;
        }
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 60vh !important;
            margin-left: 6px !important;
            margin-right: 16px !important;
            width: 100%;
        }
        .each-image-slider .image-area {
            padding-top: 0%;
        }    
        .each-image-slider .image-area img {
            max-height: 50vh;
            margin-top: unset;
            width: auto;
            max-width: 100%;
        }
        .page-template-default .each-image-slider {
            height: calc(100vh) !important;
        }
        .my-header a {
            margin: auto;
            margin-left: auto !important;
        }
    }
    @media (max-width: 560px) {
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 54vh !important;
        }
        .page-template-template-abolish-c .each-image-slider .content-area .desc-area {
            margin-top: 0 !important;
        }
        .page-template-template-abolish-c .each-image-slider .content-area .title-area h2{
            font-size: 32px !important;
            line-height: 40px !important;
        }
        .page-template-template-abolish-c .each-image-slider p {
            padding-top: 48px !important;
        }
		
		.each-image-slider .swiper-wrapper {
			margin-top: 58px;
		}
    }

    @media (max-width: 414px) {
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 41vh !important;
        }        
        .each-image-slider .image-area img {
                max-height: 33vh;
        }
    }
    .page-template-template-abolish-c .content-design-page #content-design-menu {
        z-index: 100;
        display: block !important;
        position: absolute;
        right: 0;
    }
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/fullpage.js@3.0.8/dist/fullpage.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/fullpage.js@3.0.8/vendors/scrolloverflow.min.js"></script>
<script type="text/javascript">
    
    window.addEventListener('load', function() {
        fullpage_api.moveTo("p1", 1);
        $(".mylink").removeClass("mylink");
        $($('.wp-block-navigation-item__content')['0']).parent().addClass('mylink');
    })

    $('html').bind('mousewheel DOMMouseScroll', function (event) {
        $('.wp-block-navigation-item__content').each(function(){
            var id = $(this).attr("href");
            var scroller = $(id).parents('.fp-scroller');
            if(scroller.css('transform')) {
                var currentPosition = scroller.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[5];
                var idPosition = $(id).offset().top;
                if(currentPosition < idPosition*(-1)) {
                    $(".mylink").removeClass('mylink');
                    $(this).parent().addClass('mylink');
                }

            }else {
                $(".mylink").removeClass('mylink');
                $(this).parent().addClass('mylink');
            }

        })

        alignFull();
        moveTotop();
    });

    function moveTotop() {
        if(window.innerWidth > 1024) {
            $(".section").each(function() {
              if($(this).hasClass('active')) {
                  var pageAnchor = $(this).attr("data-anchor");
                  if(pageAnchor == "p1") {
                      $(".wp-block-navigation").attr("style", "margin-top:340px;");
                  }else {
                    $(".wp-block-navigation").attr("style", "margin-top:0 !important;");
                  }
              }
          })
        }
    }

    function alignFull() {
        var enable = false;

        $('.alignfull').each(function(){
            var viewportoffset = $('.wp-block-navigation').offset();
            var viewportHeight = $('.wp-block-navigation').height();
            var viewportfullWidth = $(this).width();
            var viewportfull = $(this).offset()

            if(window.innerWidth > 1024) {
                if(viewportfull.top <= (viewportoffset.top+viewportHeight)) {
                    if((viewportfull.left+viewportfullWidth) >= viewportoffset.left) {
                        enable = true;
                        console.log('enabled')
                        if(!$('.wp-block-navigation').css('opacity') || $('.wp-block-navigation').css('opacity') != 0)
                        {
                            $('.wp-block-navigation').animate({opacity:0},100); 
                        }
                    }
                }
            }

        })

        if(!enable) {
            $('.wp-block-navigation').animate({opacity:1},100);
        }
    }

  $(document).ready(function () {
    setTimeout(() => {
        var link = window.location.href;
        var index =  link.lastIndexOf('/');
        var sectionId = link.slice(index+1)
        console.log(sectionId);
        console.log($(sectionId));
          if(sectionId!="#p1") {
              setTimeout(() => {
                  var top = $(sectionId).offset().top;
                  var scroller = $(sectionId).parents(".fp-scroller");
                  console.log(scroller);
                  var currentOffset = scroller.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[5];
                      scroller.css({"transform":"translateY("+(currentOffset*1-top*1)+"px)", "transition": " all 1s ease 0s"})
              }, 1000);
        }
    }, 500);

  /* Slide variable */
    var slideIndexBis = 1;
    var sliding = false;
  
  $('#fullpage-general').fullpage({
    licenseKey: 'YOUR KEY HERE',
    anchors: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p11', 'p12'],
    menu: '.animation-nav',
    css3: true,
    scrollingSpeed: 1000,
    scrollOverflow: true,
        onLeave: function(index, nextIndex, direction) {
            if(nextIndex.index == 1 && direction == "down") {
                $("#return-to-top").fadeIn(1000);
            }else if(index.index == 1 && direction == "up") {
                $("#return-to-top").fadeOut(1000);
            }
            setTimeout(() => {
                mobileView();
            }, 500);
        }
  });

  setTimeout(() => {
    var arrowDown = '<div class="swiper-pagination"></div>';
    console.log($(arrowDown));
    var section = $(".section").children(".fp-tableCell");
    for (let i = 1; i < section.length-1; i++) {
        section[i].append($(arrowDown)[0]);
    }
    console.log(section);
  }, 2000);

  $('#return-to-top').click(function() {
    fullpage_api.moveTo('p1', 1);
    $("#return-to-top").fadeOut(1000);
  })

  $('.wp-block-navigation-item__content').click(function(e) {
      e.preventDefault();

      if($(".mylink")) {
        $(".mylink").removeClass('mylink');
      }

      var id = $(this).attr("href");
      var fullpageNum = $(id).parents(".section ").attr("data-anchor");
      fullpage_api.moveTo(fullpageNum, 1);
      $(this).parent().addClass("mylink");

      setTimeout(() => {
        if(id!="#p1") {
            var top = $(id).offset().top;
            var scroller = $(id).parents('.fp-scroller');
            var currentOffset = scroller.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[5];
                scroller.css({"transform":"translateY("+(currentOffset*1-top*1)+"px)", "transition": " all 1s ease 0s"})
        }
        
        setTimeout(() => {
            alignFull();
            moveTotop();

            $(".section").each(function() {
                if($(this).hasClass('active')) {
                    var pageAnchor = $(this).attr("data-anchor");
                    console.log(pageAnchor)
                    if(pageAnchor == "p1") {
                        $("#return-to-top").fadeOut(1000);
                    }else {
                        $("#return-to-top").fadeIn(1000);
                    }
                }
            })
        }, 250);
      }, 500);
      

  })

  if(window.innerWidth <= 1024) {
    setTimeout(() => {
      $(".section").each(function() {
          if($(this).hasClass('active')) {
              var pageAnchor = $(this).attr("data-anchor");
              if(pageAnchor == "p1") {
                $('.wp-block-navigation').attr("style", "display: block !important;")
              }
              else {
                $('.wp-block-navigation').attr("style", "display: none !important;")
              }
          }
      })
  }, 2000);
  }

  if(window.innerWidth <= 1024 ) {
      var nav = $(".wp-block-navigation");
      $(".nav-bar").append(nav);
  }

  setTimeout(() => {
        $(document).on('click','.link',function(evt){
            let enable_click = true;
    
            let id = $(this).parent().prev().attr('id');
            if(!id)
            {
                id = $(this).parent().attr('id');
            }
            console.log(window.location.origin + window.location.pathname + '#' + id)
            if(id)
            {   
                let dataAnchor = $(this).parents(".section").attr('data-anchor');
                navigator.clipboard.writeText(window.location.origin + window.location.pathname + '#' + dataAnchor + '/#' +id).then(function() {
                    
                    showalert(evt)
                }, function(err) {
                    console.error('Async: Could not copy text: ', err);
                });
            }
        })
    }, 500);

    function showalert(evt)
    {
         var x = document.getElementById("snackbar");
         $(x).css('left',evt.clientX + 70);
         $(x).css('top',evt.clientY - 58);
          // Add the "show" class to DIV
          x.className = "show";

          // After 3 seconds, remove the show class from DIV
          setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

});

</script>
<style type="text/css">
    .section {
        display: none;
    }
    .section:first-of-type {
        display: block;
}
</style>

<script type="text/javascript">
    setTimeout(function(){ $(".section").show(); }, 500 );
</script>

<?php
//get_sidebar();
get_footer();
