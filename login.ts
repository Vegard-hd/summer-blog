import Swal from "sweetalert2";
import supabase from "./backend";
type LoginFormResult = {
	username: string;
	password: string;
};
async function signInWithEmail(email: string, password: string) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email: email,
		password: password,
	});
}
let usernameInput: HTMLInputElement;
let passwordInput: HTMLInputElement;
export default async function loginForm() {
	Swal.fire<LoginFormResult>({
		title: "Login Form",
		html: `
    <input type="text" id="username" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">
  `,
		confirmButtonText: "Sign in",
		focusConfirm: false,
		didOpen: () => {
			const popup = Swal.getPopup()!;
			usernameInput = popup.querySelector("#username") as HTMLInputElement;
			passwordInput = popup.querySelector("#password") as HTMLInputElement;
			usernameInput.onkeyup = (event) =>
				event.key === "Enter" && Swal.clickConfirm();
			passwordInput.onkeyup = (event) =>
				event.key === "Enter" && Swal.clickConfirm();
		},
		preConfirm: () => {
			const username = usernameInput.value;
			const password = passwordInput.value;
			if (!username || !password) {
				Swal.showValidationMessage(`Please enter username and password`);
			}
			try {
				signInWithEmail(username, password);
			} catch (error) {
				console.log(error);
			}
			return { username, password };
		},
	});
}
