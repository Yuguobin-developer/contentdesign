<div style="position: fixed; top: 0; right: 0; margin-top: 100px;margin-right: 100px;padding-top: 16px;padding-left:50px;padding-right:50px;padding-bottom:0px">
	<?php 
		$title_data = get_field('table_title'); ?>
		<div style="font-size: 16px !important; line-height: 24px !important; font-weight: bold;padding-bottom: 14px !important; color: background: #6B6C72;">
			<?php echo $title_data; ?>
		</div>
		<div>
			<?php $menu_name = get_field('menu_name');
			$menu_name = get_field('menu_name');

				foreach ($menu_name as $menu_names) { ?>
				<div class="my_munu" style="padding-top: 10px; height: 44px; padding-bottom:10px;padding-left: 18px; border-left: 1px solid #D4D7DC;">
					<a href="<?php echo $menu_names['menu_title']['url']; ?>" style="font-size: 16px !important; line-height: 24px !important; color: #6B6C72;">
						<?php echo $menu_names['menu_title']['title']; ?>
					</a>
				</div>

			<?php }?>
		</div>
</div>
<style type="text/css">
	.my_munu a:hover {
		color: #C9007A !important;
		text-decoration: none;
	}
	.my_munu:hover {
	    border-left: solid 1px #C9007A !important;
	}
</style>