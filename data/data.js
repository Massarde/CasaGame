import Image from 'next/image'

import { v4 as uuidv4 } from 'uuid'

const links = [
	{ id: uuidv4(), text: 'Home', url: '#home' },
	{ id: uuidv4(), text: 'Services', url: '#services' },
	{ id: uuidv4(), text: 'Discover', url: '#discover' },
]

const DeviceSize = {
	mobile: 768,
	tablet: 992,
	laptop: 1324,
	desktop: 2024,
}

const catList = [
	'Action',
	'Adventure',
	'Beauty',
	'Board & Card',
	'Caring',
	'Casino Games',
	'Cooking',
	'Dating',
	'Decoration',
	'Dress Up',
	'Girls',
	'Kids',
	'Hairdresser',
	'Hidden Objects',
	'Mahjong',
	'Multiplayer',
	'Puzzle',
	'Quizzes',
	'Racing',
	'Skill',
	'Sports',
	'Time Management',
	'Wedding',
	'Parking',
	'Restaurant Games',
]
const carousel = [
	{
		id: 1,
		image: '/image/picture1.jpg',
		vidTitle: 'Tom Clancys II',
		vidDate: 'Feb. 18, 2013',
		vidText:
			"Tom Clancy's The Division 2 is an online-only action role-playing video game developed by Massive Entertainment.",

		watchVideo: 'Watch Video',
		videoLink: '0kc6lEi_9Ts',
	},
	{
		id: 2,
		image: '/image/Crysis3.jpg',
		vidTitle: 'Crysis 3',
		vidDate: 'Jan. 18, 2017',
		vidText:
			'Crysis 3 is a 2013 first-person shooter video game developed by Crytek and published by Electronic Arts.',

		watchVideo: 'Watch Video',
		videoLink: '8PdGUZauShA',
	},
	{
		id: 3,
		image: '/image/MetalGear.jpg',
		vidTitle: 'Metal Gear',
		vidDate: 'Mar 27, 2017',
		vidText:
			'Metal Gear is a series of techno-thriller stealth games created by Hideo Kojima. Developed and published by Konami.',
		watchVideo: 'Watch Video',
		videoLink: 'NL4ZxDWLwpM',
	},
]
export { links, DeviceSize, catList, carousel }
