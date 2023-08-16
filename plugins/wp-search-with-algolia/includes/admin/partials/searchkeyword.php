<?php

	global $wpdb;

	$result = $wpdb->get_results('Select * from ' . $wpdb->prefix . 'searchlink','ARRAY_A');
?>

<style type="text/css">
	table
	{
		border:1px solid #eee;
		border-bottom-color: #eee !important;
	}

	.dataTables_filter
	{
		margin-bottom: 15px;
	}
	td
	{
		text-align: center;
		border-width: 1,
		font-size:13px;
		border-bottom:1px solid #DDD;
	}

	thead
	{
		border-bottom-color: #EEE;		
	}

	tr
	{
		border-bottom:1px solid #333;
	}

	table.dataTable thead th
	{
		border-bottom:1px solid #DDD;
	}

	table.dataTable tbody tr.odd
	{
		background-color: #DDD;
	}

	.dataTables_wrapper .dataTables_paginate .paginate_button
	{
		background-color: #ea3ea7;
		color: white !important;
		margin-left: 0px;
		border-radius: 0px;
		border:none;
	}

	.dataTables_wrapper .dataTables_paginate .paginate_button:hover
	{
		background: #c9007a !important;
		border:none;
	}
	.dataTable {
		text-align: left !important;
	}
	.dataTable td{
		text-align: left !important;
	}
	
	.dataTables_wrapper .dataTables_paginate .paginate_button.disabled
	{
		background-color: #ea3ea7 !important;
		color: white !important;
		margin-left: 0px;
		border-radius: 0px;
	}

	.dataTables_wrapper .dataTables_paginate .paginate_button.current
	{
		background: #c9007a;
		color: white !important;
		border:none !important;
	}

	.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover
	{
		background: #c9007a;
		color: white !important;
		border:none !important;
	}
</style>

<div style="margin-top: 50px;background-color: white;padding:15px;">
	<table class="table table-striped searched_keyword bordered">
		<thead>
			<th>Keyword</th>
			<th>Query</th>
			<th>Frequency</th>
			<th>Link Url</th>
			<th>IpAddress</th>
			<th>Last Searched</th>
		</thead>

		<tbody>
			<?php foreach($result as $item){?>
				<tr>
					<td><?php echo $item['search_key'];?></td>
					<td><?php echo $item['query'];?></td>
					<td><?php echo $item['frequency'];?></td>
					<td><?php echo $item['url'];?></td>
					<td><?php echo $item['ipaddress'];?></td>
					<td><?php echo $item['last_updated'];?></td>
				</tr>
			<?php }?>
		</tbody>
	</table>

</div>

