import styles from './Project.module.scss'
import ProjectCard from './ProjectCard'

export default function ProjectCards() {
	return (<section className={styles.project_cards}>
		<ProjectCard/>
		<ProjectCard/>
		<ProjectCard/>
	</section>)
}
