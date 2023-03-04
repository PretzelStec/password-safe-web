import { useState } from "react";
import { BsThreeDotsVertical, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import { SavedPassword } from "../../mocks/get-user-data";
import { decrypt, Password as PasswordType } from "../../service/safe-service";
import "./password.css";

interface PasswordProps {
	password: PasswordType;
}

export function Password({ password }: PasswordProps) {
	const [optionsOpen, setOptionsOpen] = useState(false);
	const [passShown, setPassShown] = useState(false);

	return (
		<div className="password bg-gray">
			<div className="password-row">
				<div className="col-5 detail-group">
					<div className="row">
						<div className="options col-1">
							<BsThreeDotsVertical
								color="white"
								size={24}
								onClick={() => {
									setOptionsOpen(!optionsOpen);
								}}
							/>
						</div>
						<div className="password-info-group w-text col-11">
							<div className="large-text">{decrypt(password.url)}</div>
							<div className="faded-text small-text">
								{decrypt(password.email)}
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 password-group">
					<input
						className="password-input"
						type={passShown ? "text" : "password"}
						value={ decrypt(password.password) }
						disabled={true}
					></input>

					{passShown ? (
						<BsEyeSlashFill
							color="white"
							size="24"
							className="password-show-icon"
							onClick={() => {
								setPassShown(!passShown);
							}}
						/>
					) : (
						<BsEyeFill
							color="white"
							size="24"
							className="password-show-icon"
							onClick={() => {
								setPassShown(!passShown);
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
