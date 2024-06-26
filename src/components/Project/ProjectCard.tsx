import styles from './Project.module.scss'

export default function ProjectCard() {
	return (
		<div className={styles.project_card}>
			<div className={styles.project_card_opacity}></div>
			<div className={styles.project_header}>
				<h4>Верстка</h4>
			</div>
			<a className={styles.project_card_images}>
				<div className={styles.project_card_img}></div>
			</a>
		</div>
	)
}
