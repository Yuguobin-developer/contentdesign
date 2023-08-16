<div class="row image-text-part-two" style="margin-top: 60px; margin-bottom: 0px; ">
	<div class="col-sm-6">		
		<div class="com-image-text-one com-image-text-left" >
			<div class="img_wrap">
				<img src="<?php echo $left_image = get_field('left_image')['url'];?>"  loading=”lazy” alt="<?php echo get_field('left_image')['alt'];?>">
			</div>
			<div class="text_wrap text_wrap_left">
				<?php echo $left_title = get_field('left_title'); ?>
				<?php echo $left_text = get_field('left_text'); ?>
				
				<div style="margin-top: 12px !important;"><a href="<?php echo $left_link = get_field('left_link')['url']; ?>"><?php echo $left_link = get_field('left_link')['title']; ?></a></div> 
			</div>
		</div>
	</div>
	<div class="col-sm-6 sec-one">		
		<div class="com-image-text-two com-image-text-right" >
			<div class="img_wrap">
				<img src="<?php echo $right_image = get_field('right_image')['url'];?>"  alt="<?php echo get_field('right_image')['alt'];?>"  loading=”lazy”>
			</div>
			<div class="text_wrap text_wrap_right">
				<div class="text_wrap_contents">
					<?php echo $left_title = get_field('right_title'); ?>
					<?php echo $left_text = get_field('right_text'); ?>
					
					<div style="margin-top: 12px !important;"><a href="<?php echo $right_link = get_field('right_link')['url']; ?>"><?php echo $right_link = get_field('right_link')['title']; ?></a></div>
				</div>
			</div>
		</div>
	</div>
</div>
<style type="text/css">

	.page-template-template-community .image-text-part-two {
		width: 1380px;
	}
	.page-template-template-community .image-text-part-two .com-image-text-left {
		width: 675px;
		border-radius: 22px;
		box-shadow: 0px 1px 36px 4px rgba(107, 108, 114, 0.12);
		background: #AFE8E2;
		overflow: hidden;
	}
	.page-template-template-community .image-text-part-two .com-image-text-right {
		width: 675px;
		border-radius: 22px;
		box-shadow: 0px 1px 36px 4px rgba(107, 108, 114, 0.12);
		background: #FF500A;
		overflow: hidden;
	}
	.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap, 
	.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap {
		width: 100%;
        height: 0;
        padding-bottom: 472px;
        position: relative;
		border-radius: 22px 22px 0px 0px;
		overflow: hidden;
	}
	.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap,  
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap  {
		padding: 50px;
		background: linear-gradient(112.49deg, rgba(255, 255, 255, 0.88) 21.9%, rgba(255, 255, 255, 0.7) 73.86%);
	} 
	.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap img, 
	.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap img {
		position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
		object-fit: cover;
	}
	.page-template-template-community .image-text-part-two a {
		text-decoration: underline;
		font-size: 20px ;
   		 line-height: 30px ;
	}
	
	@media (max-width: 1919px) and (min-width: 1440px) {		
		.page-template-template-community .image-text-part-two {
			width: 1306px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left, 
		.page-template-template-community .image-text-part-two .com-image-text-right {
			width: 638px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 446px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap {
			padding: 40px;
		} 
	}

	@media (max-width: 1439px) and (min-width: 1112px) {		
		.page-template-template-community .image-text-part-two {
			width: 1052px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left, 
		.page-template-template-community .image-text-part-two .com-image-text-right {
			width: 511px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 357px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap {
			padding: 40px;
		} 
	}

	@media (max-width: 1111px) and (min-width: 1024px) {		
		.page-template-template-community .image-text-part-two {
			width: 970px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left, 
		.page-template-template-community .image-text-part-two .com-image-text-right {
			width: 470px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 328px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap {
			padding: 40px;
		} 
	}

	@media (max-width: 1023px) and (min-width: 768px) {		
		.page-template-template-community .image-text-part-two {
			width: 728px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left , 
		.page-template-template-community .image-text-part-two .com-image-text-right {
			width: 354px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap , 
		.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 247px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap {
			padding: 28px;
			padding-top: 40px;
		} 
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap h3, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h3 {
			font-size: 28px !important;
		} 
	}

	@media (max-width: 768px) {		
		.page-template-template-community .image-text-part-two {
			max-width: 728px;
			width: 100%;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left,
		.page-template-template-community .image-text-part-two .com-image-text-right {
			max-width: 728px;
			width: 100%;
			margin-bottom: 20px;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .img_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .img_wrap {
			width: 100%;
	        height: 0;
	        padding-bottom: 247px;
	        position: relative;
		}
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap {
			padding: 16px;
			padding-top: 40px;
			padding-bottom: 40px;
		} 
		.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap h3, 
		.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h3 {
			font-size: 24px !important;
		} 
	}

	.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap h1, 
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h1 {
		padding-top: 0px !important;
	} 
	.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap p, 
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap p {
		padding: 0px !important;
	} 
	.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap h2, 
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h2 {
		padding-top: 0px !important;
	} 
	.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap h3, 
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h3 {
		padding-top: 0px !important;
	} 
	.page-template-template-community .image-text-part-two .com-image-text-left .text_wrap h4, 
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h4 {
		padding-top: 0px !important;
	} 
	.page-template-template-community .image-text-part-two .com-image-text-left. text_wrap h5, 
	.page-template-template-community .image-text-part-two .com-image-text-right .text_wrap h5 {
		padding-top: 0px !important;
	} 

</style>