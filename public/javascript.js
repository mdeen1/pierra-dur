$(document).ready(function(){
	console.log("connected")

	$("#other-img-1").click(function(){
		$("#main-img").removeClass("p1-1");
		$("#main-img").addClass("p1-2");
		$("#other-img-1").removeClass("p1-2");
		$("#other-img-1").addClass("p1-1");
	});




});
