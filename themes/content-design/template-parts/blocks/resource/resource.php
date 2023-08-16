<div style="border: 1px solid #BABEC5;border-radius: 8px;padding: 30px;margin-top: 60px; margin-bottom: 60px;">
	<?php 
		$all_data = get_field('resource_title'); ?>

		<div style="font-size: 20px !important; line-height: 30px !important; font-weight: bold;padding-bottom: 14px !important">
			<?php echo $all_data; ?>
		</div>
		<?php $link_data = get_field('link');
		$link_next = get_field('next_link');

		foreach ($link_data as $link_datas) { ?>
		<div style="padding-top: 6px; padding-bottom:6px;">
			<a href="<?php echo $link_datas['link_title']['url']; ?>" style="font-size: 20px !important; line-height: 30px !important;text-decoration: underline;">
				<?php echo $link_datas['link_title']['title']; ?>
			</a>
		</div>

		<?php }
		$smaller_text = get_field('smaller_text'); ?>
		<div style="font-size: 16px !important; line-height: 24px !important; padding-bottom: 34px !important; padding-top: 34px !important">
			<?php echo $smaller_text; ?>
		</div>

		<?php foreach ($link_next as $link_nexts) { ?>
		<div style="padding-top: 6px; padding-bottom:6px;">
			<a href="<?php echo $link_nexts['next_text']['url']; ?>" style="font-size: 20px !important; line-height: 30px !important;text-decoration: underline;">
				<?php echo $link_nexts['next_text']['title']; ?>
			</a>
		</div>
		<?php }
	?>
</div>