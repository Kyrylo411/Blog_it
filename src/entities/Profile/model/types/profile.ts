import { Currency } from 'entities/Currency'
import { Countries } from 'entities/Country'

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
	INCORRECT_AGE = 'INCORRECT_AGE',
	INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
	NO_DATA = 'NO_DATA',
	SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
	firstName?: string,
	lastName?: string,
	age?: number,
	currency?: Currency,
	country?: Countries,
	city?: string,
	avatar?: string
	username?: string
}

export interface ProfileSchema {
	data?: Profile,
	form?: Profile,
	isLoading: boolean,
	error?: string,
	readonly: boolean,
	validateErrors?: ValidateProfileError[]
}
