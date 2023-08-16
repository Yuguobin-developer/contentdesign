(function( $ ) {
	'use strict';

	$(
		function() {

			function updateAutocompletePositions () {
				$( '.table-autocomplete .position-input' ).each(
					function(index, value) {
						$( value ).val( index );
					}
				);
			}

			if($('.searched_keyword').length)
			{
				$('.searched_keyword').DataTable(
				{
					dom: 'Blfrtip',
					order:[[2,'desc']],
					buttons:['copy', 'csv', 'excel', 'pdf', 'print'],
					lengthMenu:[10,25,50,-1]
				}
				);
			}

			$( '.table-autocomplete tbody' ).sortable(
				{
					update: function() {
						updateAutocompletePositions();
					}
				}
			);
		}
	);
})( jQuery );
