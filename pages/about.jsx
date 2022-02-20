import css from '@/styles/main.module.css'
import { About } from '@/components'
import Layout from '@/components/Layout'
import store from 'store'
import { snapshot, useSnapshot } from 'valtio'
export default function AboutPage() {
	const snap = useSnapshot(store)
	if (snap.isClicked === true) {
		setTimeout(() => {
			store.isClicked = false
		}, 100)
	}
	return (
		<>
			<Layout title='EDRASSAM | About Page'>
				{snap.isClicked && <div className={css.loadingPages}></div>}
				<section>
					<About />
				</section>
			</Layout>
		</>
	)
}
