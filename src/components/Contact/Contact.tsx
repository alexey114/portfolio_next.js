import styles from './Contact.module.scss'

export default function Contact() {
	return (
		<div className={styles.contacts}>
			<h1>Контакты:</h1>
			<div className={styles.contact}>
				<a href='tel:+79296538035'>Телефон: +79296538035</a>
				<a href='https://t.me/AlexeyRomanovich'>Телеграмм: @AlexeyRomanovich</a>
				{/* <a href='https://t.me/AlexeyRomanovich'>LinkedIn: @AlexeyRomanovich</a> */}
				<a href='mailto:bomkoar@gmail.com'>E-mail: bomkoar@gmail.com</a>
			</div>
		</div>
	)
}
