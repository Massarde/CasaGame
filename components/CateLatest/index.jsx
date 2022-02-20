import css from './index.module.css'
import Card from './Card'
import { catList, dataGames } from '@/data/data'
import { useState } from 'react'
export default function Index({ games }) {
	const [isSelected, setIsSelected] = useState('new')
	let getIndex = 0
	if (isSelected === 'popular') {
		getIndex = 1
	}
	if (isSelected === 'top') {
		getIndex = 2
	}
	const getGames = []
	const getCat = games.map((item) => {
		item.category.map((i) => {
			if (i.category === isSelected) {
				getGames.push(item)
			}
		})
	})
	return (
		<div className={css.MAIN_CONTAINER}>
			<div className={css.category_container}>
				<h2>Category</h2>
				{catList.map((list, i) => (
					<div key={i} className={css.list}>
						<p>{list}</p>
					</div>
				))}
			</div>
			<div className={css.latest_container}>
				<div className={css.linksContainer}>
					<div
						className={isSelected === 'new' ? `${css.selected}` : ''}
						onClick={() => setIsSelected('new')}
					>
						All New
					</div>
					<div
						className={isSelected === 'popular' ? `${css.selected}` : ''}
						onClick={() => setIsSelected('popular')}
					>
						Popular
					</div>
					<div
						className={isSelected === 'top' ? `${css.selected}` : ''}
						onClick={() => setIsSelected('top')}
					>
						Top Trend
					</div>
				</div>
				{isSelected === 'new' ? (
					<div className={css.windowContainer}>
						{getGames.map((data) => (
							<div key={data.id}>
								<Card data={data} />
							</div>
						))}
					</div>
				) : isSelected === 'popular' ? (
					<div className={css.windowContainer}>
						{getGames
							.map((data) => (
								<div key={data.id}>
									<Card data={data} />
								</div>
							))
							.sort(() => 0.5 - Math.random())}
					</div>
				) : isSelected === 'top' ? (
					<div className={css.windowContainer}>
						{getGames
							.map((data) => (
								<div key={data.id}>
									<Card data={data} />
								</div>
							))
							.sort(() => 0.5 - Math.random())}
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
