import styles from './Project.module.scss'
import ProjectCards from './ProjectCards'

export default function Project() {
	return (
		<div className={styles.project}>
			<div className={styles.project_headers}>
				<div className={styles.project_header}>
					<h3>
						Мои <span>Проекты</span>
					</h3>
				</div>
				<div className={styles.project_text}>
					<p>
						Приобрел коммерческий опыт в компании Цифровой результат
						специализирующейся на работе с госконтрактами
					</p>
				</div>
			</div>

			<div>
				<ProjectCards />
			</div>
		</div>
	)
}
