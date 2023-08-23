import {Currency} from "entities/Currency/modal/types/currency";
import {Country} from "entities/Country/model/types/country";

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CURRENCY = 'INCORRECT_CURRENCY',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_AVATAR = 'INCORRECT_AVATAR',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    firstName?: string;
    lastName?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError: ValidateProfileError[] | undefined;
}