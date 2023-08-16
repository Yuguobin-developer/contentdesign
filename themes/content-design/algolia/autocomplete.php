<script type="text/html" id="tmpl-autocomplete-header">
  <div class="autocomplete-header">
	<div class="clear"></div>
  </div>
</script>

<script type="text/html" id="tmpl-autocomplete-header-components">
  <div class="autocomplete-header" style="">
	<div class="autocomplete-header-title">{{{ data.type }}}</div>
	<div class="clear"></div>
  </div>
</script>

<script type="text/html" id="tmpl-autocomplete-post-suggestion">
  <a class="suggestion-link" href="{{ data.permalink }}" title="{{ data.post_title }}" tabindex="0">
		<div class="suggestion-post-attributes">
			<div class="search-parent-title">
				<span class="post_parent" style="width: 100%">{{{data.parent}}}</span>
			</div>
			<div class="search-content">
				<span class="suggestion-post-title">{{{ data._highlightResult.post_title.value }}}</span>
		  		<# if ( data._snippetResult['content'] ) { #>
				<span class="suggestion-post-content">{{{ data._snippetResult['content'].value }}}</span>
				<# } #>
			</div>		  	
		</div>
  </a>
</script>

<script type="text/html" id="tmpl-autocomplete-post-suggestion-components">
  <a class="suggestion-link" href="{{ data.permalink }}" title="{{ data.post_title }}" data-type="{{ data.taxonomies.component_category[0] }}">
		<div class="suggestion-post-attributes">
			<div style="width: 80px">
				<span class="post_parent" style="width: 100%">{{{data.parent}}}</span>
			</div>
			<div>
				<span class="suggestion-post-title">{{{ data._highlightResult.post_title.value }}}</span>
		  		<# if ( data._snippetResult['content'] ) { #>
				<span class="suggestion-post-content">{{{ data._snippetResult['content'].value }}}</span>
				<# } #>
			</div>		  	
		</div>
  </a>
</script>

<script type="text/html" id="tmpl-autocomplete-term-suggestion">
  <a class="suggestion-link" href="{{ data.permalink }}" title="{{ data.name }}" tabindex="0">
	<svg viewBox="0 0 21 21" width="21" height="21">
	  <svg width="21" height="21" viewBox="0 0 21 21">
		<path
			d="M4.662 8.72l-1.23 1.23c-.682.682-.68 1.792.004 2.477l5.135 5.135c.7.693 1.8.688 2.48.005l1.23-1.23 5.35-5.346c.31-.31.54-.92.51-1.36l-.32-4.29c-.09-1.09-1.05-2.06-2.15-2.14l-4.3-.33c-.43-.03-1.05.2-1.36.51l-.79.8-2.27 2.28-2.28 2.27zm9.826-.98c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25z"
			fill-rule="evenodd"></path>
	  </svg>
	</svg>
	<span class="suggestion-post-title">{{{ data._highlightResult.name.value }}}</span>
  </a>
</script>

<script type="text/html" id="tmpl-autocomplete-user-suggestion">
  <a class="suggestion-link user-suggestion-link" href="{{ data.posts_url }}" title="{{ data.display_name }}" tabindex="0">
	<# if ( data.avatar_url ) { #>
	  <img class="suggestion-user-thumbnail" src="{{ data.avatar_url }}" alt="{{ data.display_name }}">
	  <# } #>

		<span class="suggestion-post-title">{{{ data._highlightResult.display_name.value }}}</span>
  </a>
</script>

<script type="text/html" id="tmpl-autocomplete-empty">
  <div class="autocomplete-empty">
	  
	<div class=" no-result">
	<?php esc_html_e( 'No results matching ', 'algolia' ); ?> 
	<span class="empty-query">"{{ data.query }}"</span>
	<div class="give_feedback feedback-text">
	Give feedback</div>
	</div>
  </div>
</script>


