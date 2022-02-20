import css from './index.module.css'
import Image from 'next/image'
import { MdOutlineMarkEmailRead } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className={css.mainContainer}>
			<div className={css.archive}>
				<h2>Archive</h2>
				<ul>
					<li>July 2012</li>
					<li>May 20122</li>
					<li>April 2012</li>
					<li>March 2012</li>
					<li>February 2012</li>
					<li>January 2012</li>
				</ul>
			</div>
			<div className={css.newsletter}>
				<h2>Newsletter</h2>
				<p>
					Sign up for our NEWSLETTER and keep on top of the latest games in the
					market
				</p>
				<div className={css.inputContainer}>
					<MdOutlineMarkEmailRead className={css.icon} />
					<input type='text' placeholder='E-mail' />
				</div>
				<div className={css.btn}>SUBSCRIBE</div>
			</div>
			<div className={css.comments}>
				<h2>Recent Comments</h2>
				<div className={css.container}>
					<div className={css.img}>
						<Image
							src={'/image/page1_pic14.jpg'}
							width={130}
							height={130}
							alt='pic'
							priority={true}
						/>
					</div>
					<div className={css.text}>
						<p>Stefan Morgan</p>
						<p>Feb. 18, 2013</p>
						<p>
							Using this website since early 2012 and its still good. If you
							like video games current and up coming, then you should definitely
							check it out.
						</p>
					</div>
				</div>

				<div className={`${css.container} ${css.containerTwo}`}>
					<div className={css.img}>
						<Image
							src={'/image/page1_pic15.jpg'}
							width={130}
							height={130}
							alt='pic'
							priority={true}
						/>
					</div>
					<div className={css.text}>
						<p>Jessica Drew</p>
						<p>Feb. 18, 2013</p>
						<p>
							I love this website. You can find all kind of information in
							regards to gaming, from current video games news, reviews, videos,
							etc.
						</p>
					</div>
				</div>
			</div>
			<div className={css.blocks}>
				<div className={css.adSpot}>
					<p>125x125</p>
					<p>Ad Spot</p>
				</div>
				<div className={css.adSpot}>
					<p>125x125</p>
					<p>Ad Spot</p>
				</div>
				<div className={css.adSpot}>
					<p>125x125</p>
					<p>Ad Spot</p>
				</div>
				<div className={css.adSpot}>
					<p>125x125</p>
					<p>Ad Spot</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
