import css from './index.module.css'
import Image from 'next/image'
import { FaDirections } from 'react-icons/fa'

export default function first() {
	const handleClear = (e) => {
		e.preventDefault()
	}
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<div className={css.MAIN_CONTAINER}>
			<h1>Contact Information</h1>
			<div className={css.map}>
				<div className={css.direction}>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.google.com/maps/place/London/@51.506022,-0.1603695,11.83z/data=!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862'
					>
						<FaDirections className={css.icon} /> Get Direction
					</a>
				</div>
				<Image
					src='/image/map.jpg'
					alt=''
					layout='responsive'
					width={960}
					height={485}
					quality={80}
					priority={true}
				/>
			</div>
			<div className={css.infoContainer}>
				<div className={css.address}>
					<h2>Address</h2>
					<ul>
						<li>Address 1:</li>
						<li>The Company Name Inc.</li>
						<li>8901 Marmora Road, Glasgow, D04 89GR.</li>
					</ul>
					<ul>
						<li>Telephones:</li>
						<li>+1 800 559 6580</li>
						<li>+1 800 603 6035</li>
					</ul>
					<ul>
						<li>Address 2:</li>
						<li>The Company Name Inc.</li>
						<li>9863 - 9867 Mill Road, Cambridge, MG09 99HT.</li>
					</ul>
				</div>
				<div className={css.form}>
					<h2>Feedback</h2>
					<form>
						<div className={css.form_container}>
							<div className={css.label_input}>
								<label htmlFor='name'>Name:</label>
								<input type='text' />
							</div>
							<div className={css.label_input}>
								<label htmlFor='email'>Email:</label>
								<input type='text' />
							</div>
							<div className={css.label_input}>
								<label htmlFor='telephone'>Telephone:</label>
								<input type='text' />
							</div>
						</div>
						<div className={css.textarea_container}>
							<p>Comment</p>
							<textarea
								name='comment'
								id='comment'
								cols='30'
								rows='10'
								className={css.areaText}
							></textarea>
							<button onClick={handleClear}>Clear</button>
							<button onClick={handleSubmit}>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
