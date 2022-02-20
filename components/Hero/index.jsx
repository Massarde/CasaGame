import css from './index.module.css'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { CgCloseO } from 'react-icons/cg'
import { BsPlayCircle } from 'react-icons/bs'
import { carousel } from '@/data/data'
export default function Hero() {
	const [isOpen, setIsOpen] = useState(false)
	const handleOpenVideo = () => {
		setIsOpen(true)
	}
	const [carouselCount, setCarouselCount] = useState(0)
	const [anime, setAnime] = useState(false)

	const animeToLeft = () => {
		setAnime(true)
		setTimeout(() => {
			setAnime(false)
		}, 300)
		if (carouselCount < carousel.length - 2) {
			setAnime(true)
			setTimeout(() => {
				setAnime(false)
			}, 500)
			setCarouselCount(carousel.length - 1)
		} else {
			setAnime(true)
			setTimeout(() => {
				setAnime(false)
			}, 500)
			setCarouselCount(carouselCount - 1)
		}
	}
	const animeToRight = () => {
		setAnime(true)
		setTimeout(() => {
			setAnime(false)
		}, 500)
		if (carouselCount > carousel.length - 2) {
			setCarouselCount(0)
		} else {
			setAnime(true)
			setTimeout(() => {
				setAnime(false)
			}, 500)
			setCarouselCount(carouselCount + 1)
		}
	}
	const YoutubeEmbed = ({ embedId }) => (
		<div className={css.video_responsive}>
			<iframe
				width='853'
				height='480'
				src={`https://www.youtube.com/embed/${embedId}`}
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				title='Embedded youtube'
			/>
		</div>
	)
	YoutubeEmbed.propTypes = {
		embedId: PropTypes.string.isRequired,
	}

	return (
		<div className={css.MAIN_CONTAINER}>
			{anime && <div className={css.anime}></div>}
			<div className={css.img}>
				<div className={css.image_container}>
					<Image
						src={carousel[carouselCount].image}
						alt=''
						layout='responsive'
						width={1400}
						height={562}
						priority={true}
					/>
				</div>
				<div className={css.videoContainer}>
					<div className={css.video}>
						<h2>{carousel[carouselCount].vidTitle}</h2>
						<p>{carousel[carouselCount].vidDate}</p>
						<p>{carousel[carouselCount].vidText.slice(0, 120)}..</p>
						<div className={css.watchVideo} onClick={handleOpenVideo}>
							<BsPlayCircle className={css.player} /> Watch Video
						</div>
					</div>
				</div>
				<div className={css.arrowsContainer}>
					<div className={css.btn} onClick={animeToLeft}>
						<IoMdArrowDropleft />
					</div>
					<div className={css.btn} onClick={animeToRight}>
						<IoMdArrowDropright />
					</div>
				</div>
			</div>
			<div>
				{isOpen && (
					<div className={css.backModal} onClick={() => setIsOpen(false)}>
						<div className={css.youtubeVideo}>
							<YoutubeEmbed embedId={carousel[carouselCount].videoLink} />
							<div className={css.closeBTN}>
								<CgCloseO />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
