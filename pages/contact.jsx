import Layout from '@/components/Layout'
import { Contact } from '@/components'
import css from '@/styles/main.module.css'
import store from 'store'
import { snapshot, useSnapshot } from 'valtio'
export default function ContactPage() {
	const snap = useSnapshot(store)
	if (snap.isClicked === true) {
		setTimeout(() => {
			store.isClicked = false
		}, 100)
	}
	return (
		<Layout title='EDRASSAM | Contact Page'>
			{snap.isClicked && <div className={css.loadingPages}></div>}
			<Contact />
		</Layout>
	)
}
