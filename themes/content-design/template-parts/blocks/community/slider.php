<div id="fullpage-general" style="">
    <?php $datas = get_field('general_slider_setting');?>

    <?php foreach ($datas as $data) { ?>
        <div class="section" style="background-color: <?php echo $data['background_color']; ?>" style="height: 100vh">
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
    <div class="button-next"></div>
</div>


<style type="text/css">
   header {
    display: none; 
}
article {
    padding: 0px !important; 
    margin-top: -30px !important;
}

.title-area h2 {
  font-size: 32px !important;
  line-height: 42px !important;

}
.button-next {
    background-image: url(/wp-content/themes/content-design/public/assets/arrow.svg);
    height: 30px;
    width: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    top: calc(100vh - 110px);
    right: 50%;
    position: absolute;}
.title-area {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s 0.75s ease-in-out;
  padding-bottom: 32px !important;
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
  text-transform: uppercase; }
#fullpage-general .section h2 {
  color: #393a3d;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
 }

.fullpage-wrapper {
  width: 100% !important;
  transform: none !important; }

.fullpage-wrapper .fp-section {
  width: 100% !important;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.25s 0.25s ease-in-out; 
}

.fullpage-wrapper .fp-section.active {
  visibility: visible;
  opacity: 1;
  z-index: 1; }

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
  transform: none !important; }

.fullpage-wrapper .fp-section .fp-slidesContainer .fp-slide {
  width: 100% !important;
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  z-index: 0;
  transition: all 0.25s 0.25s ease-in-out; }

.fullpage-wrapper .fp-section .fp-slidesContainer .fp-slide.active {
  visibility: visible;
  opacity: 1;
  z-index: 1; }

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
}

@media (max-width: 769px) {
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
}


/*# sourceMappingURL=style.css.map */

    </style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/jquery.fullPage.min.js"></script>
<script type="text/javascript">
  $(document).ready(function () {
  
  /* Slide variable */
    var slideIndexBis = 1;
    var sliding = false;
  
  $('#fullpage-general').fullpage({
  });
  
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