<script type="text/javascript">
  jQuery(function () {
		/* init Algolia client */
		var client = algoliasearch(algolia.application_id, algolia.search_api_key);

		/* Setup dropdown menus */
		jQuery(algolia.autocomplete.input_selector).each(function (i) {
			var $searchInput = jQuery(this),
				algoliaSources = getSources( false ),
				componentsOnly = $searchInput.is('#search-components');
			
			if ( componentsOnly ) {
				algoliaSources = getSources( true );
			}

			var config = {
				debug: algolia.debug,
				hint: false,
				openOnFocus: true,
				appendTo: 'body',
				templates: {
					empty: wp.template('autocomplete-empty')
				}
			};

			/* Instantiate autocomplete.js */
			var autocomplete = algoliaAutocomplete($searchInput[0], config, algoliaSources)
			.on('autocomplete:selected', function (e, suggestion) {
				var parser = document.createElement('a');
				parser.href = suggestion.permalink;

				if ( typeof ga === 'undefined' ) {
					window.location.href = suggestion.permalink;
				} else {
					ga('send', 'event',
					{
						'eventCategory': 'Search',
						'eventAction': 'Clicked on result',
						'eventLabel': $searchInput.val() + ' [' + parser.pathname + ']',
						'eventValue': 1,
						'hitCallback': function() {
							window.location.href = suggestion.permalink;
						},
					});
				}
			}).on('autocomplete:empty', function() {
				if ( $searchInput.val().length >= 4 ) {
					ga('send', 'event',
					{
						'eventCategory': 'Search',
						'eventAction': 'No results',
						'eventLabel': $searchInput.val(),
					});
				}
			});

			if ( componentsOnly ) {
				autocomplete.on('autocomplete:updated', function() {
					var suggestions = [],
						$suggestions = jQuery('.algolia-autocomplete').slice(1,2).find('.aa-suggestions');
					suggestions['IDS Approved'] = [];
					suggestions['IDS Beta'] = [];
					suggestions['Labs'] = [];

					$suggestions.find('.aa-suggestion').each( function() {
						suggestions[ jQuery(this).find('.suggestion-link').data('type') ].push( jQuery(this) );
						jQuery(this).attr("tabindex", "0");
					});

					for (var key in suggestions) {
						if ( suggestions[ key ].length ) {
							var header = wp.template( 'autocomplete-header-components' ) ({
								type: _.escape( key )
							})
							$suggestions.append( header );
							suggestions[ key ].forEach( function( suggestion ) {
								$suggestions.append( suggestion );	
							});
						}
					}
					
				});
			}

			/* Force the dropdown to be re-drawn on scroll to handle fixed containers. */
			jQuery(window).scroll(function() {
			if(autocomplete.autocomplete.getWrapper().style.display === "block") {
				autocomplete.autocomplete.close();
				autocomplete.autocomplete.open();
			}
			});
		});

		function getSources( componentsOnly = false ) {
			var sources = [];

			jQuery.each(algolia.autocomplete.sources, function (i, config) {
				var suggestion_template = wp.template( ( componentsOnly ? 'autocomplete-post-suggestion-components' : config['tmpl_suggestion'] ) );
				sources.push({
					source: algoliaAutocomplete.sources.hits(client.initIndex(config['index_name']), {
						hitsPerPage: config['max_suggestions'],
						attributesToSnippet: [
						'content:10'
						],
						highlightPreTag: '__ais-highlight__',
						highlightPostTag: '__/ais-highlight__'
					}),
					templates: {
						header: function () {
						return componentsOnly ? '' : wp.template( 'autocomplete-header' ) ({
							label: _.escape(config['label'])
						});
						},
						suggestion: function (hit) {
							if(hit.escaped === true) {
								return suggestion_template(hit);
							}
							hit.escaped = true;

							for (var key in hit._highlightResult) {
								/* We do not deal with arrays. */
								if (typeof hit._highlightResult[key].value !== 'string') {
								continue;
								}
								hit._highlightResult[key].value = _.escape(hit._highlightResult[key].value);
								hit._highlightResult[key].value = hit._highlightResult[key].value.replace(/__ais-highlight__/g, '<em>').replace(/__\/ais-highlight__/g, '</em>');
							}

							for (var key in hit._snippetResult) {
								/* We do not deal with arrays. */
								if (typeof hit._snippetResult[key].value !== 'string') {
								continue;
								}

								hit._snippetResult[key].value = _.escape(hit._snippetResult[key].value);
								hit._snippetResult[key].value = hit._snippetResult[key].value.replace(/__ais-highlight__/g, '<em>').replace(/__\/ais-highlight__/g, '</em>');
							}

							return suggestion_template(hit);
						}
					}
				});

			});

			if ( componentsOnly ) {
				sources = sources.slice(0,1);
			}
			return sources;
		}
  });
</script>
