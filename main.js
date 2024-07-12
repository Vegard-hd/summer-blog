import supabase from "./backend";
import Swal from "sweetalert2";
$(function () {
	async function supaAuth() {
		const { data, error } = await supabase.auth
			.signUp({
				email: "example@email.com",
				password: "example-password",
			})
			.then((dataSuccess) => {
				console.log(dataSuccess);
			});
	}
	$("input#title_input_text, textarea#textarea2").characterCounter();
	$("#darkmodeTgl").on("click", function () {
		$("body").toggleClass("darkmode");
		$("main").toggleClass("darkmode");
		$("footer").toggleClass("darkmode");
		$("header").toggleClass("darkmode");
		$("textarea").toggleClass("darkmode");
		$("#submitUserInput").toggleClass("darkmode");
		$("#title_input_text").toggleClass("darkmode");
		$(".input-field label").toggleClass("darkmode");
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
	$("#submitUserInput").on("click", async function () {
		// M.updateTextFields();
		let titleText = $(".input-field input[type=text]").val();
		let mainText = $("textarea").val();
		if (
			validMainTextInput(mainText) === true &&
			validTitleTextInput(titleText) === true
		)
			return Swal.fire({
				title: "Are you sure?",
				text: "This will post your content",
				icon: "question",
				showCancelButton: true,
				confirmButtonColor: "#4caf50",
				cancelButtonColor: "#f44336",
				confirmButtonText: "Yes, Post it",
			}).then((result) => {
				if (result.isConfirmed === true) {
					console.log("data should be pushed...");
					database1(titleText, mainText);
				}
			});
	});
	function validMainTextInput(input = "string") {
		if (input.length > 1 && input.length < 800) return true;
		return false;
	}
	function validTitleTextInput(input = "string") {
		if (input.length > 1 && input.length <= 20) return true;
		return false;
	}
});

async function database1(title, mainContent) {
	const { data, error } = await supabase
		.from("summer_blog")
		.upsert([{ id: "userIdGoesHere", title: title, main_content: mainContent }])
		.select()
		.then((dataSuccess) => {
			console.log(dataSuccess, dataSuccess[0].created_at);
		});
}
// database1();
