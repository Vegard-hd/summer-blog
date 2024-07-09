import supabase from "./backend";
console.log("test");
$("#darkmodeTgl").on("click", function () {
	$("body").toggleClass("darkmode");
	$("main").toggleClass("darkmode");
	$("footer").toggleClass("darkmode");
	$("header").toggleClass("darkmode");
	$(this).toggleClass("darkmode");
	if ($(this).hasClass("darkmode")) $(this).text("Disable dark mode");
	else $(this).text("Enable dark mode");
	if ($(this).hasClass("waves")) {
		$(this).removeClass("waves").addClass("waves-light");
	} else $(this).removeClass("waves-light").addClass("waves");
});

async function database1() {
	const { data, error } = await supabase
		.from("summer_blog")
		.insert([{ id: "someValue", title: "otherValue" }])
		.select();
}
// database1();
