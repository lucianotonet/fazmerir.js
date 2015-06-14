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

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}


$(function() {

    var r = Math.floor((Math.random() * 1000000) + 1);
    $('#demo').text( r );
    $('#fzmr_amount').val( r );

});

$( function(){

    // Just for demo purposes...
    //   See the documentation
    
    var cdn = 'https://cdn.rawgit.com/tonetlds/fazmerir.js/master/styles/';

    $( '#demo' ).fazMeRir({                
        'style' : 'default',
        'stylespath': cdn,
        'prefix': 'R$ ',
        'centsSeparator': ',',
        'thousandsSeparator': '.'
    });

    $('input').on('keyup', function(event) {                                    
        var text = $('#fzmr_amount').val();
        $('#demo').text( text ).fazMeRir({              
            'style' : $( '#inputFazmerir_style option:selected' ).val(),
            'stylespath': cdn,
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

        // $("link#fazmerir_css").attr("href", cdn+'fazmerir.'+style+'.css' );

        var text = $('#fzmr_amount').val() + "" + $('#fzmr_suffix').val();
        $('#demo').text( text ).fazMeRir({              
            'style' : $( '#inputFazmerir_style option:selected' ).val(),
            'stylespath': cdn,
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