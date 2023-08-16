<!-- <div class="community_hero_image" style="background-color: <?php echo get_field('community_hero_image')['background_color']; ?>;background-image: url('<?php echo get_field('community_hero_image')['image']['url'];?>'); ">  -->
<div class="community_hero_image">
	<div class="row main-content" style="margin: auto;">
		<div class="col-12 title-text">		
			<div class="title_wrap">
				<?php echo $com_title = get_field('community_hero_image')['title']; ?> 
			</div>
			<div class="description_wrap">
				<?php echo $com_text = get_field('community_hero_image')['description'];  ?>
			</div>
		</div>
	</div>
	<div class="button-next"></div>
</div>

<style type="text/css">

/* 	
  @keyframes pulse {
    0% {
      background-image: url('<?php echo get_field('community_hero_image')['image']['url'];?>');
    }
    50% {
      background-image: url('<?php echo get_field('community_hero_image')['image_1']['url'];?>');
    }
    100% {
      background-image: url('<?php echo get_field('community_hero_image')['image']['url'];?>');
    }
  } */

</style>

