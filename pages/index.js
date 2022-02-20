//https://www.templatemonsterpreview.com/demo/44381.html?_gl=1*1yjhhnc*_ga*NDc0NDk4NDQyLjE2NDA4MTE3MTM.*_ga_FTPYEGT5LY*MTY0Mjg0Njk3OS4yLjAuMTY0Mjg0Njk4MC41OQ..&_ga=2.262760908.1361811741.1642846980-474498442.1640811713&_gac=1.190934616.1642846980.CjwKCAiA866PBhAYEiwANkInePUEavJClNxZLyWpG2zsBNyoGbqkgec5qVQwd7mK-NnRRsqNB6EMZRoCpN0QAvD_BwE
import Layout from '@/components/Layout'
import { CateLatest, NewsComp, Hero } from '@/components'
import css from '@/styles/main.module.css'
import { request } from '@/lib/datocms'

import store from 'store'
import { useSnapshot } from 'valtio'

export default function Home({ data }) {
	const games = data.allCards
	const snap = useSnapshot(store)
	if (snap.isClicked === true) {
		setTimeout(() => {
			store.isClicked = false
		}, 100)
	}

	return (
		<>
			<Layout title='EDRASSAM | Home Page'>
				<div className={css.mainContainer}>
					<main>
						<section>
							{snap.isClicked && <div className={css.loadingPages}></div>}
							<Hero />
							<NewsComp news={data.allNews} />
							<CateLatest games={games} />
						</section>
					</main>
				</div>
			</Layout>
		</>
	)
}

const HOMEPAGE_QUERY = `
query MyQuery {
  allCards {
    id
    category {
      category
    }
    gameName
    text
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
        alt
      }
      url
    }
    slug
  }
  allNews {
    id
    date
    text
    slug
  }
}
`
export async function getStaticProps() {
	const data = await request({
		query: HOMEPAGE_QUERY,
	})
	return {
		props: { data },
	}
}
