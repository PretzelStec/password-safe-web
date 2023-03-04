import { useState } from "react";
import { addPassword } from "../../service/safe-service";
import "./creation-form.css";

interface CreationFormProps {
	loadSafe: () => void;
}

export function CreationForm(props: CreationFormProps) {
	const [url, setUrl] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isQuickAccess, setIsQuickAccess] = useState<boolean>(false);

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addPassword({
						url,
						email,
						username,
						password,
						isQuickAccess,
					}).then(() => props.loadSafe());
				}}
			>
				<div className="form-group">
					<label>URL: </label>
					<input
						className="creation-entry"
						type="text"
						onChange={(event) => {
							setUrl(event.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>Email: </label>
					<input
						className="creation-entry"
						type="text"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>Username: </label>
					<input
						className="creation-entry"
						type="text"
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>Password: </label>
					<input
						className="creation-entry"
						type="text"
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>QuickAccess?: </label>
					<input
						className="creation-entry"
						type="checkbox"
						checked={isQuickAccess}
						onChange={() => {
							setIsQuickAccess(!isQuickAccess);
						}}
					></input>
				</div>
				<input className="bg-blue mb-2" type="submit"></input>
			</form>
		</div>
	);
}
