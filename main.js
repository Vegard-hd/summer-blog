import supabase from "./backend";
console.log("test");
$(function () {
	$("#darkmodeTgl").on("click", function () {
		$("body").toggleClass("darkmode");
		$("main").toggleClass("darkmode");
		$("footer").toggleClass("darkmode");
		$("header").toggleClass("darkmode");
		$("textarea").toggleClass("darkmode");
		$("#submitUserInput").toggleClass("darkmode");
		$("#title_input_text").toggleClass("darkmode");
		$(this).toggleClass("darkmode");
		if ($(this).hasClass("darkmode")) $(this).text("Disable dark mode");
		else $(this).text("Enable dark mode");
		if ($(this).hasClass("waves")) {
			$(this).removeClass("waves").addClass("waves-light");
		} else $(this).removeClass("waves-light").addClass("waves");
	});

	$("#nav-home").on("click", function () {
		$("#nav-create").removeClass("active");
		$("#nav-profile").removeClass("active");
		$(this).addClass("active");
		$("#defualt-content").removeClass("hidden");
		$("#profile-content").addClass("hidden");
		$("#create-content").addClass("hidden");
	});
	$("#nav-create").on("click", function () {
		$("#nav-home").removeClass("active");
		$("#nav-profile").removeClass("active");
		$(this).addClass("active");
		$("#defualt-content").addClass("hidden");
		$("#profile-content").addClass("hidden");
		$("#create-content").removeClass("hidden");
	});
	$("#nav-profile").on("click", function () {
		$("#nav-home").removeClass("active");
		$("#nav-create").removeClass("active");
		$(this).addClass("active");
		$("#defualt-content").addClass("hidden");
		$("#profile-content").removeClass("hidden");
		$("#create-content").addClass("hidden");
	});
	$("input#title_input_text, textarea#textarea2").characterCounter();
});

async function database1(title, mainContent) {
	const { data, error } = await supabase
		.from("summer_blog")
		.insert([{ id: "title2", title: title, main_content: mainContent }])
		.select();
}
// database1();
