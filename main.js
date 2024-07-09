import supabase from "./backend";

console.log("test");
$("#darkmodeTgl").on("click", function () {
	$("body").toggleClass("darkmode");
	$("main").toggleClass("darkmode");
	$("footer").toggleClass("darkmode");
	$("header").toggleClass("darkmode");
});

async function database1() {
	const { data, error } = await supabase
		.from("summer_blog")
		.insert([{ id: "someValue", title: "otherValue" }])
		.select();
}
// database1();
