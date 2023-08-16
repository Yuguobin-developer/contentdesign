<div class="row single-image alignfull" style="">
	<div class="single_wrap ">
		<img src="<?php echo $single_image = get_field('single_image')['url'];?>" alt="<?php echo $single_image = get_field('single_image')['alt'];?>">
	</div>
</div>
<style type="text/css">
	.single_wrap {
		width: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	.single_wrap img {
		width: 100%;
		height: 100%;
	}
</style>