import Image from 'next/image'
import photo from '../../assets/photo/photo.jpg'
import Works from '../Works/Works'
import styles from './Main.module.scss'

interface IMain {}

export function Main({}: IMain) {
	return (
		<div>
			<section className={styles.home}>
				<div className={styles.home_text}>
					<h1>Frontend Developer</h1>
					<p>Стаж более трех лет в различных проектах</p>
					<p>
						В том числе с крупными государственными заказчиками в рамках
						госконтрактов
					</p>
				</div>
				<div className={styles.home_photo}>
					<Image
						className={styles.home_image}
						src={photo}
						alt='Моё фото'
						// width={700}
						placeholder='blur'
						//?? сделать анимацию при появлении фото
					/>
				</div>
			</section>
			< Works />
		</div>
	)
}
