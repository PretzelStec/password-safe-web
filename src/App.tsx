import { useEffect, useState } from "react";
import {
	getSavedPasswords,
	getUser,
	SavedPassword,
} from "./mocks/get-user-data";
import moment from "moment";
import "./App.css";
import { getSafe, UserData, Password } from "./service/safe-service";
import { Password as PasswordComponent } from "./password/password";
import { useCookies } from "react-cookie";

function App() {
	const [userData, setUserData] = useState<UserData>(getUser());
	const [passwords, setPasswords] = useState<Password[]>([]);
	const [quickAccess, setQuickAccess] = useState<Password[]>([]);
	const [cookies] = useCookies();

	useEffect(() => {
		getSafe(cookies.pwsjwt)
			.then((data) => {
				setUserData(data.userData);
				setPasswords(data.passwords);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		console.log("hello");
		if (passwords) {
			const quickAccessPasswords = passwords.filter((password) => {
				return password.isQuickAccess;
			});
			setQuickAccess(quickAccessPasswords);
		}
	}, [passwords]);

	return (
		// TODO: break down into components
		<div className="App bg-gray">
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
						<PasswordComponent password={pass} />
					))}
				</div>
				<div className="card bg-green">
					<div className="card-title large-text">
						All ({passwords.length})
					</div>
					{passwords.map((pass) => (
						<PasswordComponent password={pass} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
