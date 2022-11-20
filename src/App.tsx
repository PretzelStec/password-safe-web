import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getSavedPasswords, getUser } from "./mocks/get-user-data";
import moment from "moment";

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
					<div className="password bg-gray">
						<div className="password-row row">
							<div className="options"></div>
							<div className="col">
								<div className="password-info-group col w-text">
									<div>{passwords[0].title}</div>
									<div>{passwords[0].email}</div>
								</div>
							</div>
							<div className="col password-group">hello</div>
						</div>
					</div>
					<div className="password bg-gray">
						<div className="password-row row">
							<div className="options"></div>
							<div className="col">
								<div className="password-info-group col w-text">
									<div>{passwords[0].title}</div>
									<div>{passwords[0].email}</div>
								</div>
							</div>
							<div className="col password-group">hello</div>
						</div>
					</div>
				</div>

				<div className="card bg-green">
					<div className="card-header large-text">
						Quick Access ({1})
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
