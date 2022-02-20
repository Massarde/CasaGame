import css from './index.module.css'
import Link from 'next/link'
import Moment from 'react-moment'
export default function Index({ news }) {
	return (
		<div className={css.MAIN_CONTAINER}>
			<div>
				<h2>News</h2>
			</div>
			<div className={css.newsContainer}>
				{news.map((n) => (
					<div key={n.id} className={css.news}>
						<p>
							<Moment format=' Do MMM, YYYY'>{n.date}</Moment>
						</p>
						<p>
							{n.text}...
							<span>
								<Link href={`/news/${n.slug}`}>
									<a>Read More</a>
								</Link>
							</span>
						</p>
					</div>
				))}
			</div>
		</div>
	)
}
