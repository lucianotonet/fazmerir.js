/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$(function() {

    var r = Math.floor((Math.random() * 1000000) + 1);
    $('#demo').text( r );
    $('#fzmr_amount').val( r );

});

$( function(){

    // Just for demo purposes...
    //   See the documentation
    
    // var stylespathuri = 'https://cdn.rawgit.com/tonetlds/fazmerir.js/master/styles/';
    var stylespathuri = 'js/fazmerir.js/styles/';

    $( '#demo' ).fazMeRir({                
        'style' : 'default',
        'stylespath': stylespathuri,
        'prefix': 'R$ ',
        'centsSeparator': ',',
        'thousandsSeparator': '.'
    });

    $( '.price' ).fazMeRir({                
        'style' : 'demo',
        'stylespath': stylespathuri,
        'prefix': 'R$ ',
        'centsSeparator': ',',
        'thousandsSeparator': '.'
    });

    $( '.example1' ).fazMeRir({                
        'style': 'serious',
        'stylespath': stylespathuri,
        'prefix': 'R$ ',
        'centsSeparator': ',',
        'thousandsSeparator': '.',
        'suffix': '/mês',
    });

    $('input').on('keyup', function(event) {                                    
        var text = $('#fzmr_amount').val();
        $('#demo').text( text ).fazMeRir({              
            'style' : $( '#inputFazmerir_style option:selected' ).val(),
            'stylespath': stylespathuri,
            'prefix': $('#fzmr_prefix').val(),
            'suffix': $('#fzmr_suffix').val()
        });     

        $('#example').find('pre').text( displaySnippet() );         

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

        $('.fazmerir-styles-list').append('<br>'+value);
    });

    $('.fazmerir-styles-count').text( styles.length );

    select.change(function(){
        var style = $(this).val();

        var text = $('#fzmr_amount').val();
        $('#demo').text( text ).fazMeRir({              
            'style' : $( '#inputFazmerir_style option:selected' ).val(),
            'stylespath': stylespathuri,
            'prefix': $('#fzmr_prefix').val(),
            'suffix': $('#fzmr_suffix').val()
        });     

        $('#example').find('pre').text( displaySnippet() );
        
    }).change();


    $.each( styles, function(index, val) {
        console.log( val );
    });


    function displaySnippet(){
        var output = "jQuery( 'your-element' ).fazMeRir({\n";                       

            if( $( '#inputFazmerir_style option:selected' ).val().length ){
                if( $( '#inputFazmerir_style option:selected' ).val() != 'default' ){
                    output += " 'style' : '"+$( '#inputFazmerir_style option:selected' ).val()+"',\n";
                }
            }

            if( $('#fzmr_prefix').val().length ){
                output += " 'prefix' : '"+$('#fzmr_prefix').val()+"',\n";
            }

            if( $('#fzmr_suffix').val().length ){
                output += " 'suffix' : '"+$('#fzmr_suffix').val()+"',\n";
            }

        output += "});\n";
        return output;
    }
    
});
