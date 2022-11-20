export interface AppData {
	user: User;
	passwordList: SavedPassword[];
}

export interface User {
	lastName: string;
	firstName: string;
	lastLogin: Date;
	profileImg: string;
}

export interface SavedPassword {
	title: string;
	email: string;
	userName: string;
	encryptedPass: string;
	dateModified: Date;
	isQuickAccess: boolean;
}

export function getUser(): User {
	return {
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
	];
}
