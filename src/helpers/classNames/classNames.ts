type Mods = Record<string, boolean | string>

type Props = {
	cls: string
	mods: Mods
	additional: string[]
}

export function classNames({ additional, cls, mods }: Props) {

	return [
		cls,
		...additional,
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className)
	].join(' ')
}