import { UserData } from "../service/safe-service";

export interface SavedPassword {
	title: string;
	email: string;
	userName: string;
	encryptedPass: string;
	dateModified: Date;
	isQuickAccess: boolean;
}

export function getUser(): UserData {
	return {
		userId: "something",
		email: "email@email.com",
		previousLogin: new Date(),
		lastName: "Last",
		firstName: "First",
		lastLogin: new Date(),
		profileImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
	};
}

export function getSavedPasswords(): SavedPassword[] {
	return [
		{
			title: "Test Entry",
			email: "test@test.com",
			userName: "testUserName",
			encryptedPass: "testEncryptedPassword$",
			dateModified: new Date(),
			isQuickAccess: true,
		},
		{
			title: "Test Entry 2",
			email: "test@test.com",
			userName: "testUserName2",
			encryptedPass: "testEncryptedPassword2",
			dateModified: new Date(),
			isQuickAccess: false,
		},
	];
}
