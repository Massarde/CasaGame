import Layout from '@/components/Layout'
import css from '@/styles/main.module.css'
import { Games } from '@/components'
import { request } from '@/lib/datocms'
import store from 'store'
import { snapshot, useSnapshot } from 'valtio'
export default function GameData({ data }) {
	const snap = useSnapshot(store)
	if (snap.isClicked === true) {
		setTimeout(() => {
			store.isClicked = false
		}, 100)
	}
	return (
		<Layout title='EDRASSAM | Games Page'>
			{snap.isClicked && <div className={css.loadingPages}></div>}
			<Games cards={data.allCards} />
		</Layout>
	)
}

const GAME_QUERY = `
query MyQuery {
  allCards {
    id
    slug
    gameName
    img {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
      }
    }
    text
  }
}
`
export async function getStaticProps() {
	const data = await request({
		query: GAME_QUERY,
	})
	return {
		props: { data },
	}
}
