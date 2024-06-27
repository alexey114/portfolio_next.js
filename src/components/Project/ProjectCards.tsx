import styles from './Project.module.scss'
import ProjectCard from './ProjectCard'

export default function ProjectCards() {
	return (<div className={styles.project_cards}>
		<ProjectCard/>
		<ProjectCard/>
		<ProjectCard/>
	</div>)
}
