$(function() {
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/users/383321385/media/recent/?access_token=274890609.36ecef1.67aa02f9c66841b7953637a3ee5f0411",
		success: function(data) {
			for (var i = 0; i < 10; i++) {
				$("#instafeed").append("<div class='instaframe'><a target='_blank' href='" + data.data[i].link +"'><img src='" + data.data[i].images.standard_resolution.url +"' /></a></div>");
			}
		}
	});
});
