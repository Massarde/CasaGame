import css from './index.module.css'
import { MdOutlineHome } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { FaBullhorn } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { DeviceSize } from '../../data/data.js'
import { useState } from 'react'
import store from 'store'
import { useSnapshot } from 'valtio'
const Navbar = () => {
	const snap = useSnapshot(store)
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
	const [isOpen, setIsOpen] = useState(false)
	const [isDrop, setIsDrop] = useState(false)
	const router = useRouter()
	return (
		<header className={css.mainContainer}>
			{snap.isClicked && <div className={css.loadingPages}></div>}
			<nav>
				{!isMobile ? (
					<div className={css.codeInfo}>
						<div className={css.iconContainer}>
							<MdOutlineHome className={css.homeIcon} />
						</div>
						<ul className={css.codesContainer}>
							<li>CMS</li>
							<li>NEXT.JS</li>
							<li>SASS</li>
							<li>GraphQL</li>
						</ul>
						<ul className={css.tmBootContainer}>
							<li>TM add-ons</li>
							<li>FULLSTACK</li>
						</ul>
					</div>
				) : (
					<div
						className={
							!isOpen
								? `${css.hamburgerMenu}`
								: `${css.hamburgerMenu} ${css.hamburgerMenuOpen}`
						}
					>
						<div className={css.bootstrap}>FULLSTACK</div>
						<div
							className={css.icon_hamburger}
							onClick={() => setIsOpen(!isOpen)}
						>
							<GiHamburgerMenu />
						</div>
						{isOpen && (
							<ul className={css.codesContainer}>
								<li>CMS</li>
								<li>NEXT.JS</li>
								<li>SASS</li>
								<li>GraphQL</li>
							</ul>
						)}
					</div>
				)}
				<div className={css.logReg}>
					<ul className={css.lgContainer}>
						<li>LOGIN</li>
						<li>REGISTRATION</li>
						<li></li>
					</ul>
					<ul className={css.smContainer}>
						<li>
							<FaFacebookF />
						</li>
						<li>
							<BsTwitter />
						</li>
						<li>
							<TiSocialGooglePlus />
						</li>
						<li>
							<FaBullhorn />
						</li>
					</ul>
				</div>
				<div className={css.navLinks}>
					<ul className={css.gamesLinks}>
						<li>GAMES</li>
						<li>All About Games</li>
					</ul>
					{!isMobile ? (
						<ul className={css.navBarLinks}>
							<li
								className={router.pathname == '/' ? `${css.isSelected}` : ''}
								onClick={() => (store.isClicked = true)}
							>
								<Link href='/'>HOME</Link>
							</li>
							<li
								className={
									router.pathname == '/about' ? `${css.isSelected}` : ''
								}
								onClick={() => (store.isClicked = true)}
							>
								<Link href='/about'>ABOUT US</Link>
							</li>
							<li
								onClick={() => (store.isClicked = true)}
								className={
									router.pathname == '/blog' ? `${css.isSelected}` : ''
								}
							>
								<Link href='/blog'>BLOG</Link>
							</li>
							<li
								onClick={() => (store.isClicked = true)}
								className={
									router.pathname == '/games' ? `${css.isSelected}` : ''
								}
							>
								<Link href='/games'>GAMES</Link>
							</li>
							<li
								onClick={() => (store.isClicked = true)}
								className={
									router.pathname == '/contact' ? `${css.isSelected}` : ''
								}
							>
								<Link href='/contact'>CONTACT US</Link>
							</li>
						</ul>
					) : (
						<div className={css.openMenu} onClick={() => setIsDrop(!isDrop)}>
							<div>Contact Us</div>
							<div>
								<IoMdArrowDropdown className={css.arrowIcon} />
							</div>
							{isDrop && (
								<div className={css.dropDown}>
									<Link href='/' passHref>
										<div className={css.links}>HOME</div>
									</Link>
									<Link href='/about' passHref>
										<div className={css.links}>ABOUT</div>
									</Link>
									<Link href='/blog' passHref>
										<div className={css.links}>BLOG</div>
									</Link>
									<Link href='/games' passHref>
										<div className={css.links}>GAMES</div>
									</Link>
									<Link href='/contact' passHref>
										<div className={css.links}>CONTACT US</div>
									</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Navbar
