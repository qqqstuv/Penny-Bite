var map;

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	// var marker = new google.maps.Marker({
	//   position: uluru,
	//   map: map
	// });
}


$(document).ready(function(){
    $("#addpin").click(function(){
        console.log(map);
        var myLatLng = {lat: -25.363, lng: 131.044};
        var marker = new google.maps.Marker({
	      position: myLatLng,
	      map: map,
	      title: 'Hello World!'
        });
    });
    var semesterUrl = 'http://pennybite.herokuapp.com';
	$.get(semesterUrl, function(data){
		console.log(data);
	});
});