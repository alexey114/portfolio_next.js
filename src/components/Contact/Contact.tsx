import Image from 'next/image'
import email from '../../assets/icons/e-mail.svg'
import phone from '../../assets/icons/phone.svg'
import telegram from '../../assets/icons/telegram.svg'
import styles from './Contact.module.scss'

export default function Contact() {
	return (
		<div className={styles.contacts}>
			<h3 className={styles.contacts_header}>Контакты:</h3>
			<div className={styles.contact}>
				{/* <div className={styles.contact_link}>Телефон: +79296538035</div> */}
				<h4>УЗНАЙТЕ БОЛЬШЕ О МОЁМ ОПЫТЕ НАПИСАВ ИЛИ ПОЗВОНИВ МНЕ</h4>
				<div className={styles.contact_item}>
					<a
						className={styles.contact_link}
						href='https://t.me/AlexeyRomanovich'
					>
						<Image src={telegram} alt='telegram' height={30} />
					</a>
					<p>@AlexeyRomanovich</p>
				</div>
				<div className={styles.contact_item}>
					<a className={styles.contact_link} href='mailto:bomkoar@gmail.com'>
						<Image src={email} alt='email' height={25} />
					</a>
					<p>bomkoar@gmail.com</p>
				</div>
				<div className={styles.contact_item}>
					<a className={styles.contact_link} href='tel:+79296538035'>
						<Image src={phone} alt='telegram' height={30} />
					</a>
					<p>+79296538035</p>
				</div>


				{/* <a className={styles.contact_link} href='https://t.me/AlexeyRomanovich'>LinkedIn: @AlexeyRomanovich</a> */}

			</div>
		</div>
	)
}
