<?php
/*
Template Name: Abolish
*/


get_header();
?>
<div id="main">
    <?php 
        while ( have_posts() ) :
            the_post();
            get_template_part( 'template-parts/content', 'page' );
        endwhile;
    ?>
    <div id="fullpage-general" style="padding-bottom: 100px">
        <?php $datas = get_field('general_slider_setting');
         $above_parts = get_field('above_part');
         $below_parts = get_field('below_part');
        ?>

        <div class="section">

            <div class="stactic-section">
                <h1 class="entry-title">Anti-racist language</h1>
                <?php foreach ($above_parts as $above_part) { 
                    echo $above_part['multi_block'];
                } ?>
                
            </div>

        </div>
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

        <div class="section" style="padding: 5rem 0;">

            <div class="stactic-section pb-0">

                <?php 
                    foreach ($below_parts as $below_part) {
                        echo $below_part['multi_block'];
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

            <!-- wp:columns {"align":"full"} -->
            <div class="wp-block-columns alignfull"><!-- wp:column -->
            <div class="wp-block-column"><!-- wp:separator {"color":"k"} -->
            <hr class="wp-block-separator has-text-color has-background has-k-background-color has-k-color"/>
            <!-- /wp:separator --></div>
            <!-- /wp:column -->

            <!-- wp:column -->
            <div class="wp-block-column"><!-- wp:separator {"color":"l"} -->
            <hr class="wp-block-separator has-text-color has-background has-l-background-color has-l-color"/>
            <!-- /wp:separator --></div>
            <!-- /wp:column --></div>
            <!-- /wp:columns -->
            
            <?php 
                foreach ($below_parts as $below_part) { 

            // var_dump($below_part);?>

                <?php if ($below_part['full_side'])  { ?>

                    <!-- wp:columns {"align":"full"} -->
                    <div class="wp-block-columns alignfull"><!-- wp:column -->
                        <div class="wp-block-column"><!-- wp:content-design/do -->
                            <div class="wp-block-content-design-do"><img src="<?php echo $below_part['full_side']['description_left']['image']?>" style="display:block;margin-bottom:10px"/></div>
                            <!-- /wp:content-design/do -->

                                <!-- wp:list -->
                                <?php  echo $below_part['full_side']['description_left']['detail']; ?>
                                <?php// echo $below_part['full_side']['description_left']['detail']); ?>

                                <!-- /wp:list --></div>
                                <!-- /wp:column -->

                                <!-- wp:column -->
                                <div class="wp-block-column"><!-- wp:content-design/dont -->
                                <div class="wp-block-content-design-dont"><img src="<?php echo $below_part['full_side']['description_right']['image']?>" style="display:block;margin-bottom:10px"/></div>
                                <!-- /wp:content-design/dont -->

                                <?php echo $below_part['full_side']['description_right']['detail']; ?>

                                <!-- /wp:paragraph --></div>
                                <!-- /wp:column --></div>
                            <!-- /wp:columns -->

                <?php   }
                }
            ?>
        </div>

        <div class="button-next"></div>
    </div>
    <a href="javascript:" id="return-to-top"><img src="https://cdesignstage.wpengine.com/wp-content/themes/content-design/public/assets/svgs/arrow.svg"></a>  
</div>
<style type="text/css">

    header {
        display: none;
    }
    #main .alignfull {
        max-width: 1000px !important;
        margin-left: auto;
        margin-right: auto;
    }
    article {
        padding: 0px !important; 
        margin-top: -85px !important;
    }
    .section {
        padding-top: 0px !important;
    }
    .section .stactic-section h2 {
        padding-top: 92px !important; padding-bottom: 64px !important;
    }
    .button-next {
        display: none;
    }

    .slider-sec .button-next {
        display: none;
    }

    .title-area h2 {
        font-size: 32px !important;
        line-height: 42px !important;
    }

    .wp-block-navigation {
        margin-top: 344px;
    }
    ul li {
        padding-top: 10px !important;
        padding-bottom: 10px !important;
        font-size: 20px !important;
        line-height: 30px !important;
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

    /* @media (min-width: 991px) {
        .each-image-slider .image-area {
            margin-top: -10rem;
        }

        .each-image-slider .content-area {
            margin-top: -10rem;
        }
    } */

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

    .section h2 {
        color: #393a3d;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
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
        max-width: 688px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 5rem;
        padding-top: 32px;
    }

    .stactic-section .resource {
        background-color:#f4f5f8;
        padding: 30px;
        margin-top: 12px;
        margin-bottom: 12px;
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

    @media (min-width: 1024px) {
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

    @media (max-width: 1130px) {
        .wp-block-navigation {
            display: none;
        }
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
            display: none !important;
        }
    }

    @media (max-width: 769px) {
        .stactic-section, .alignfull {
            padding-right: 15px;
            padding-left: 15px;
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
    }

    @media (max-width: 450px) {
        .each-image-slider .content-area {
            position: absolute;
            margin-top: 200px !important;
        }
        .title-area {
            padding-bottom: 20px !important;
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
            display: flex !important;
            position: fixed;
            top:0; right:0;
            z-index: 10;
            margin-top: 58px !important;
        }
    }

/*# sourceMappingURL=style.css.map */
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/fullpage.js@3.0.8/dist/fullpage.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/fullpage.js@3.0.8/vendors/scrolloverflow.min.js"></script>
<script type="text/javascript">
    
    window.addEventListener('load', function() {
        // fullpage_api.moveTo("p1", 1);
        $(".mylink").removeClass("mylink");
        $('.wp-block-navigation-item__content').each(function(i){
            if(i==0) {
                $(this).parent().addClass('mylink');
            }
        })
    })

    $('html').bind('mousewheel DOMMouseScroll', function (e) {
        $('.wp-block-navigation-item__content').each(function(){
            var id = $(this).attr("href");
            var scroller = $(id).parents('.fp-scroller');
            if(scroller.css('transform')) {
                var idPosition = $(id).offset().top;
                var currentPosition = scroller.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[5];
                if(currentPosition < idPosition*(-1)) {
                    $(".mylink").removeClass('mylink');
                    $(this).parent().addClass('mylink');
                }
            }else {
                $(".mylink").removeClass('mylink');
                $(this).parent().addClass('mylink');
            }
        })

        var enable = false;

        $('.alignfull').each(function(){
            var viewportoffset = $('.wp-block-navigation').offset();
            var viewportHeight = $('.wp-block-navigation').height();
            var viewportfullWidth = $(this).width();
            var viewportfull = $(this).offset()

            console.log(viewportoffset)
            console.log(viewportfull)

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
        })

        console.log(enable)

        if(!enable) {
            $('.wp-block-navigation').animate({opacity:1},100);
        }
    });

  $(document).ready(function () {
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
        }
  });

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
          var top = $(id).offset().top;
          var scroller = $(id).parents('.fp-scroller');
          var currentOffset = scroller.css('transform').replace(/[^0-9\-.,]/g, '').split(',')[5];
              scroller.css({"transform":"translateY("+(currentOffset*1-top*1)+"px)"})
      }, 500);
      

  })

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
