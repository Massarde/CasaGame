import css from './index.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'
export default function Index({ data }) {
	return (
		<div className={css.MAIN_CONTAINER}>
			<div className={css.img}>
				<Image data={data.img.responsiveImage} alt={data.slug} />
			</div>

			<h3 className={css.name}>{data.gameName}</h3>
			<p className={css.text}>
				{data.text.slice(0, 100)}...{' '}
				<span>
					<Link href={`/games/${data.slug}`}>
						<a>Read More</a>
					</Link>
				</span>
			</p>
		</div>
	)
}
