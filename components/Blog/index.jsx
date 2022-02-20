import css from './index.module.css'
import { Image, StructuredText } from 'react-datocms'
import Link from 'next/link'

const categoriesArr = [
	'Action',
	'Adventure',
	'Arcade',
	'Family & kids',
	'Indie',
	'Multiplayer',
	'Party',
	'Racing',
	'Platforms',
	'RPG',
	'Sci-fi',
	'Shooter',
	'Simulation',
	'Strategy',
]

export default function index({ card }) {
	return (
		<div className={css.MAIN_CONTAINER}>
			<div>
				<h2>Blog</h2>
				<div className={css.card_container}>
					{card.map((item) => (
						<div key={item.id} className={css.card}>
							<div className={css.img}>
								<Image data={item.img.responsiveImage} alt={item.slug} />
							</div>
							<div>
								<p>{item.gameName}</p>
								<p>
									{item.text}{' '}
									<span>
										<Link href={`/games/${item.slug}`}>
											<a>Read More</a>
										</Link>
									</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={css.categoryContainer}>
				<h2>Categories</h2>
				<div>
					{categoriesArr.map((item, i) => (
						<div key={i}>
							<p>{item}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
