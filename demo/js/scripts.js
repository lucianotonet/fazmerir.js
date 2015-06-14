jQuery( function(){

	// Just for demo purposes...
	//   See the documentation
	
	jQuery( '#demo' ).fazMeRir({				
		'style' : 'default',
		'prefix': 'R$ ',
		'centsSeparator': ',',
		'thousandsSeparator': '.'
	});

	$('input').on('keyup', function(event) {									
		var text = $('#fzmr_amount').val() + "" + $('#fzmr_suffix').val();
		$('#demo').text( text ).fazMeRir({				
			'style' : $( '#inputFazmerir_style option:selected' ).val(),
			'prefix': $('#fzmr_prefix').val(),
			'suffix': $('#fzmr_suffix').val()
		});		

		$('#example pre').text( displaySnippet() );			

	});

	$('.price_format').priceFormat({
		'prefix': '',
		'centsSeparator': ',',
		'thousandsSeparator': '.',
		'suffix': '',
	});



	var styles = $( '#demo' ).fazMeRir.styles;
	var select = $( '#inputFazmerir_style' );

	styles.forEach(function(value, index){
		select.append($("<option />")
			.val( value )
			.text( value ));
	});

	select.change(function(){
		var style = $(this).val();
		$("link#fazmerir_css").attr("href", '../styles/fazmerir.'+style+'.css' );

		var text = $('#fzmr_amount').val() + "" + $('#fzmr_suffix').val();
		$('#demo').text( text ).fazMeRir({				
			'style' : $( '#inputFazmerir_style option:selected' ).val(),
			'prefix': $('#fzmr_prefix').val(),
			'suffix': $('#fzmr_suffix').val()
		});		

		$('#example pre').text( displaySnippet() );
		
	}).change();


	$.each( styles, function(index, val) {
		console.log( val );
	});


	function displaySnippet(){
		var output = "jQuery( 'your-element' ).fazMeRir({\n";						

			if( $( '#inputFazmerir_style option:selected' ).val().length ){
				if( $( '#inputFazmerir_style option:selected' ).val() != 'default' ){
					output += "	'style' : '"+$( '#inputFazmerir_style option:selected' ).val()+"',\n";
				}
			}

			if( $('#fzmr_prefix').val().length ){
				output += "	'prefix' : '"+$('#fzmr_prefix').val()+"',\n";
			}

			if( $('#fzmr_suffix').val().length ){
				output += "	'suffix' : '"+$('#fzmr_suffix').val()+"',\n";
			}

		output += "});\n";
		return output;
	}
	
});	