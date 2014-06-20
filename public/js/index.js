$(document).ready(function(){
	var latit;
	var lon;
	$('#headhide').text("");
	console.log("inside click image");
	$('img.img-responsive').on('click',function(){
		console.log("image clicked");
		 var img=$(this).attr("src");		
	     var capt=$(this).attr("title");
	     console.log(capt);
	     $('#replace').attr('src',img);	 
         $('#headhide').text(capt);        
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': capt}, function(results, status) {
          var location = results[0].geometry.location;
        var  latit=location.lat();
        var  lon=location.lng();
          console.log(latit +" "+ lon);  
                  var apiKey = '31b7ed68bc12616247a0f3e272fbb089';
    var url = 'https://api.forecast.io/forecast/';
    console.log(latit +" "+ lon);
    var lati = latit;
    var longi = lon;
    var data;
    
    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {

    	var ic1=data.daily.data[0].icon;
        
              
        var ic1=data.daily.data[0].icon;
        var $iconCanvas = $('<canvas width="32" height="32" id="weather-icon">');
        var skycons = new Skycons();  
        skycons.set('weather-icon', ic1);
    	skycons.play();    
       $('#weather').text('Current temperature:  ' + data.currently.temperature +'!!!' + data.daily.summary); 
       console.log(ic1)     
    	$('#weather').text($iconCanvas);
    	
              })   

 


        })
           

             
	})

});
