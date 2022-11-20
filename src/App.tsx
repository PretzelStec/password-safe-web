import { useState } from "react";
import { getSavedPasswords, getUser } from "./mocks/get-user-data";
import moment from "moment";
import "./App.css";
import { Password } from "./password/password";

function App() {
	const [userData, setUserData] = useState(getUser());
	const [passwords, setPasswords] = useState(getSavedPasswords());

	return (
		// TODO: break down into components
		<div className="App bg-gray">
			<div className="app-col p-3">
				<div className="head-card-container row">
					<div className="card header-card col bg-purple">
						<div>
							Last Login:{" "}
							<span className="large-text">
								{moment(userData.lastLogin).format("MM/DD/YY")}
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
									className="profile-image"
									src={userData.profileImg}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="card bg-blue">
					<div className="card-title large-text">
						Quick Access ({1})
					</div>
					<Password password={passwords[0]} />
				</div>
				<div className="card bg-green">
					<div className="card-title large-text">All ({1})</div>
					<Password password={passwords[0]} />
				</div>
			</div>
		</div>
	);
}

export default App;
