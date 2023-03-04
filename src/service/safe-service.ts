import axios from "axios";
import CryptoJS from "crypto-js";

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

export interface NewPassword {
	username: string;
	email: string;
	url: string;
	password: string;
	isQuickAccess: boolean;
}

export async function getSafe(token: string): Promise<Safe> {
	const response = await axios.get(
		"https://api.jacobstec.dev/password-safe-api/v1/getDashboard"
	);
	return response.data;
}

export async function addPassword(password: NewPassword) {
	console.log(password);
	const encryptedPassword = {
		username: encrypt(password.username),
		email: encrypt(password.email),
		url: encrypt(password.url),
		password: encrypt(password.password),
		isQuickAccess: password.isQuickAccess,
	};
	const response = await axios.post(
		"https://api.jacobstec.dev/password-safe-api/v1/addPassword",
		encryptedPassword
	);
	return response.data;
}

export function decrypt(value: string): string {
	// TODO: we are going to want to switch to an asymmetric encryption for these two.
	// that will enable sharing. PUBLIC + PRIVATE Keys baby
	// later change.
	const password = localStorage.getItem("password");

	if (password) {
		const decryption = CryptoJS.AES.decrypt(value, password);
		return decryption.toString(CryptoJS.enc.Utf8);
	}

	return "";
}

export function encrypt(value: string): string {
	const password = localStorage.getItem("password");

	if (password) {
		const encryption = CryptoJS.AES.encrypt(value, password);
		return encryption.toString();
	}

	return "";
}
