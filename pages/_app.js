import { useState } from 'react'
import '../styles/globals.css'

import css from '../styles/main.module.css'
export default function MyApp({ Component, pageProps }) {
	const [loadComp, setLoadComp] = useState(true)
	const loading = setInterval(() => {
		setLoadComp(false)
	}, 100)
	if (loadComp) {
		return <div className={css.loading}></div>
	}
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
