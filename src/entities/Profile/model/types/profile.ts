import { Countries, Currency } from 'shared/const/common'

export interface Profile {
	firstName: string,
	lastName: string,
	age: number,
	currency: Currency,
	country: Countries,
	city: string,
	avatar: string
}

export interface ProfileSchema {
	data?: Profile,
	isLoading: boolean,
	error?: string,
	readonly: boolean
}
