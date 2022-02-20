import css from './index.module.css'
import { FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'
const staffArr = [
	'page2_pic2.jpg',
	'page2_pic3.jpg',
	'page2_pic4.jpg',
	'page2_pic5.jpg',
	'page2_pic6.jpg',
	'page2_pic7.jpg',
]
const testimonialsArr = [
	{
		text: 'Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Aenean arcu purus, in auctor at suscipit at, tincidun id ligulan disse potenti. Phasellus dignissim con sectetur convallis. Nulla facilisi.',
		name: 'Patrick Pool',
	},
	{
		text: 'Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Aenean arcu purus, in auctor at suscipit at, tincidun id ligulan disse potenti. Phasellus dignissim con sectetur convallis. Nulla facilisi.',
		name: 'Gloria Mann',
	},
	{
		text: 'Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Aenean arcu purus, in auctor at suscipit at, tincidun id ligulan disse potenti. Phasellus dignissim con sectetur convallis. Nulla facilisi.',
		name: 'Tom James',
	},
	{
		text: 'Lorem ipsum dolor sit amet, cosectetur adipiscing elit. Aenean arcu purus, in auctor at suscipit at, tincidun id ligulan disse potenti. Phasellus dignissim con sectetur convallis. Nulla facilisi.',
		name: 'Alan Smith',
	},
]
export default function index() {
	return (
		<div className={css.MAIN_CONTAINER}>
			<div className={css.topContainer}>
				<div className={css.about}>
					<h2 className={css.head_text}>About</h2>
					<div className={css.imgContainer}>
						<Image
							src='/image/page2_pic1.jpg'
							layout='responsive'
							alt=''
							width={500}
							height={250}
						/>
					</div>
					<p>
						Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis
						quis, lobortis dignissim, pulvinar ac.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
						vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
						Phasellus. Fusce suscipit varius mi. Cum sociis natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.
						Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus
						nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies
						pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros.
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
						fermentum dictum magna.
					</p>
				</div>
				<div className={css.ourMission_container}>
					<h2 className={css.head_text}>Our Mission</h2>
					<div>
						<p>Praesent justo dolor, lobortis quis, lobortis</p>
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent
							vestibulum molestie lacus. Aenean nonummy hendrerit mauris.
							Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							Nulla dui. Fusce feugiat malesuada odio.
						</p>
					</div>
					<div>
						<p>Vestibulum sed ante</p>
						<p>
							Cum sociis natoque penatibus et magnis dis parturient montes,
							nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.
							Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas
							tristique orci ac sem. Duis ultricies pharetra magna. Donec
							accumsan orci.
						</p>
					</div>
					<div>
						<p>Aliquam dapibus tincidunt metus</p>
						<p>
							Cum sociis natoque penatibus et magnis dis parturient montes,
							nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.
							Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas
							tristique orci ac sem. Duis ultricies pharetra magna. Donec
							accumsan orci.
						</p>
					</div>
				</div>
				<div className={css.staff_container}>
					<h2 className={css.head_text}>Staff</h2>
					<div className={css.img_staff_container}>
						{staffArr.map((staff, i) => (
							<div className={css.staffImg} key={i}>
								<Image
									src={`/image/${staff}`}
									layout='responsive'
									alt=''
									width={170}
									height={150}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={css.TestimonialsContainer}>
				<h2 className={css.head_text}>Testimonials</h2>
				<div className={css.container}>
					{testimonialsArr.map((item, i) => (
						<div className={css.testiCard} key={i}>
							<FaQuoteLeft className={css.icon} />
							<p>{item.text}</p>
							<p>
								{item.name}, <span>client</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
