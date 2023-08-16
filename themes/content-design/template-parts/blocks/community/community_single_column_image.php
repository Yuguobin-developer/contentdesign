<div class="component-container" style="background-color: <?php echo $com_background = get_field('com_background');?>" id="<?php echo uniqid();?>">

    <div class="row image-text-part-one" style="margin: auto;">
        <div class="col-12">        
            <div class="com-image-text" >
                <div class="text_wrap" style="width: 100%;">
                    <?php 
                    if(get_field('com_title') ) { echo $com_title = get_field('com_title'); } 
                    if(get_field('com_text') ) { echo $com_text = get_field('com_text'); } 
                       ?>

                       <?php if( get_field('com_link') ) { ?>
                        <a href="<?php echo $com_link = get_field('com_link')['url']; ?>">
                        <?php } ?>
                        <?php if(get_field('com_link') ) 
                        { echo $com_link = get_field('com_link')['title']; ?></a> <?php } ?>
                </div>

                <?php if(get_field('com_image') ) { ?>
                    <div class="img_wrap">
                        <img src="<?php echo $com_image = get_field('com_image')['url'];?>" alt="<?php echo get_field('com_image')['alt'];?>"  loading=”lazy”>
                    </div>
                <?php } ?>

            </div>
        </div>
    </div>
</div>
<style type="text/css">
	.page-template-template-community .component-container {
		box-shadow: 0px 1px 36px 4px rgba(107, 108, 114, 0.1);
		border-radius: 22px;
		margin-bottom:60px;
		margin-top: 60px;
		overflow: hidden;
		max-width: 1380px !important; 
	}
	@media(min-width: 1920px) {
		.page-template-template-community #main article .entry-content>*.component-container {
			max-width: 1380px !important; 
		}
	}
	.page-template-template-community .image-text-part-one {
		width: 1380px;
	}

	.page-template-template-community .image-text-part-one .com-image-text .img_wrap img {
		position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: auto;
	}

	.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
		width: 100%;
        height: 0;
        padding-bottom: 600px;
        position: relative;
        overflow: hidden;
	}

	.page-template-template-community .image-text-part-one .com-image-text .text_wrap {
		/*padding-left: 15%;
		padding-right: 15%;*/
		width: 688px;
		margin: auto;
	}
	.page-template-template-community .image-text-part-one a {
		text-decoration: underline;
		font-size: 20px ;
        line-height: 30px ;
	}

	@media (max-width: 1919px) and (min-width: 1440px) {		
		.component-container, .page-template-template-community .image-text-part-one {
			width: 1306px;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 550px;
	        position: relative;
		}
	}

	@media (max-width: 1439px) and (min-width: 1112px) {		
		.component-container, .page-template-template-community .image-text-part-one {
			width: 1052px;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
			width: 109%;
	        height: 0;
	        margin-left: -4.4%;
	        padding-bottom: 500px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap img{
			left: -17%;
			width: 134%;
			max-width: 134%;
		}
	}

	@media (max-width: 1111px) and (min-width: 1024px) {		
		.component-container, .page-template-template-community .image-text-part-one {
			width: 970px;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
			width: 109%;
	        height: 0;
	        margin-left: -4.4%;
	        padding-bottom: 450px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap img{
			left: -18%;
			width: 135%;
			max-width: 144%;
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {		
		.component-container, .page-template-template-community .image-text-part-one {
			width: 728px;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
			width: 115%;
	        height: 0;
	        margin-left: -10%;
	        padding-bottom: 360px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap img{
			left: -10%;
			width: 124%;
			max-width: 144%;
		}
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap {
		width: 644px;
		margin: auto;
	}
	}

	@media (min-width: 568px) and (max-width: 767px) {
		.component-container, .page-template-template-community .image-text-part-one {
			width: 528px;
			}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 200px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap img{
			left: -10%;
			width: 124%;
			max-width: 144%;
		}
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap {
			width: 444px;
			margin: auto;
		}
	}

	@media (min-width: 375px) and  (max-width: 568px){	
		.component-container, .page-template-template-community .image-text-part-one {
			width: 500px;
			width: 100%;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap {
			width: 120%;
	        height: 0;
			margin-left: -10%;
	        padding-bottom: 385px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-one .com-image-text .img_wrap img {
			    width: 280%;
			    max-width: 300%;
			    margin-left: -140%;
			    margin-top: 20px;
		}
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap {
			width: 380px;
			margin: auto;
		}
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap h1 {
			padding-bottom: 0px !important;
			padding-top: 40px !important;
		} 
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap h2 {
			padding-bottom: 0px !important;
			padding-top: 40px !important;
		} 
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap h3 {
			padding-bottom: 0px !important;
			padding-top: 40px !important;
		} 
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap h4 {
			padding-bottom: 0px !important;
			padding-top: 40px !important;
		} 
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap h5 {
			padding-bottom: 0px !important;
			padding-top: 40px !important;
		} 
		.page-template-template-community .image-text-part-one .com-image-text .text_wrap {
			text-align: center;
		}
	}

	.page-template-template-community .image-text-part-one .com-image-text .text_wrap h1 {
		padding-bottom: 0px !important;
		padding-top: 40px !important;
	} 
	.page-template-template-community .image-text-part-one .com-image-text .text_wrap h2 {
		padding-bottom: 0px !important;
		padding-top: 40px !important;
	} 
	.page-template-template-community .image-text-part-one .com-image-text .text_wrap h3 {
		padding-bottom: 0px !important;
		padding-top: 40px !important;
	} 
	.page-template-template-community .image-text-part-one .com-image-text .text_wrap h4 {
		padding-bottom: 0px !important;
		padding-top: 40px !important;
	} 
	.page-template-template-community .image-text-part-one .com-image-text .text_wrap h5 {
		padding-bottom: 0px !important;
		padding-top: 40px !important;
	} 
	.page-template-template-community .image-text-part-one .com-image-text .text_wrap {
		text-align: center;
	}
</style>