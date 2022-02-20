import css from '@/styles/main.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Moment from 'react-moment'
import { request } from '@/lib/datocms'
import { Image, StructuredText } from 'react-datocms'
import { AiOutlineRollback } from 'react-icons/ai'
import { useState } from 'react'
export default function News({ gameNews }) {
	const [loading, setLoading] = useState(false)
	const news = gameNews.news
	if (loading) {
		return <div className={css.loading}></div>
	}
	return (
		<Layout title={`EDRASSAM | ${news.slug}`}>
			<div className={css.NEWS_CONTAINER}>
				<h1 className={css.head_text}>{news.text}</h1>
				<p className={css.date}>
					<Moment format=' Do MMM, YYYY'>{news.date}</Moment>
				</p>
				<div className={css.image_container}>
					<Image data={news.image.responsiveImage} alt={news.slug} />
				</div>
				<h2 className={css.title}>{news.title}</h2>
				<div className={css.content}>
					<StructuredText data={news.content.value} />
				</div>
				<div className={css.icon_container} onClick={() => setLoading(true)}>
					<Link href='/'>
						<a>
							Back <AiOutlineRollback className={css.icon} />
						</a>
					</Link>
				</div>
			</div>
		</Layout>
	)
}

const PATHS_QUERY = `
query MyQuery {
  allNews {
    slug
  }
}
`
export const getStaticPaths = async () => {
	const slugQuery = await request({
		query: PATHS_QUERY,
	})
	let paths = []
	slugQuery.allNews.map((p) => paths.push(`/news/${p.slug}`))
	return {
		paths,
		fallback: false,
	}
}

const NEWS_QUERY = `
query MyQuery ($slug: String){
  news(filter: {slug: {eq: $slug}}) {
    title
    text
    slug
    image {
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
    content {
      value
    }
    date
  }
}

`
export const getStaticProps = async ({ params }) => {
	const news = await request({
		query: NEWS_QUERY,
		variables: { slug: params.slug },
	})
	return {
		props: {
			gameNews: news,
		},
	}
}
