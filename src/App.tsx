import { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import "./App.css";
import { Dashboard } from "./dashboard/dashboard";
import { Login } from "./login/login";

function App() {
	const [token, setToken] = useState<string>();
	const [cookies, setCookie] = useCookies();

	useEffect(() => {
		if (cookies.pwsjwt) {
			setToken(cookies.pwsjwt);
		}
	}, []);

	useEffect(() => {
		if (token !== cookies.pwsjwt) {
			setCookie("pwsjwt", token);
		}
	}, [token]);

	if (token === undefined) {
		return <Login setToken={setToken} />;
	}

	return (
		<CookiesProvider>
			<div className="App bg-gray">
				<Dashboard token={token} />
			</div>
		</CookiesProvider>
	);
}

export default App;
