import { useState } from "react";
import { authenticate } from "../service/auth-service";
import "./login.css";

interface LoginProps {
	setToken: (token: string) => void;
}

export function Login(props: LoginProps) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginFailedReason, setLoginFailedReason] = useState<string>();

	const login = async (email: string, password: string): Promise<void> => {
		setLoginFailedReason(undefined);
		return authenticate(email, password)
			.then(async (response) => {
				if (response.status === "success") {
					props.setToken(response.token);
					localStorage.setItem("password", password);
				}
				if (response.status === "failure") {
					setLoginFailedReason(
						"Password and email do not match records."
					);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="login">
			<h1>LOGIN</h1>
			<p className="error-message">{loginFailedReason}</p>
			<form
				className="form"
				onSubmit={(event) => {
					event.preventDefault();
					login(email, password);
				}}
			>
				<input
					type="text"
					className="login-entry"
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<input
					type="text"
					className="login-entry"
					onChange={(event) => {
						setPassword(event.target.value);
					}}
				/>
				<input className="login-entry" type="submit" />
			</form>
		</div>
	);
}
