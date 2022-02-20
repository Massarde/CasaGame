import css from './index.module.css'
import Link from 'next/link'
import { Image, StructuredText } from 'react-datocms'
import { MdScreenSearchDesktop } from 'react-icons/md'
import { SiGogdotcom } from 'react-icons/si'
import { SiNintendoswitch } from 'react-icons/si'
import { SiApplearcade } from 'react-icons/si'
import { SiPlaystation } from 'react-icons/si'
import { SiXbox } from 'react-icons/si'
import { FaSteam } from 'react-icons/fa'
import { BsArrow90DegUp } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'

export default function index({ cards }) {
	return (
		<div className={css.MAIN_CONTAINER}>
			<div className={css.links_container}>
				<h2>Our Games</h2>
				<h4>CATEGORIES</h4>
				<ul className={css.game_links}>
					<li>Action</li>
					<li>Adventure</li>
					<li>Arcade</li>
					<li>Family & kids</li>
					<li>Indie</li>
					<li>Multiplayer</li>
					<li>Party</li>
					<li>Racing</li>
					<li>Platforms</li>
					<li>RPG</li>
					<li>Sci-fi</li>
					<li>Shooter</li>
					<li>Simulation</li>
					<li>Singleplayer</li>
					<li>Strategy</li>
				</ul>
				<h4>PLATFORM</h4>
				<ul className={css.console_links}>
					<li>
						<SiGogdotcom className={css.icon} />
						GOG
					</li>
					<li>
						<SiNintendoswitch className={css.icon} /> Nintendo
					</li>
					<li>
						<SiApplearcade className={css.icon} />
						Arcade
					</li>
					<li>
						<SiPlaystation className={css.icon} />
						Playstation
					</li>
					<li>
						<FaSteam className={css.icon} />
						Steam
					</li>
					<li>
						<SiXbox className={css.icon} />
						Xbox
					</li>
					<li>
						<MdScreenSearchDesktop className={css.icon} />
						PC
					</li>
				</ul>
			</div>
			<div className={css.gamesContainer}>
				{cards.map((item) => (
					<div key={item.id} className={css.cardContainer}>
						<div className={css.img}>
							<Image data={item.img.responsiveImage} alt={item.slug} />
						</div>
						<div className={css.textContainer}>
							<div className={css.buy_text}>
								<p>
									BUY THIS GAME <BsArrow90DegUp className={css.icon} />
								</p>
							</div>
							<div className={css.text_info}>
								<h2>{item.gameName}</h2>
								<p>{item.text.slice(0, 150)}</p>
								<div className={css.read_more}>
									<Link href={`/games/${item.slug}`} passHref>
										<p>
											Read More <BsArrowRight className={css.icon} />
										</p>
									</Link>
									<div className={css.fill_bg}></div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
