import { Currency } from 'entities/Currency'
import { Countries } from 'entities/Country'

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
	readonly: boolean
}
