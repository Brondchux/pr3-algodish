// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
	// get user data from JSON web token by decoding it
	getProfile() {
		return decode(this.getToken());
	}

	// return `true` or `false` if token exists (does not verify if it's expired yet)
	loggedIn() {
		const token = this.getToken();
		return token ? true : false;
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem("id_token");
	}

	getUserId() {
		// Retrieves the user id from localStorage
		return localStorage.getItem("user_id");
	}

	login(userData) {
		// Saves user token to localStorage and reloads the application for logged in status to take effect
		localStorage.setItem("id_token", userData.token);
		localStorage.setItem("user_id", userData.user._id);
		// window.location.assign("/");
	}

	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem("id_token");
		localStorage.removeItem("user_id");
		// this will redirect user to homepage and reset the state of the application
		window.location = "/";
	}
}

export default new AuthService();
