import Image from 'next/image'
import email from '../../assets/icons/e-mail.svg'
import linkedIn from '../../assets/icons/linkedIn.svg'
import telegram from '../../assets/icons/telegram.svg'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_contacts}>
				<a href='https://t.me/AlexeyRomanovich' target='_blank'>
					<Image src={telegram} alt='telegram' height={30} />
				</a>
				<a href='mailto:bomkoar@gmail.com'>
					<Image src={email} alt='email' height={30} />
				</a>
				<Image src={linkedIn} alt='linkedIn' height={30} />
			</div>
			<div className={styles.footer_copyright}>
				<p>Copyright© 2024 Бомко Алексей. Все права защищены.</p>
			</div>
		</footer>
	)
}

export { Footer }
