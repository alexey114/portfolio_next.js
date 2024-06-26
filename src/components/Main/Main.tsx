import Image from 'next/image'
import photo from '../../assets/photo/photo.jpg'
import Project from '../Project/Project'
import Skills from '../Skills/Skills'
import Works from '../Works/Works'
import styles from './Main.module.scss'

export function Main() {
	return (
		<div>
			<section className={styles.home}>
				<div className={styles.home_headers}>
					<h1 className={styles.home_header}>Frontend Developer</h1>
					<p className={styles.home_text}>Стаж более трех лет в различных проектах</p>
					<p className={styles.home_text}>В том числе с крупными государственными заказчиками в рамках
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
			< Skills />
			< Project />
		</div>
	)
}
