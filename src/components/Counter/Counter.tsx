import { useState } from 'react'
import classes from './Counter.module.scss'

export function Counter() {
	console.log('classes', classes);

	const [count, setCount] = useState(0)
	const handleClick = () => {
		setCount(prev => prev + 1)
	}
	return (
		<>
			<div>{count}</div>

			<button className={classes.btn} onClick={handleClick}>+1</button>
		</>
	)
}

