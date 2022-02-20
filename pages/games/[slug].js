import css from '@/styles/main.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { Image, StructuredText } from 'react-datocms'
import { request } from '@/lib/datocms'
import { AiOutlineRollback } from 'react-icons/ai'
import { useRouter } from 'next/router'
export default function Games({ gameData }) {
	const router = useRouter()
	return (
		<Layout title={`EDRASSAM | ${gameData.slug}`}>
			<div className={css.SLUG_CONTAINER}>
				<h1>{gameData.gameName}</h1>
				<div className={css.text}>
					<p className={css.head_text}>{gameData.text}</p>
				</div>

				<div>
					<div className={css.image_container}>
						<Image data={gameData.img.responsiveImage} alt={gameData.slug} />
					</div>
					<StructuredText data={gameData.content.value} />
				</div>
			</div>
			<div onClick={() => router.back()} className={css.link_back}>
				<a>
					Back <AiOutlineRollback className={css.icon} />
				</a>
			</div>
		</Layout>
	)
}

const PATHS_QUERY = `
query MyQuery {
  allCards {
    slug
  }
}

`
export const getStaticPaths = async () => {
	const slugQuery = await request({
		query: PATHS_QUERY,
	})
	let paths = []
	slugQuery.allCards.map((p) => paths.push(`/games/${p.slug}`))
	return {
		paths,
		fallback: false,
	}
}

const GAME_QUERY = `
query MyQuery ($slug: String){
  card(filter: {slug: {eq: $slug}}) {
    id
    gameName
    content {
      value
    }
    text
    slug
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
  }
}`

export const getStaticProps = async ({ params }) => {
	const game = await request({
		query: GAME_QUERY,
		variables: { slug: params.slug },
	})
	return {
		props: {
			gameData: game.card,
		},
	}
}
