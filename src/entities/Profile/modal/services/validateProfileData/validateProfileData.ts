import {Profile} from '../../types/profile';
import {ValidateProfileError} from '../../../../../entities/Profile';

export const validateProfileData = (profile?: Profile) => {
	if (!profile) {
		return [ValidateProfileError.SERVER_ERROR];
	}
	const {
		firstName, lastName, age, city, username, country
	} = profile;

	const errors: ValidateProfileError[] = [];

	if (!firstName || !lastName) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	if (!country) {
		errors.push(ValidateProfileError.INCORRECT_COUNTRY);
	}

	if (!username) {
		errors.push(ValidateProfileError.INCORRECT_USERNAME);
	}

	return errors;
};