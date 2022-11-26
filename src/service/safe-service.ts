import axios from "axios";

export interface Safe {
	userData: UserData;
	passwords: Password[];
}

export interface UserData {
	userId: string;
	firstName: string;
	lastName: string;
	email: string;
	lastLogin: Date;
	previousLogin: Date;
	profileImg: string;
}

export interface Password {
	passwordId: string;
	username: string;
	email: string;
	url: string;
	password: string;
	isQuickAccess: boolean;
	dateAdded: Date;
}

export async function getSafe(token: string): Promise<Safe> {
	const response = await axios.get(
		"http://localhost:3001/password-safe-api/v1/getDashboard",
		{
			headers: {
				Cookie: `pwsjwt=${token}`,
			},
			withCredentials: true,
		}
	);
	return response.data;
}
