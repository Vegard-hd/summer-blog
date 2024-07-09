console.log("test");

$("#darkmodeTgl").on("click", function () {
	$("body").toggleClass("darkmode");
	$("main").toggleClass("darkmode");
	$("footer").toggleClass("darkmode");
	$("header").toggleClass("darkmode");
});
