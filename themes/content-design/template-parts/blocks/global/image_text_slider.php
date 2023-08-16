<link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/template-parts/blocks/global/assets/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri()?>/template-parts/blocks/global/assets/css/style.css">
<!-- <script src="<?php echo get_template_directory_uri()?>/template-parts/blocks/global/assets/js/jquery.min.js"></script> -->
<script src="<?php echo get_template_directory_uri()?>/template-parts/blocks/global/assets/js/bootstrap.min.js"></script>
<!-- <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script src="<?php echo get_template_directory_uri()?>/template-parts/blocks/global/assets/js/work.js"></script> -->

<div id="fullpage<?php echo uniqid();?>" class="fullpage swiper-container mySwiper image-slider">
    <?php $datas = get_field('slider_setting');?>

        <?php foreach ($datas as $data) { ?>
            <div class="swiper-wrapper" style="background-color: <?php echo $data['background_color']; ?>">
                <div class="section swiper-slide row each-image-slider">
                    <div class="content-area">
                        <div class="title-area">
                            <?php echo $data['title']; ?>
                        </div>
                        <div class="desc-area">
                            <?php echo $data['description']; ?> 
                        </div>
                        <a href="<?php echo $data['link']['url']; ?>" class="slider-link" style="font-size: 20px; color: #C9007A; text-decoration: underline;"><?php echo $data['link']['title'] ; ?></a>
                    </div>
                    <div class="image-area">                
                        <img src="<?php echo $data['image']['url']; ?>" alt="<?php echo $data['image']['alt']; ?>">
                    </div>
                </div>
            </div>
            
        <?php } ?>

    <div class="swiper-pagination" style="background-image: url('/wp-content/themes/content-design/public/assets/arrow.svg');height:30px;width: 30px; margin-top: calc(0vh - 50px); background-size: cover; right: 50%; position: absolute;"></div>   
    <div class="swiper-button-next"></div>
    
</div>


<style type="text/css">
    .fullpage h1, .fullpage h2, .fullpage h3, .fullpage h4 {
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

    .fullpage {     
        margin: unset;
        height: calc(100vh - 58px);
    }

    .fullpage .swiper-wrapper {
        margin: auto;
        width: 100%;
    }

    .fullpage .swiper-wrapper .image-area {
        margin: auto;
        height: 100%;
        display: flex;
    }
    .fullpage .swiper-wrapper .image-area img {
        max-height: 90%;
        margin-top: auto;
        margin-bottom: auto;
        max-width: initial;
    }
    .fullpage .swiper-wrapper .content-area {
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
    }
    @media (min-width: 1024px) {
        .each-image-slider .content-area {
            max-width: 512px;
            padding-left: 60px;
            padding-right: 60px;
        }
        .each-image-slider .image-area {
            max-width: 512px;
            width: calc(100vw - 512px);
        }        
        .fullpage .swiper-wrapper .image-area img {
            width: auto;
            max-height : 100%;
            height: auto;
            margin: auto;
        }
    }
    @media (min-width: 1112px) {
        .each-image-slider .content-area {
            max-width: 578px;
            padding-left: 70px;
            padding-right: 70px;
        }
        .each-image-slider .image-area {
            max-width: 534px;
        }        
        .fullpage .swiper-wrapper .image-area img {
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
/*     @media (max-width: 1023px) and (min-width: 769px) {
         .each-image-slider .content-area {
            max-width: 512px;
            padding-left: 60px;
            padding-right: 0px;
        }
        .each-image-slider .image-area {
            max-width: 512px;
            width: calc(100vw - 512px);
        }        
        .fullpage .swiper-wrapper .image-area img {
            width: auto;
            max-height : 100%;
            height: auto;
            margin: auto;
        }
    } */
    @media (max-width: 1130px) {
		
        .each-image-slider .content-area {
			max-width: initial;
		}
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 60vh !important;
            margin-left: 16px !important;
            margin-right: 16px !important;
        }
        .each-image-slider .image-area {
            max-width: 75%;
            padding-top: 0%;
        }        
        .fullpage .swiper-wrapper .image-area img {
            max-height: 50vh;
            margin-top: unset;
            width: auto;
            max-width: 100%;
        }
        .page-template-default .each-image-slider {
            height: calc(100vh - 58px) !important;
        }
    }
    @media (max-width: 560px) {
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 35vh !important;
        }
		.page-template-template-community .fullpage .content-area .desc-area {
			margin-top: 0 !important;
		}
		.page-template-template-community .fullpage .content-area .title-area h2{
			font-size: 32px !important;
			line-height: 40px !important;
		}
        .page-template-template-community .fullpage p {
            padding-top: 48px !important;
        }
    }
</style>
