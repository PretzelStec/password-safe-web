import { useEffect, useState } from "react";
import {
	getSavedPasswords,
	getUser,
	SavedPassword,
} from "../mocks/get-user-data";
import moment from "moment";
import "./dashboard.css";
import { getSafe, UserData, Password } from "../service/safe-service";
import { Password as PasswordComponent } from "./password/password";
import { useCookies } from "react-cookie";
import { CreationForm } from "./creation-form/creation-form";

export function Dashboard({ token }: { token: string }) {
	const [userData, setUserData] = useState<UserData>(getUser());
	const [passwords, setPasswords] = useState<Password[]>([]);
	const [quickAccess, setQuickAccess] = useState<Password[]>([]);
	const [showCreation, setShowCreation] = useState(false);
	const [cookies] = useCookies();

	const loadSafe = () => {
		getSafe(token)
			.then((data) => {
				setShowCreation(false);
				setUserData(data.userData);
				setPasswords(data.passwords);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		loadSafe();
	}, []);

	useEffect(() => {
		if (passwords) {
			const quickAccessPasswords = passwords.filter((password) => {
				return password.isQuickAccess;
			});
			setQuickAccess(quickAccessPasswords);
		}
	}, [passwords]);

	return (
		<div>
			<div className="app-col p-3">
				<div className="head-card-container row">
					<div className="card header-card col bg-purple">
						<div>
							Last Login:{" "}
							<span className="large-text">
								{moment(userData.previousLogin).format(
									"MM/DD/YY"
								)}
							</span>
						</div>
					</div>
					<div className="card header-card col bg-gray border-purple w-text">
						<div className="row p-5">
							<div className="name mt-2 col-9">
								<p className="faded-text small-text">
									Signed in as:
								</p>
								<p className="ex-lg-text">
									{userData.lastName}, {userData.firstName}
								</p>
							</div>
							<div className="profile col-3">
								<img
									alt="profile"
									className="profile-image"
									src={userData.profileImg}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-blue">
					<div className="card-title large-text">
						Quick Access ({quickAccess.length})
					</div>
					{quickAccess.map((pass) => (
						<PasswordComponent
							key={pass.passwordId}
							password={pass}
						/>
					))}
				</div>
				<div className="card bg-green">
					<div className="card-title large-text">
						All ({passwords.length})
						<div
							className="add-item"
							onClick={() => {
								setShowCreation(!showCreation);
							}}
						>
							{showCreation ? "x" : "+"}
						</div>
						{showCreation ? (
							<CreationForm loadSafe={loadSafe}></CreationForm>
						) : undefined}
					</div>
					{passwords.map((pass) => (
						<PasswordComponent
							key={pass.passwordId}
							password={pass}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
