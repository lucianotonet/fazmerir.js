/*
* FazMeRir.js
* jQuery Plugin
* 
* Created By Luciano Tonet <tonetlds@gmail.com>
* Version: 0.0.1
* Release: 2015-06-14
*/
;(function( $ ){	

	$.fn.fazMeRir = function ( parameters ) {		

		// Price Format Defaults
		var priceFormatDefaults = 
		{
			prefix: 'R$ ',
            suffix: '',
			centsSeparator: ',',
			thousandsSeparator: '.',
			limit: false,
			centsLimit: 2,
			clearPrefix: false,
            clearSufix: false,
			allowNegative: false,
			insertPlusSign: false,
			clearOnEmpty:false
		};
		var priceFormatOptions = $.extend( priceFormatDefaults, parameters );

		// Lettering Defaults #todo
		var letteringDefaults = 
		{
			split: 'letters' //letters, words, line           
		};
		var letteringOptions = $.extend( letteringDefaults, parameters );

		// FazMeRir Defaults
		var fazmerirDefaults = 
		{
			style: 'default',
			stylespath: 'styles/'  // CDN https://cdn.rawgit.com/tonetlds/fazmerir.js/master/styles/
			// stylespath: 'https://rawgit.com/tonetlds/fazmerir.js/master/styles/' // Low-traffic tests
		};
		var fazmerirOptions = $.extend( fazmerirDefaults, parameters );		
		

		// Each element
		this.each(function(){
			
			var el = $(this);

			// Unbind previously price_format
			if( !el.hasClass('price_format') ){	
		      	el.unbind(".price_format");
		    };
		    
			// PriceFormat + Lettering
			el.priceFormat( priceFormatOptions );
			el.lettering( letteringOptions.split );
			
			// Add the classe, if not have
			if( !el.hasClass('[class^="fazmerir-'+fazmerirOptions.style+'"]') ){							
				el.addClass( 'fazmerir-'+fazmerirOptions.style );
			}	
			
			// Get all classes of element
			var classes = el.attr('class').split(' ');			
			classes = classes.filter(function(v){return v!==''}); // remove empties
			
			var stylesToLoad;
			$.each(classes, function(index, val) {
				if( val.indexOf('fazmerir-') > -1 ){
					stylesToLoad = [ classes[index] ];
				}
			});

			console.log( stylesToLoad );

			// Append Stylesheet styles	
			var href = fazmerirOptions.stylespath+'fazmerir.'+fazmerirOptions.style+'.css';
						
			if ( $('#fazmerir-'+fazmerirOptions.style+'-stylesheet' ).length < 1 ) {			
				var head = document.head
				  , link = document.createElement('link');

				link.type = 'text/css';
				link.id   = 'fazmerir-'+fazmerirOptions.style+'-stylesheet';
				link.rel  = 'stylesheet';
				link.href = href;

				head.appendChild(link);		
			}


			// Add the contextual classes
			var prefixLegth 		= priceFormatOptions.prefix.length;
			var suffixLegth 		= priceFormatOptions.suffix.length;
			var centsSeparator  	= priceFormatOptions.centsSeparator;
			var thousandsSeparator  = priceFormatOptions.thousandsSeparator;			
			var centsLimit 			= priceFormatOptions.centsLimit;

			var totalChars = el.children('span').length;			

			// Each CHAR / WORD
			el.find('span').each(function( index ) {		

				$(this).removeClass();
				
				// Logic to insert classes
				if( index < prefixLegth ){
					$(this).addClass('prefix');
				}else			
				if( index >= (totalChars - suffixLegth - centsLimit - 1 ) && index < (totalChars - suffixLegth) ){
					$(this).addClass('cents');
				}else
				if( index <= (totalChars - suffixLegth - 7) ){
					$(this).addClass('thousands');
				}else
				if( index >= prefixLegth && index < (totalChars - suffixLegth) ){
					$(this).addClass('');
				}else
				if( index >= (totalChars - suffixLegth) ){
					$(this).addClass('suffix');
				}
				// If separator
				if( $(this).text() == thousandsSeparator || $(this).text() == centsSeparator ){
					$(this).addClass('separator');
				}				

			});

		});

	}		

	// Define styles
	$.fn.fazMeRir.styles = [
		'demo',
		'default',
		'golden',
		'serious'		
	];

})( jQuery );