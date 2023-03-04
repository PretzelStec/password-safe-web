import axios from "axios";

export function authenticate(email: string, password: string) {
	try {
		return fetch(
			"https://api.jacobstec.dev/password-safe-api/v1/authenticate",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			}
		).then((response) => response.json());
	} catch (e) {
		console.log("Error when authenticating", e);
		throw e;
	}
}
