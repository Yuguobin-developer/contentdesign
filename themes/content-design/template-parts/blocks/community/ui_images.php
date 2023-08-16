<div class="row ui_images" style="margin-top: 0px; margin-bottom: 0px; ">
	<div class="col-sm-6" style="padding-left: 0px">		
		
		<?php $datas = get_field('ui_image');  ?>
		<div>
			<img src="<?php echo $datas['url'];?>" alt="image">
		</div>
	</div>
</div>
<style type="text/css">
	.vendor img {
		margin-top: 18px;
		margin-bottom: 18px;
	}
	.ui_images img {
		margin-top: 20px !important;
		margin-bottom: 20px !important;
	}
	.ui_images .col-sm-6 {
		padding: 0px;
	}
	.ui_images .right-part {

	}
</style>